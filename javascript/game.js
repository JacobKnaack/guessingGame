var user = prompt("Please enter your name: ");
console.log("Username: " + user);

var questionsAsked = [
	{Q: "Was I born in Seattle?", A: "no"},
	{Q: "Was I born in the Southern United States?", A: "yes"},
	{Q: "Was I born in Austin Texas?", A: "no"},
	{Q: "Was I born in Atlanta Georgia?", A: "yes"},
	{Q: "Am I the greatest javascript programmer?", A:"no"}
]; // Stores questions and answers
var questionFeed = [
	{R:"Good Guess " + user + "! Next Question...", W:"Sorry " + user + " that's wrong. Try another...", N:"See ya"},
	{R:"2 for 2 " + user + "! Let's do another...", W:"Well darn that's not right. Try another...", N: "You forgot to answer"},
	{R:"That's right " + user + ". I was not.", W: "That place sucks, no...", N:"Don't feel like guessing?"},
	{R:"Yur darn right I was!", W: "Sorry " + user + " but I actually was born there.", N:"just press buttons!"},
	{R:"Hurray! You won " + user + "!!", W:"Well no, but thanks!", N:"The very last question, really....."}
]; // Stores all the feedback for all questions and answers
var qVis = []; //Arrays used to display questions and answers
var fVis = []; 
var questionNum = 1; // Keeps track of question number
var questionsCorrect = 0; //keeps track of right answers
var answer = ''; // Makes answers global

function biQuestion(question) { // function for asking questions
	answer = prompt(question);
	qVis.push(questionNum + ". " + question + " " + answer);
	document.getElementById("questions").innerHTML = qVis.join('<br/>');
	console.log("Response to question: " + answer);
}

function feedbackRight() { // adds an alert when you answer correctly
	fVis.push("Question #" + questionNum + ": Correct!" + '<img src=\'http://www.serveandpour.com/images/confetti2.jpg\'>');
	document.getElementById("feedback").innerHTML = fVis.join('<br/>');
	questionNum ++;
	questionsCorrect ++;
}

function feedbackWrong() { // adds an alert when you answer incorrectly
	fVis.push("Question #" + questionNum + ": Incorrect :(" + '<img src=\'imgs/badFeedback.png\'>');
	document.getElementById("feedback").innerHTML = fVis.join('<br/>');
	questionNum ++;
}

if (user != null) { //if user wants to cancel, the next prompt won't appear

for (var i = 0; i < questionsAsked.length; i++) {
	biQuestion(questionsAsked[i].Q);
	if (answer.toLowerCase() == questionsAsked[i].A) {
		feedbackRight();
		alert(questionFeed[i].R);
	} else if (answer == null) {
		alert(questionFeed[i].N);
		break;
	} else {
		feedbackWrong();
		alert(questionFeed[i].W);
	}
}
	if (questionsCorrect >= 3) {
		alert("You Win! You got more than 3 questions correct :D");
	} else {
		alert("Sorry " + user + ", you got less than 3 question correct. You Lose :(");
	}
}