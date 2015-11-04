var user = prompt("Enter your name: ");
console.log("Username: " + user);
if (user != null) { //if user wants to cancel the next prompt won't appear
var answer1 = prompt("Was I born in Seattle?");
console.log("Response to question 1:" + answer1);
	//beginning of the if statements with answer keys
	if (answer1 == "no" || answer1 == "No" || answer1 == "N" || answer1 == "n" && answer1 != null) {
		alert("Good guess " + user + "! On to the next question!");
		var answer2 = prompt("Was I born in the Southern United States?");
		console.log("Response to question 2: " + answer2)

		if (answer2 == "yes" || answer2 == "Yes" || answer2 == "Y" || answer2 == "y" && answer2 != null) {
			alert("2 for 2 " + user + "! How about we try another!");
			var answer3 = prompt("Was I born in Austin Texas?");
			console.log("Response to question 3: " + answer3);

			if (answer3 == "no" || answer3 == "No" || answer3 == "N" || answer3 == "n" && answer3 != null) {
				alert("What are the odds " + user +"! Here's another...");
				var answer4 = prompt("Was I born in Atlanta Georgia?");
				console.log("Response to question 4: " + answer4);

				if (answer4 == "yes" || answer4 == "yes" || answer4 == "Y" || answer4 == "y" && answer4 != null) {
					alert("Yur darn right I was!");
					alert("You Won!! :D")
			
			//else statements for wrong guesses and if user no longer wants to play (clicking cancel)
			} else if (answer4 == null) {
				alert("Aww, you made it so far!")
			} else {
				alert("I'm not bold enough for a double bluff ;)")
			}

		} else if (answer3 == null) {
			alert("fine, don't finish...");
		} else {
			alert("Ouch that one was kinda tricky... my bad.");
		} 

	} else if (answer2 == null) {
		alert("see ya!");
	} else {
		alert("One is better than nothing, but you lose. :(");
	} 

} else if (answer1 == null) {
	alert("It's just a guessing game...");
} else {
	alert("Dang, couldn't even get one quesion right... :(");
}
}