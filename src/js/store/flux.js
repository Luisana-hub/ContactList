const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContact: []
		},
		actions: {
			fetchListContact: () => {
				fetch(
					"https://assets.breatheco.de/apis/fake/contact/agenda/agenda_monalisa"
				)
					.then(response => response.json())
					.then(data => setStore({ listContact: data })) // eslint-disable-next-line no-console
					.catch(error => console.log(error));
			},
			fetchDeleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(() => {
						fetch(
							"https://assets.breatheco.de/apis/fake/contact/agenda/agenda_monalisa"
						)
							.then(response => response.json())
							.then(data => {
								// eslint-disable-next-line no-console
								console.log("data", data),
									setStore({
										listContact: data
									});
							});
					}) // eslint-disable-next-line no-console
					.catch(error => console.log(error));
			},
			fetchAddContact: (fullName, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "agenda_monalisa",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch(
						"https://assets.breatheco.de/apis/fake/contact/agenda/agenda_monalisa"
					)
						.then(response => response.json())
						.then(data => {
							// eslint-disable-next-line no-console
							console.log("data", data),
								setStore({ listContact: data });
						}) // eslint-disable-next-line no-console
						.catch(error => console.log(error));
				});
			},
			fechtEditContact: (id, fullName, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						id: id,
						full_name: fullName,
						email: email,
						agenda_slug: "agenda_monalisa",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch(
						"https://assets.breatheco.de/apis/fake/contact/agenda/agenda_monalisa"
					)
						.then(response => response.json())
						.then(data => {
							// eslint-disable-next-line no-console
							console.log("data", data),
								setStore({ listContact: data });
						}) // eslint-disable-next-line no-console
						.catch(error => console.log(error));
				});
			}
		}
	};
};
export default getState;
