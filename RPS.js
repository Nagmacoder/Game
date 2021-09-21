let result_ref = document.getElementById("result");
let choice_object = {
    'rock': {
        'rock': ' draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': ' lose',
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
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML =
        ` Computer choose <span>  ${choices[num].toUpperCase()} </span>` ;

    document.getElementById("user_choice").innerHTML =
        ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num]; 

    switch(choice_object[input][computer_choice]) {
        case 'win': 
            result_ref.innerHTML = "YOU WIN";
            break;
        case 'lose':
            result_ref.innerHTML = "YOU LOSE";
            break;
        default:
            result_ref.innerHTML = "DRAW";
            break;

    }
}