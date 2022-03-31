import React from 'react'
import loader from '../../../img/extra/DoubleRing.svg';

function LoadingSpinner() {
	return (
		<div style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
			<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", transform: "translate(calc(11vh/2), calc(90vh/2))", color: "white" }}>
				<img src={loader} alt='loader' style={{ width: "100px", heigth: "100px" }} />
				<p style={{ color: "#fff", fontSize: "18px"}}>Loading...</p>
			</div>
		</div>
	)
}

export default LoadingSpinner