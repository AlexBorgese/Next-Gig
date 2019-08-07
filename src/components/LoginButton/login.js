function login(callback) {
	var CLIENT_ID = '8d9e22e62bd741f3ae57d28b7a9dd5c5';
	var REDIRECT_URI = 'http://localhost:3000/callback';
	function getLoginURL(scopes) {
		return (
			'https://accounts.spotify.com/authorize?client_id=' +
			CLIENT_ID +
			'&redirect_uri=' +
			encodeURIComponent(REDIRECT_URI) +
			'&scope=' +
			encodeURIComponent(scopes.join(' ')) +
			'&response_type=token'
		);
	}

	const url = getLoginURL([ 'user-read-email' ]);

	window.addEventListener(
		'message',
		function (event) {
			var hash = JSON.parse(event.data);
			if (hash.type == 'access_token') {
				callback(hash.access_token);
			}
		},
		false
	);
	window.open(url, '_self');
}

export default login;
