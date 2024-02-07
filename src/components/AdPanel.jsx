
import React from "react";
import "../css/AdPanel.css";

const AdPanel = () => {
	return (
		<div className='ad-panel'>
			<img
				src='https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/65c3c0156deefe5ea08b6dd2/download/222.jpg'
				alt='Publicidad'
				className='ad-image'
			/>
			<div className='ad-content'>
				<h3>¡Descuentos exclusivos!</h3>
				<p>No te pierdas nuestras ofertas Adidas</p>
			</div>
		</div>
	);
};

export default AdPanel;
