import API from "./api.js";

class GitHubAPI extends API {
	#username;
	constructor(username, apiKey = null) {
		super("https://api.github.com/", apiKey);
		this.setUserName(username);
	}

	setUserName(username) {
		this.#username = username;
	}

	getUserName() {
		return this.#username;
	}

	async getUser() {
		this.updateURLPath(`users/${this.#username}/`);
		return await this.callAPI();
	}
}

export default GitHubAPI;
