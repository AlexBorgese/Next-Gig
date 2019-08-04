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
						content: 'They are really good'
					}
				},
				{
					id: 'tile1',
					component: 'Tile',
					props: {
						Title: 'Black Tongue'
					}
				},
				{
					id: 'tile1',
					component: 'Tile',
					props: {
						Title: 'Queen'
					}
				},
				{
					id: 'tile1',
					component: 'Tile',
					props: {
						Title: 'Rings of Saturn'
					}
				}
			]
		}
	}
];
