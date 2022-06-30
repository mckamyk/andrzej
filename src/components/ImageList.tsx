import React from 'react';
import {Card, CardContent, CardMedia, Grid} from '@mui/material';
import fence from '../assets/fence.jpg';
import driveway from '../assets/driveway.jpg';
import bench from '../assets/bench.jpg';
import patio from '../assets/patio.jpg';
import poolDeck from '../assets/pool-deck.jpg';

const ImageList = () => (
	<Grid container spacing={2} sx={{justifyContent: 'center'}}>
		<Grid item xs={12} md={6}>
			<Card>
				<CardMedia
					component='img'
					alt='fences'
					height='200'
					image={fence}
				/>
				<CardContent>Fences</CardContent>
			</Card>
		</Grid>

		<Grid item xs={12} md={6}>
			<Card>
				<CardMedia
					component='img'
					alt='driveways'
					height='200'
					image={driveway}
				/>
				<CardContent>Driveways</CardContent>
			</Card>
		</Grid>

		<Grid item xs={12} md={6}>
			<Card>
				<CardMedia
					component='img'
					alt='benches'
					height='200'
					image={bench}
				/>
				<CardContent>Outdoor Furnature</CardContent>
			</Card>
		</Grid>

		<Grid item xs={12} md={6}>
			<Card>
				<CardMedia
					component='img'
					alt='patios'
					height='200'
					image={patio}
				/>
				<CardContent>Patios</CardContent>
			</Card>
		</Grid>

		<Grid item xs={12} md={6}>
			<Card>
				<CardMedia
					component='img'
					alt='pool decks'
					height='200'
					image={poolDeck}
				/>
				<CardContent>Pool Decks</CardContent>
			</Card>
		</Grid>
	</Grid>
);

export default ImageList;
