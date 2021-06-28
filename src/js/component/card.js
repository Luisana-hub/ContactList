import React from "react";

const Card = () => {
	return (
		<div className="mt-2">
			<div className="container">
				<div className="card mb-3">
					<div className="row no-gutters">
						<div className="col-md-4 img-profile rounded-circle">
							<img
								src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv"
								alt="..."></img>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
