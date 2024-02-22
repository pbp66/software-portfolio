function post(props) {
	return (
		<>
			<h3>My Blog</h3>
			<div
				class="Post"
				style={{ border: "solid 5px black", width: "fit-content" }}
			>
				<div>Title of Post</div>
				<div>Content of Post</div>
				<div>Footer of Post</div>
			</div>
		</>
	);
}

export default function Blog(props) {
	return post(props);
}
