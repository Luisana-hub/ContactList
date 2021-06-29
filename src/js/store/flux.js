const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContact: [],
			id: " "
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
			fetchDeleteContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => response.json()) // eslint-disable-next-line no-console
					.then(response => console.log(response));
			}
		}
	};
};
export default getState;
