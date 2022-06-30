import React from 'react';
import {Box} from '@mui/material';
import washing from '../assets/washing.jpg';

interface BackgroundProps extends React.PropsWithChildren {}

export const Background = ({children}: BackgroundProps) => (
	<Box sx={{
		minHeight: '100vh',
		backgroundImage: `url(${washing})`,
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		padding: '20px 0',
	}}>
		{children}
	</Box>
);
