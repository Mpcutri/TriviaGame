$(document).ready(function() {
	$("#submit-question").hide();
	// $(".quiz").hide();

// Create Variables
	//position of user in the test
	//correct for number of questions answered correctly
	//questionFromArray variable that contains a questions grabbed from an array
	//userChoice variable contains the user's selected answer for the questions
	//possibleChoices contains the possible answers that will be displayed to the user
	//choiceA, choiceB, choiceC, choiceD will contain each possible answer.
	//quizQuestions array needs to be created to pull from. (multidimensional)
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


// function start() {
// 	$(".quiz").show();
// 	renderQuestion();
// }//end of start function


	function getElement (x) {
		return document.getElementById(x);
	}

	function renderQuestion(){
	  test = getElement("test");
	  if(position >= quizQuestions.length){
	  	clearInterval(intervalId);
	  	$("#show-number").hide();
	  	$("#submit-question").hide();
	    test.innerHTML = "<h2>You got "+correct+" of "+quizQuestions.length+" questions correct</h2>";
	    
	    // resets the variable to allow users to restart the test
	    position = 0;
	    correct = 0;
	    // stops rest of renderQuestion function running when test is completed
	    return false;
	  }

	  getElement("test_status").innerHTML = "Question " + (position + 1) + " of " + quizQuestions.length;
	  questionFromArray = quizQuestions[position][0];
	  choiceA = quizQuestions[position][1];
	  choiceB = quizQuestions[position][2];
	  choiceC = quizQuestions[position][3];
	  choiceD = quizQuestions[position][4];
	  test.innerHTML = "<h3>" + questionFromArray + "</h3>";
	  // the += appends to the data we started on the line above
	  test.innerHTML += "<input class='choices' type='radio' name='choices' value='A'> " + choiceA + "<br>";
	  test.innerHTML += "<input class='choices' type='radio' name='choices' value='B'> " + choiceB + "<br>";
	  test.innerHTML += "<input class='choices' type='radio' name='choices' value='C'> " + choiceC + "<br>";
	  test.innerHTML += "<input class='choices' type='radio' name='choices' value='D'> " + choiceD + "<br><br>";
	  // test.innerHTML += "<button id='submit-question' name='submitbutton'>Submit Answer</button>";// onclick='stop()' added
	}

	$("#submit-question").on("click", function(){
		console.log(this + " working?");
		checkAnswer();
	})

    function run() { 
      intervalId = setInterval(decrement, 1000); // we're calling this function decrement (below), once every decond.
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
	  // if (document.getElementByName('submitbutton').clicked == true) { // ASK TA about clearing the countdown on clicking submit.
	  // 	stop();
	  // }
    }

    function stop() {

      number = 10;
      // console.log(intervalId);
      // clearInterval(window.intervalId); // this wipes the set interval clear
    }

	function checkAnswer(){
		console.log(checkAnswer + " working?");
		stop();
	  // use getElementsByName because we have an array which it will loop through
	  possibleChoices = document.getElementsByName("choices"); // pulls from lines 55-58
	  for(var i = 0; i < possibleChoices.length; i++){
	    if(possibleChoices[i].checked){
	      userChoice = possibleChoices[i].value;
	    }
	  }
	  // checks if answer matches the correct choice
	  if(userChoice == quizQuestions[position][5]){
	    //each time there is a correct answer this value increases
	    correct++;
		// $("#timeOut").html("<h2>NICELY DONE!</h2>"); // GET SET TIMEOUT TO WORK!!! ASK TA FOR HELP
		// setTimeout(renderQuestion, 1000)
	  }
	  // changes position of which character user is on
	  position++;
	  // then the renderQuestion function runs again to go to next question
	  renderQuestion();
	}

	$("#start-button").on("click", function(){ // as soon as i put this in, i cant cycle through questions.
		$("#start-button").remove();
		$(".quiz").show();
		$("#submit-question").show();
		renderQuestion();
		run();
	})

})//end of document.ready function