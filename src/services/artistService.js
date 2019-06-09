import apiKey from '../../api_key';

const getArtistContent = artist => {
	fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: apiKey
		}
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			console.log(JSON.stringify(myJson));
		});
};

export default getArtistContent;
