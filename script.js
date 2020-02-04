fetch("http://shooterhighscores.herokuapp.com").then(function(response) {
	if (response.status !== 200) {
		console.log(
			"Looks like there was a problem. Status Code: " + response.status
		);
		return;
	}

	// Examine the text in the response
	response.json().then(function(data) {
		let scoreData = data;
		let scoreTable = document.getElementById("scores");

		for (let i = 0; i < scoreData.length; i++) {
			let node = document.createElement("li");
			let textNode = document.createTextNode(
				scoreData[i].name + " - " + scoreData[i].score
			);
			node.appendChild(textNode);
			scoreTable.appendChild(node);
		}
	});
});
