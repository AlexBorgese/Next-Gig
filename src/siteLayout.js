export default [
	{
		id: 'lobby',
		component: 'Lobby',
		props: {
			children: [
				{
					id: 'tile',
					component: 'Tile',
					props: {
						Title: 'Rings of Saturn',
						date: '28/09'
					}
				},
				{
					id: 'tile1',
					component: 'Tile',
					props: {
						Title: 'Black Tongue',
						date: '29/09'
					}
				},
				{
					id: 'tile2',
					component: 'Tile',
					props: {
						Title: 'Queen',
						date: '13/10'
					}
				},
				{
					id: 'tile3',
					component: 'Tile',
					props: {
						Title: 'Rings of Saturn',
						date: '28/10'
					}
				}
			]
		}
	}
];
