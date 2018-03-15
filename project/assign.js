// scripts here:

    function submitAnswers() {

    // function which takes note of the answers by their names
        function answerScore (ques) {
            var options = document.getElementsByName(ques);
       //loops over the answer options 
            for (var i = 0, length = options.length; i < length; i++) {
                  if (options[i].checked) {
            // saves the correct answer given its value
                    var ans = Number(options[i].value);
                }
            }
            // converts the saved answer to a number
            if (isNaN(ans)) {
             ans = 0;
            } 
            return ans;
        }  

    // computes the total score given their name and ans values
        var scoreCompute = (answerScore('Q&A1') + answerScore('Q&A2') + answerScore('Q&A3') + answerScore('Q&A4'));
        
// displays the correct answers if any submitted is wrong
        function correctAns (correctNo, quesNumber) {
            console.log("quesNumber: " + quesNumber);  // logs 1,2,3,4 after called below
            return ("The correct answer for question #" + quesNumber + ": &nbsp;<b>" +
                (document.getElementById(correctNo).innerHTML) + "</b>");
            }

    
        if (answerScore('Q&A1') === 0) {
            document.getElementById('correctAns1').innerHTML = correctAns('correct', 1);
        }
        if (answerScore('Q&A2') === 0) {
            document.getElementById('correctAns2').innerHTML = correctAns('correct1', 2);
        }
        if (answerScore('Q&A3') === 0) {
            document.getElementById('correctAns3').innerHTML = correctAns('correct2', 3);
        }
        if (answerScore('Q&A4') === 0) {
            document.getElementById('correctAns4').innerHTML = correctAns('correct3', 4);
        }

        var queCountArr = document.getElementsByClassName('question');

        var queCounter = 0;
        for (var i = 0, length = queCountArr.length; i < length; i++) {
            queCounter++;
        }

    // show score 
        var showScore = "Your Score is: " + scoreCompute +"/" + queCounter;
        if (scoreCompute === queCounter) {
            showScore = showScore + "&nbsp; <b>Perfect Score! </b>"
        };
        document.getElementById('totalScore').innerHTML = showScore;
    }

$(document).ready(function() {

    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});
