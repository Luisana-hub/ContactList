import React, { useState, useContext } from "react";
//import Formulario from "../component/formulario";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Edit = () => {
	const { id } = useParams();
	// eslint-disable-next-line no-console
	console.log(id);
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const onSubmit = e => {
		e.preventDefault();
		// eslint-disable-next-line no-console
		console.log("se ejecuta el enter");
	};
	return (
		<div className="mt-5">
			<div className="row justify-content-center">
				<h2>Edit contact</h2>
			</div>
			<div className="container">
				<form onSubmit={onSubmit}>
					<div className="container">
						<div className="form-group">
							<label htmlFor="formGroupExampleInput">
								Full Name
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput2"
								placeholder="Full Name"
								onChange={e =>
									setFullName(e.target.value)
								}></input>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail4">Email</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail4"
								placeholder="Enter email"
								onChange={e =>
									setEmail(e.target.value)
								}></input>
						</div>
						<div className="form-group">
							<label htmlFor="formGroupExampleInput">Phone</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Enter phone"
								onChange={e =>
									setPhone(e.target.value)
								}></input>
						</div>
						<div className="form-group">
							<label htmlFor="formGroupExampleInput">
								Address
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Enter address"
								onChange={e =>
									setAddress(e.target.value)
								}></input>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<button
								type="submit"
								className="btn btn-primary form-control"
								onClick={() => {
									actions.fechtEditContact(
										id,
										fullName,
										email,
										address,
										phone
									);
								}}>
								SAVE
							</button>
						</div>
						<div className="col">
							<Link to="/">or get back to contacts</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Edit;
