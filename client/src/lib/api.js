/**
 * Base class for implementing an API
 */

class API {
	#defaultURL;
	#API_KEY;
	constructor(baseURL, apiKey = null) {
		this.url = new URL(baseURL);
		this.setDefaultURL(baseURL);
		if (apiKey) {
			this.setApiKey(apiKey);
		}
	}

	setDefaultURL(url) {
		this.#defaultURL = new URL(url);
	}

	getDefaultURL() {
		return this.#defaultURL;
	}

	setApiKey(key) {
		this.#API_KEY = key;
	}

	getApiKey() {
		return this.#API_KEY;
	}

	updateURLPath(...paths) {
		paths.forEach((path) => (this.url.pathname += `/${path}`));
	}

	resetURL() {
		this.url = new URL(this.#defaultURL);
	}

	setSearchParameters(parameterObject) {
		this.resetURL();
		let keys = Object.keys(parameterObject);
		for (const key of keys) {
			this.url.searchParams.append(key, parameterObject[key]);
		}
	}

	async callAPI() {
		const response = await fetch(this.url);
		this.resetURL(); // Ensure url is reset to default for any additional api calls
		if (response.ok) {
			return response.json();
		} else {
			return {
				status: response.status,
				msg: response.statusText,
				response: response,
			};
		}
	}
}

export default API;
