import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";
import { Context } from "../store/appContext";
import getState from "../store/flux";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchListContact();
	}, []);
	// eslint-disable-next-line no-console
	console.log(store.listContact, "muestra agenda");
	return (
		<div className="mt-5">
			<div className="row justify-content-center">
				<h2>Contact List</h2>
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
			</div>
			<div className="container">
				{store.listContact.map(item => (
					<div key={item.id}>
						<Card
							title={item.full_name}
							address={item.address}
							phone={item.phone}
							email={item.email}
							id={item.id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
