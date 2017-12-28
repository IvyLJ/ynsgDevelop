import axios from 'axios';


const REQUEST_ERROR = '请求错误 ';
const RESPONSE_ERROR = '响应错误: ';

const defautOptions = {
	url: '',
	method: 'post',
	data: {},
	headers: {},
	"contentType": "application/json"
};

const request = (options) => {
	if (options.method === 'post') {
		return new Promise((resolve, reject) => {
			axios.post(options.url, options.data)
				.then((response) => {
					const data = response.data;
					if (response.status == 200) {
						resolve(data);
					} else {
						if (reject) {
							reject(data);
							console.log(RESPONSE_ERROR + data.message);
						} else {
							console.log(RESPONSE_ERROR + data.message);
						}
					}
				})
				.catch((error) => {
					reject && reject(error);
					console.log(REQUEST_ERROR + error);
				});
		});
	} else if (options.method === 'get') {
		return new Promise((resolve, reject) => {
			axios.get(options.url)
				.then((response) => {
					console.log(response);
					const data = response.data;
					if (response.status == 200) {
						resolve(data);
					} else {
						if (reject) {
							reject(data);
							console.log(RESPONSE_ERROR + data.message);
						} else {
							console.log(RESPONSE_ERROR + data.message);
						}
					}
				})
				.catch((error) => {
					reject && reject(error);
					console.log(REQUEST_ERROR + error);
				});
		});
	}
};

const ajax = (options) => {
	options = Object.assign({}, defautOptions, options);
	return request(options);
}
ajax.get = (url) => {
	let options = {};
	options.url = 'http://127.0.0.1:3000' + url;
	options.method = 'get';
	return request(options);
};
ajax.post = (url, data) => {
	let options = {};
	options.url = 'http://127.0.0.1:3000' + url;
	options.data = data;
	options.method = 'post';
	return request(options);
};

export default ajax;