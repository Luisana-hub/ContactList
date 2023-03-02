import React, { useContext, useEffect } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-2">
			<div className="container">
				<div className="card mb-3">
					<div className="row no-gutters">
						<div
							className="col-md-3"
							style={{
								maxHeight: "300px"
							}}>
							<img
								className="rounded-circle ml-3 mt-2"
								style={{
									width: "160px",
									height: "160px"
								}}
								src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv"
								alt="..."></img>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5 className="FullName">{props.title}</h5>
								<p className="Address">{props.address}</p>
								<p className="Phone">{props.phone}</p>
								<p className="Email">{props.email}</p>
							</div>
						</div>
						<div className="col-md-3 edit">
							<div className="row mt-4">
								<div className="col-4">
									<Link to={`/edition/${props.id}`}>
										<button>
											<FaRegEdit />
										</button>
									</Link>
								</div>
								<div className="col-4 delete">
									<button
										onClick={() =>
											actions.fetchDeleteContact(props.id)
										}>
										<FaRegTrashAlt />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.any,
	id: PropTypes.any,
	address: PropTypes.any,
	phone: PropTypes.any,
	email: PropTypes.any,
	actions: PropTypes.object
};
