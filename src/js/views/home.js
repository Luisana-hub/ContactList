import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h2>CONTACT LIST</h2>
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
				</div>
			</div>
		</div>
	);
};

export default Home;
