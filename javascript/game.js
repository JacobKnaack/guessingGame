var user = prompt("Enter your name: ");
console.log("Username: " + user);

var questionsAsked = []; //Stores questions that have been asked

if (user != null) { //if user wants to cancel, the next prompt won't appear

var answer1 = prompt("Was I born in Seattle?");
questionsAsked.push("Was I born in Seattle?");
document.getElementById("questions").innerHTML = questionsAsked.join();
console.log("Response to question 1:" + answer1);

	//beginning of the if statements with answer keys
	if (answer1 == "no" || answer1 == "No" || answer1 == "N" || answer1 == "n" && answer1 != null) {
		alert("Good guess " + user + "! On to the next question!");
		var answer2 = prompt("Was I born in the Southern United States?");
		questionsAsked.push("Was I born in the Southern United States?");
		document.getElementById("questions").innerHTML = questionsAsked.join('<br/>');
		console.log("Response to question 2: " + answer2)

		if (answer2 == "yes" || answer2 == "Yes" || answer2 == "Y" || answer2 == "y" && answer2 != null) {
			alert("2 for 2 " + user + "! How about we try another!");
			var answer3 = prompt("Was I born in Austin Texas?");
			questionsAsked.push("Was I born in Austin Texas?");
			document.getElementById("questions").innerHTML = questionsAsked.join('<br/>');
			console.log("Response to question 3: " + answer3);

			if (answer3 == "no" || answer3 == "No" || answer3 == "N" || answer3 == "n" && answer3 != null) {
				alert("Correct! What are the odds " + user +"! Here's another...");
				var answer4 = prompt("Was I born in Atlanta Georgia?");
				questionsAsked.push("Was I born in Altanta Georgia?");
				document.getElementById("questions").innerHTML = questionsAsked.join('<br/>');
				console.log("Response to question 4: " + answer4);

				if (answer4 == "yes" || answer4 == "yes" || answer4 == "Y" || answer4 == "y" && answer4 != null) {
					alert("Yur darn right I was!");
					var answer5 = prompt("Now for the Finale: Am I the best javascript programmer?!");
					questionsAsked.push("Am I the best javascript programmer?");
					document.getElementById("questions").innerHTML = questionsAsked.join('<br/>');
					console.log("Response to question 5: " + answer5);

						if (answer5 == "no" || answer5 == "No" || answer5 == "N" || answer5 == "n" && answer5 != null) {
							alert("Congrats " + user + "! You Won!! :D");
			
			//else statements for wrong guesses and if user no longer wants to play (clicking cancel)
					} else if (answer5 == null) {
						alert("Really " + user + "... You wait till the last question to quit.");
					} else {
						alert("Hah, I don't think I'm even close to the best! You Lose :(");
					}

			} else if (answer4 == null) {
				alert("Aww, you made it so far!");
			} else {
				alert("I'm not bold enough for a double bluff. You Lose :(");
			}

		} else if (answer3 == null) {
			alert("fine, don't finish...");
		} else {
			alert("Ouch that one was kinda tricky... You Lose :(");
		} 

	} else if (answer2 == null) {
		alert("see ya!");
	} else {
		alert("One is better than nothing, but You Lose :(");
	} 

} else if (answer1 == null) {
	alert("It's just a guessing game...");
} else {
	alert("Dang, couldn't even get one quesion right. You Lose :(");
}
}