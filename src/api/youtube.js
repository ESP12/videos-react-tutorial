import axios from 'axios';

const KEY = 'AIzaSyA-3cUpQGkv_2vFF8SPhf2KSXcTjl4Aty8';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part: 'snippet',
		maxResults: 5,
		key: KEY 
	}
});