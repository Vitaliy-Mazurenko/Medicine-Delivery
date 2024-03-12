import React from 'react';
import './button.css';

export default function Button({ text, onClick, id, disabled }) {
	return (
		<button id={id} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
}
