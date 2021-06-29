import React, { useState } from "react";

const Formulario = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	return (
		<div className="container">
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Full Name</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput2"
					placeholder="Full Name"
					onChange={e => setFullName(e.target.value)}></input>
			</div>
			<div className="form-group">
				<label htmlFor="inputEmail4">Email</label>
				<input
					type="email"
					className="form-control"
					id="inputEmail4"
					placeholder="Enter email"
					onChange={e => setEmail(e.target.value)}></input>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Phone</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder="Enter phone"
					onChange={e => setPhone(e.target.value)}></input>
			</div>
			<div className="form-group">
				<label htmlFor="formGroupExampleInput">Address</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder="Enter address"
					onChange={e => setAddress(e.target.value)}></input>
			</div>
		</div>
	);
};

export default Formulario;
