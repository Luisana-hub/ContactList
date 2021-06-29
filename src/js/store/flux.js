const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContact: [],
			//planets: [],
			//vehiculos: [],
			//favoritos: [],
			//favorito: " ",
			id: " "
		},
		actions: {
			fetchListContact: () => {
				fetch(
					"https://assets.breatheco.de/apis/fake/contact/agenda/agenda_monalisa"
				)
					.then(response => response.json())
					.then(data => setStore({ listContact: data.results }))
					.catch(error => console.log(error));
			}
		}
	};
};
export default getState;
