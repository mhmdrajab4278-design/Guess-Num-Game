const min = 1;
const max = 100;

const randomNumber = Math.floor(Math.random() * max) + min;

let attempts = 0;

const submit = document.getElementById("submit");
const guess = document.getElementById("guess");
const result = document.getElementById("result");

/*
Get the user's guess.
Remove spaces using .trim().
Convert it to a number.
Increase attempts.
If the guess is too high → show "Too high!"
If the guess is too low → show "Too low!"
If correct → show

*/

let userguess ;

submit.onclick = function(){
    attempts++;
    userguess = guess.value.trim();
    userguess = Number(userguess);
    
    if(userguess > randomNumber){
        result.textContent = `${userguess} is Too High try again! ${attempts} attempts`;
    }

    else if (userguess < randomNumber){
        result.textContent = `${userguess} is Too Low try again! ${attempts} attempts`;
    }

    else {
        result.textContent = `You Won Congratulation Bro!! The num was ${userguess} ${attempts} attempts`;

    }
}
