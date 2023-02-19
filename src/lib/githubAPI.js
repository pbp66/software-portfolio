import API from "./api.js";

class GitHubAPI extends API {
	#username;
	constructor(username, apiKey = null) {
		super("https://api.github.com", apiKey);
		this.setUserName(username);
	}

	setUserName(username) {
		this.#username = username;
	}

	getUserName() {
		return this.#username;
	}

	async getUser() {
		this.updateURLPath("users", this.#username);
		return await this.callAPI();
	}

	async getRepo(repo) {
		this.updateURLPath("repos", this.#username, repo);
		return await this.callAPI();
	}

	async getRepos(...repos) {
		const repoData = [];
		repos.forEach(async (repo) => {
			let response = await this.getRepo(repo);
			repoData.push(response);
		});
		return repoData;
	}

	async getAllRepos() {
		this.updateURLPath("users", this.#username, "repos");
		return await this.callAPI();
	}

	async getStarredRepos() {
		this.updateURLPath("users", this.#username, "starred");
		return await this.callAPI();
	}
}

export default GitHubAPI;
