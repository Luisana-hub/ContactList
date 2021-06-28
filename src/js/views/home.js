import React from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="mt-5">
			<div className="row justify-content-center">
				<h2>CONTACT LIST</h2>
			</div>
			<div className="container">
				<div className="row justify-content-end">
					<Link
						to="/create"
						type="button"
						className="btn btn-success">
						Add new contact
					</Link>
				</div>
				<div>
					<h3>The List</h3>
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Home;
