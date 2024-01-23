// AdPanel.js
import React from "react";
import "../css/AdPanel.css";

const AdPanel = () => {
	return (
		<div className='ad-panel'>
			<img
				src='https://portsaid.vtexassets.com/arquivos/ids/372657/AP332080_PS_1.jpg?v=638358308542170000'
				alt='Publicidad'
				className='ad-image'
			/>
			<div className='ad-content'>
				<h3>¡Descuentos exclusivos!</h3>
				<p>No te pierdas nuestras ofertas especiales.</p>
			</div>
		</div>
	);
};

export default AdPanel;
