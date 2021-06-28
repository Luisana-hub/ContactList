import React from "react";
import { Link } from "react-router-dom";

const Formulario = () => {
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label for="formGroupExampleInput">Full Name</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Full Name"></input>
				</div>
				<div className="form-group">
					<label for="inputEmail4">Email</label>
					<input
						type="email"
						className="form-control"
						id="inputEmail4"
						placeholder="Enter email"></input>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput">Phone</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Enter phone"></input>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput">Address</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Enter address"></input>
				</div>
				<button type="submit" class="btn btn-primary">
					SAVE
				</button>
				<Link to="/">or get back to contacts</Link>
			</form>
		</div>
	);
};

export default Formulario;
