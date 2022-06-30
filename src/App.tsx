import React from 'react';
import {Background} from './components/background';
import EntryCard from './components/EntryCard';

function App() {
	return (
		<div>
			<Background>
				<EntryCard />
			</Background>
		</div>
	);
}

export default App;
