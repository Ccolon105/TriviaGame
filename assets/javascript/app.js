$("#start").click(function(){
    game.start();
});

var questions = [{
    question:"What was the last spoken word fo the series?",
    answers: [" Who ", " What ", " Where ", " When "],
    correctAnswer: " Where "
}, {
    question:"How many sisters does Joey have?",
    answers:[" 3 "," 7 "," 9 "," 2 "],
    correctAnswer:" 7 "
}, {
    question:"How many times was Ross married?",
    answers:[" 1 "," 0 "," 5 "," 3 "],
    correctAnswer:" 3 "
}, {
    question:"What was the name of Ross's monkey?",
    answers:[" Marcelo "," Marco "," Marty "," Marcel "],
    correctAnswer:" Marcel "
}, {
    question:"What business did the friends frequent?",
    answers:[" Central Perk "," Starbucks "," Central Cafe "," Central Grille "],
    correctAnswer:" Central Perk "
}, {
    question:"What show did Joey star in?",
    answers:[" Friends "," All My Children "," Days of our Lives "," The Young and the Restless "],
    correctAnswer:" Days of our Lives "
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0){
            game.finished();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $(".gameBody").prepend("<h2>Time Remaining: <span id ='counter'>30</span> Seconds </h2>");
        $("#start").remove();
        for(var i=0; i<questions.length; i++){
            $(".gameBody").append("<h2>"+ questions[i].question + "</h2>");
            for(var j=0; j<questions[i].answers.length;j++){
                $(".gameBody").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'/>"+questions[i].answers[j])
            }
        }
    },
    finished: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            }else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val()== questions[1].correctAnswer){
                game.correct++;
            }else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val()== questions[2].correctAnswer){
                game.correct++;
            }else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val()== questions[3].correctAnswer){
                game.correct++;
            }else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val()== questions[4].correctAnswer){
                game.correct++;
            }else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val()== questions[5].correctAnswer){
                game.correct++;
            }else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $(".gameBody h2").remove();

        $(".gameBody").html("<h2>All Finished<h2>");
        $(".gameBody").append("<h3>Correct Answers: "+this.correct+ "</h3>");
        $(".gameBody").append("<h3>Incorrect Answers: "+this.incorrect+ "</h3>");

    }

}
