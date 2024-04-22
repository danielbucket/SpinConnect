`import { v4 as uuidv4 } from 'uuid'

async function getDiscogs(userPackage) {
	const { discogsUser, discogsToken, key, secret } = userPackage
	const GET_discogsURL = `https://api.discogs.com/users/${discogsUser}/collection/folders/0/releases?token=${discogsToken}&per_page=100&sort=artist`

	return fetch(GET_discogsURL, {
		'method': 'GET',
		'Authorization': `Discogs key=[${key}], secret:[${secret}]`
	}).then(res => {
		if (!res.ok) {
			throw new Error('Network response was not OK')
		}
		return res.json()
	}).then((data) => {
		const { releases } = data
		return releases.map(i => {
			const { basic_information } = i
			const parentValues = {
				date_added: i.date_added,
				rating: i.rating,
				notes: i.notes || '',
				id: uuidv4()
			}

			return Object.assign(parentValues, basic_information)
		})
	})
}

async function getPodbean(userPackage) {

}

const fetchFuncs = {
	discogs: getDiscogs,
	podbean: getPodbean,
}

export const fetchCollection = (sources, name) => {
	return fetchFuncs[name](sources)
}