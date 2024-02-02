const discogsLogin = {
	discogsUser: 'BucketLimited',
	discogsToken: 'wcHcskCOmfrzBDupUZTrzPdlriIIqyewJGeaFxGB',
	secret: 'bGlhjSVQxSYLYDyGyFUVuRXRhVpYHxcR',
	key: 'zDaXPdXxIkNJXVhWhThw',
}

const spinConUser = {
	spinConUserName: 'BoneShart',
	firstName: 'HardShaft',
	lastName: 'BoneSlammer',
}

const mediaSources = {
	discogs: {
		name: 'discogs',
		url: 'www.discogs.com',
		login: discogsLogin,
	},
	podbean: {
		name: 'podbean',
		url: 'www.podbean.com',
		login: {}
	}
}


const stub = Object.assign({}, { spinConUser }, { mediaSources })

module.exports = stub