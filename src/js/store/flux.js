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
			}
		}
	};
};
export default getState;
