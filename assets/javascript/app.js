$(document).ready(function() {
	$("#submit-question").hide();

var position = 0;
var correct = 0;
var test;
var test_status;
var questionFromArray;
var possibleChoices;
var userChoice;
var choiceA;
var choiceB;
var choiceC;
var choiceD;
var submit = $("#submit");
var number = 10;
var intervalId;


var quizQuestions = [
	["What is blah blah blah?", "Mmhmm", "Yes", "Nah", "Uh.. sure.", "C"],
	["When did homie joe get a fro?", "Monday", "Tuesday", "Wednesday", "Saturday", "B"], //change questions to fighting. . bruce lee. mortal kombat
	["How many really, though?", "7", "98", "1", "2344", "A"],
	["Did you listen?", "Yes", "No", "Uhh...", "Leave Me Alone", "D"],
	["Forget it, it wasn't even ____.", "True", "False", "Alive", "Purple", "D"],
	["When you go opened the cellar door, what scared you?", "A Wood Pecker", "Uncle Jim", "A ghost", "the reflection of yourself", "B"]
]

	function getElement (x) {
		return document.getElementById(x);
	}

	function renderQuestion(){
		test = getElement("test");
		if (position >= quizQuestions.length){
	  		clearInterval(intervalId);
	  		$("#show-number").hide();
	  		$("#submit-question").hide();
	  		$("#test_status").hide();

	    	test.innerHTML = "<h2>Congratulations, you finished!" + "<br><br>" + "Your final results are:  "+correct+" out of "+quizQuestions.length+" questions correct!</h2>";
	    	position = 0;
	    	correct = 0;
	    	return false;
		}
		
		getElement("test_status").innerHTML = "Question " + (position + 1) + " of " + quizQuestions.length;
		questionFromArray = quizQuestions[position][0];
		choiceA = quizQuestions[position][1];
		choiceB = quizQuestions[position][2];
		choiceC = quizQuestions[position][3];
		choiceD = quizQuestions[position][4];
		test.innerHTML = "<h3>" + questionFromArray + "</h3>";
		test.innerHTML += "<input class='choices' type='radio' name='choices' value='A'> " + choiceA + "<br>";
		test.innerHTML += "<input class='choices' type='radio' name='choices' value='B'> " + choiceB + "<br>";
		test.innerHTML += "<input class='choices' type='radio' name='choices' value='C'> " + choiceC + "<br>";
		test.innerHTML += "<input class='choices' type='radio' name='choices' value='D'> " + choiceD + "<br><br>";
	}

	$("#submit-question").on("click", function(){
		console.log(this + " working?");
		checkAnswer();
	})

    function run() { 
    	intervalId = setInterval(decrement, 1000);
    	console.log(window);
    }

    function decrement() {

    	number--;

    	$("#show-number").html("<h2>" + (number + " seconds remaining!") + "</h2>");

    	if (number === 1) {
     		$("#show-number").html("<h2>" + (number + " second remaining!") + "</h2>");
    	}

    	if (number === 0) {

      	stop();
        checkAnswer();
    	}
    }

    function stop() {

    	number = 10;
    }

	function checkAnswer() {
		console.log(checkAnswer + " working?");
		stop();

		possibleChoices = document.getElementsByName("choices"); // pulls from lines 52-56
		for(var i = 0; i < possibleChoices.length; i++) {
			if(possibleChoices[i].checked){
		      userChoice = possibleChoices[i].value;
		    }
		}
		if(userChoice == quizQuestions[position][5]) {
		    correct++;
		}
		  position++;
		  renderQuestion();
		  // hide stuf, set timeout. . then renderQuestion within the setTimeout. add picture to the page before the setTimeout.
	}

	$("#start-button").on("click", function() {
		$("#start-button").remove();
		$(".quiz").show();
		$("#submit-question").show();
		renderQuestion();
		run();
	})
})//end of document.ready function