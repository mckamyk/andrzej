import React from 'react';
import {Container, Card, CardHeader, CardContent, Typography, Grid} from '@mui/material';
import ImageList from './ImageList';
import RequestQuote from './Request';

const EntryCard = () => (
	<Container>
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Card>
					<CardHeader title='Kaminski Pressure Washing'></CardHeader>

					<CardContent>
						<Typography variant='h5'>Exceptional cleaning at an unbeatable price.</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item xs={12}>
				<ImageList />
			</Grid>

			<Grid item xs={12}>
				<RequestQuote />
			</Grid>
		</Grid>
	</Container>
);

export default EntryCard;
