import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Card = props => {
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
								<p className="Address">Address</p>
								<p className="Phone">Phone</p>
								<p className="Email">Email</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="row mt-4">
								<div className="col-4">
									<button>
										<img
											src="https://w7.pngwing.com/pngs/740/67/png-transparent-computer-icons-icon-design-edit-angle-computer-data-thumbnail.png"
											style={{
												width: "20px",
												height: "20px"
											}}></img>
									</button>
								</div>
								<div className="col-4">
									<button>
										<img
											src="https://image.flaticon.com/icons/png/512/2907/2907762.png"
											style={{
												width: "20px",
												height: "20px"
											}}></img>
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
	email: PropTypes.any
};
