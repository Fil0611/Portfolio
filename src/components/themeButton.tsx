'use client'

import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

export default function ThemeButton() {
	const isLight: boolean = true;

	// 1. ottenere il tema selezionato
	// 2. impostarlo come valore iniziale per lo state
	// 3. quando cambia il valore di theme, cambiare anche prefers-color-scheme in accordanza
	const [theme, setTheme] = useState(isLight);

	// Funzione per l'handling the tema selezionato
	function handleChangeTheme() {
		console.log("Changed Theme!");	// [DEBUG]
		if (theme) {
			setTheme(false);
		} else {
			setTheme(true);
		}
	}

	return (
		<div className='flex-none'>
			<div role='button' className='btn btn-ghost btn-circle'>
				<button className='navbar-end' onClick={handleChangeTheme}>
					<i className={'bi-' + (theme ? 'brightness-high' : 'moon-stars') + '-fill'} style={{ fontSize: 1 + 'rem' }} />
				</button>
			</div>
		</div>
	)
}