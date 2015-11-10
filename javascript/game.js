var user = prompt("Please enter your name: ");
console.log("Username: " + user);

var questionsAsked = []; // Stores questions that have been asked
var questionFeed = []; // Stores all the feedback for questions answered
var questionNum = 1; // Keeps track of question number
var answer = ''; // Makes answers global

function biQuestion(question) { // function for asking questions
	answer = prompt(question);
	questionsAsked.push(questionNum + ". " + question + ' ' + answer);
	document.getElementById("questions").innerHTML = questionsAsked.join('<br/>');
	console.log("Response to question: " + answer);
}

function feedbackRight() { // adds an alert when you answer correctly
	questionFeed.push("Questions #" + questionNum + ": Correct!");
	document.getElementById("feedback").innerHTML = questionFeed.join('<br/>');
	questionNum ++;
}

function feedbackWrong() { // adds an alert when you answer incorrectly
	questionFeed.push("Question #" + questionNum + ": Incorrent :(");
	document.getElementById("feedback").innerHTML = questionFeed.join('<br/>');
}

if (user != null) { //if user wants to cancel, the next prompt won't appear

biQuestion("Was I born in Seattle?");

	//beginning of the if statements with answer keys
	if (answer == "no" || answer == "No" || answer == "N" || answer == "n" && answer != null) {
		feedbackRight();
		alert("Good guess " + user + "! On to the next question!");
		biQuestion("Was I born in the Southern United States?");

		if (answer == "yes" || answer == "Yes" || answer == "Y" || answer == "y" && answer != null) {
			feedbackRight();
			alert("2 for 2 " + user + "! How about we try another!"); 
			biQuestion("Was I born in Austin Texas?");

			if (answer == "no" || answer == "No" || answer == "N" || answer == "n" && answer != null) {
				feedbackRight();
				alert("Correct! What are the odds " + user +"! Here's another...");
				biQuestion("Was I born in Atlanta Georgia?");

				if (answer == "yes" || answer == "yes" || answer == "Y" || answer == "y" && answer != null) {
					feedbackRight();
					alert("Yur darn right I was!");
					biQuestion("Now for the Finale: Am I the greatest Javascript Programmer?");

						if (answer == "no" || answer == "No" || answer == "N" || answer == "n" && answer != null) {
							feedbackRight();
							alert("Congrats " + user + "! You Won!! :D");
			
			//else statements for wrong guesses and if user no longer wants to play (clicking cancel)
					} else if (answer == null) {
						alert("Really " + user + "... You wait till the last question to quit.");
					} else {
						feedbackWrong();
						alert("Hah, I don't think I'm even close to the best! You Lose :(");
					}

			} else if (answer == null) {
				alert("Aww, you made it so far!");
			} else {
				feedbackWrong();
				alert("I'm not bold enough for a double bluff. You Lose :(");
			}

		} else if (answer == null) {
			alert("fine, don't finish...");
		} else {
			feedbackWrong();
			alert("Ouch that one was kinda tricky... You Lose :(");
		} 

	} else if (answer == null) {
		alert("see ya!");
	} else {
		feedbackWrong();
		alert("One is better than nothing, but You Lose :(");
	} 

} else if (answer == null) {
	alert("It's just a guessing game...");
} else {
	feedbackWrong();
	alert("Dang, couldn't even get one quesion right. You Lose :(");
}
}