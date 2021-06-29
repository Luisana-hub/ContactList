import React from "react";
import Formulario from "../component/formulario";
import { Link } from "react-router-dom";

const Edit = () => {
	return (
		<div className="mt-5">
			<div className="row justify-content-center">
				<h2>Edit contact</h2>
			</div>
			<div className="container">
				<form>
					<p1>Formulario</p1>
					<div className="row">
						<div className="col-12">
							<button
								type="submit"
								className="btn btn-primary form-control">
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
