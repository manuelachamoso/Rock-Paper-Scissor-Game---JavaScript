let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById('result');
let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },

    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },

    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
}

function checker(input) {
    const choices = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random()*3);

    document.getElementById("pc_choice").innerHTML = `Computer choose <span> ${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = `You choose <span> ${input.toUpperCase()}</span>`;

    let pc_choice = choices[num];

    switch (choices_object[input][pc_choice]) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = 'You win';
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = 'You lose';
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = 'Draw';
            break;
    }
    document.getElementById('computer_score').innerHTML = computer_score;
    document.getElementById('user_score').innerHTML = user_score;

}



