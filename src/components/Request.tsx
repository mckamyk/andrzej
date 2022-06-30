import React, {useState, useCallback} from 'react';
import {styled, Card, CardContent, Typography, FormControl, TextField, CardActions, Button, Alert} from '@mui/material';
import {sendMessage} from '../services/discord';

interface FormValues {
	name: string;
	address: string;
	phone: string;
	description: string;
}

const defaultValues: FormValues = {
	name: '',
	address: '',
	phone: '',
	description: '',
};

const CenteredAlert = styled(Alert)({
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '100%',
	zIndex: 10000,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const RequestQuote = () => {
	const [formValues, setFormValues] = useState<FormValues>(defaultValues);

	const [success, setSuccess] = useState<boolean>();

	const updateValues = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = ev.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = ev => {
		ev.preventDefault();
		send();
	};

	const send = useCallback(async () => {
		const {name, address, phone, description} = formValues;
		const lines: string[] = [
			'@everyone',
			'=== New Request ===',
			`${name} - ${phone}`,
			address,
			description,
			'================',
		];
		try {
			await sendMessage(lines.join('\n'));
			setSuccess(true);
			setFormValues(defaultValues);
		} catch {
			setSuccess(false);
		}
	}, [sendMessage, formValues, setFormValues]);

	return (
		<Card>
			<CardContent sx={{position: 'relative'}}>
				{success && (<CenteredAlert severity='success'>{'Thanks for your interest. We\'ll get back to you soon!'}</CenteredAlert>)}
				{success === false && (<CenteredAlert severity='error'>Uh oh! Something broke. Try texting me at 901.573.5881</CenteredAlert>)}

				<Typography variant='h5'>Send me your information, and {'I\'ll'} reply with an estimate.</Typography>

				<form onSubmit={handleSubmit}>
					<FormControl fullWidth>
						<TextField required fullWidth variant='filled' label='Name' name='name' onChange={updateValues} value={formValues.name}/>
						<TextField required fullWidth variant='filled' label='Address' name='address' onChange={updateValues} value={formValues.address}/>
						<TextField required fullWidth variant='filled' label='Phone Number' name='phone' onChange={updateValues} value={formValues.phone} />
						<TextField fullWidth variant='filled' multiline label='Additional Details' name='description' onChange={updateValues} value={formValues.description} />
					</FormControl>
				</form>
			</CardContent>

			<CardActions>
				<Button onClick={() => send()}>Request Services</Button>
			</CardActions>
		</Card>
	);
};

export default RequestQuote;
