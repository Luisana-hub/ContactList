import React from "react";
import { Link } from "react-router-dom";

const Formulario = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<h2>Add a new contact</h2>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Full Name</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Full Name"></input>
				</div>
				<div className="form-group">
					<label htmlFor="inputEmail4">Email</label>
					<input
						type="email"
						className="form-control"
						id="inputEmail4"
						placeholder="Enter email"></input>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Phone</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Enter phone"></input>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Address</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Enter address"></input>
				</div>
				<div className="row">
					<div className="col-12">
						<button type="submit" className="btn btn-primary">
							SAVE
						</button>
					</div>
					<div className="col">
						<Link to="/">or get back to contacts</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Formulario;
