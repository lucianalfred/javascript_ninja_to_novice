
const view = {
    start: document.getElementById('start'),
    score: document.querySelector("#score strong"),
    question: document.getElementById('question'),
    result: document.getElementById('info'),
    render(target, content, attributes){
        for(const key in attributes){
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    show(element){
        element.style.display = 'block';
    },

    hide(element){
        element.style.display = 'none';
    }
}


const quiz = [
    {name: "Super man", realName:"Clark Kent"},
    {name: "Wonder Woman", realName:"Diana Prince"},
    {name: "Batman", realName:"Bruce Wayne"}
];


const game  = {

    start(quiz){
        view.show(view.start);
        this.questions = [...quiz];
        this.score = 0;

        for(const question of this.questions){
            this.question = question;
            this.ask();
        }

        this.gameOver();
    },

    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response = prompt(question);
        this.check(response);
    },

    check(response){
        const answer = this.question.realName;
        if(response == answer){
            view.render(view.result, 'Correct', {'class':'correct'});
            alert('Correct');
            this.score++;
            view.render(view.score, this.score);
        }else{
            view.render(view.score, this.score);
            alert(`Wrong! you scored ${this.question.score} points`);
        }
    },

    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score}`)
        view.hide(view.start);
    }

    
}

view.start.addEventListener('click',()=>game.start(quiz));