var user = prompt("Enter your name: ");
console.log("Username: " + user);

var questionsAsked = []; //Stores questions that have been asked
var answer = '';

function biQuestion(question) { // function for asking questions
	answer = prompt(question);
	questionsAsked.push(question);
	document.getElementById("questions").innerHTML = questionsAsked.join('<br/>');
	console.log("Response to question: " + answer);
}

if (user != null) { //if user wants to cancel, the next prompt won't appear

biQuestion("Was I born in Seattle?");

	//beginning of the if statements with answer keys
	if (answer == "no" || answer == "No" || answer == "N" || answer == "n" && answer != null) {
		alert("Good guess " + user + "! On to the next question!");
		biQuestion("Was I born in the Southern United States?");

		if (answer == "yes" || answer == "Yes" || answer == "Y" || answer == "y" && answer != null) {
			alert("2 for 2 " + user + "! How about we try another!");
			biQuestion("Was I born in Austin Texas?");

			if (answer == "no" || answer == "No" || answer == "N" || answer == "n" && answer != null) {
				alert("Correct! What are the odds " + user +"! Here's another...");
				biQuestion("Was I born in Atlanta Georgia?");

				if (answer == "yes" || answer == "yes" || answer == "Y" || answer == "y" && answer != null) {
					alert("Yur darn right I was!");
					biQuestion("Now for the Finale: Am I the greatest Javascript Programmer?");

						if (answer == "no" || answer == "No" || answer == "N" || answer == "n" && answer != null) {
							alert("Congrats " + user + "! You Won!! :D");
			
			//else statements for wrong guesses and if user no longer wants to play (clicking cancel)
					} else if (answer == null) {
						alert("Really " + user + "... You wait till the last question to quit.");
					} else {
						alert("Hah, I don't think I'm even close to the best! You Lose :(");
					}

			} else if (answer == null) {
				alert("Aww, you made it so far!");
			} else {
				alert("I'm not bold enough for a double bluff. You Lose :(");
			}

		} else if (answer == null) {
			alert("fine, don't finish...");
		} else {
			alert("Ouch that one was kinda tricky... You Lose :(");
		} 

	} else if (answer == null) {
		alert("see ya!");
	} else {
		alert("One is better than nothing, but You Lose :(");
	} 

} else if (answer == null) {
	alert("It's just a guessing game...");
} else {
	alert("Dang, couldn't even get one quesion right. You Lose :(");
}
}