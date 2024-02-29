import PocketBase from 'pocketbase'
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private'

export const load = async () => {
	console.log('PB-TEST SERVER RAN')
	
	const pb = new PocketBase('https://lightdance-test.pockethost.io')
	await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)
	
	const pbProjects = async () => {
		const records = await pb.collection('projects').getFullList({
			sort: '-created',
		})
		return records
	}
	
	return {
		projects: await pbProjects()
	}
}