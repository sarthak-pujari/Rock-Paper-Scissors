const imgs = document.querySelectorAll(".img");
let paraa=document.querySelector(".status");
let scoreuser=document.querySelector("#score1");
let scorecomputer=document.querySelector("#score2");

let userScore = 0;
let computerScore = 0;
imgs.forEach((imgg) => {
    imgg.addEventListener("click", (evt) => {
        const userC = evt.target;    //whole tag where event happen 
        userChoice=userC.getAttribute("id")
        result(userChoice); 
    });
});
function result(userChoice) 
    {
    const choices = ["Rock","Paper","Scissor"]; 
    const randomIndex = Math.floor(Math.random() * 3); //math.floor remove fraction and math.random generate any random number between 0 to 2
    const computerChoice = choices[randomIndex]; 

    if (userChoice === computerChoice) 
        {
            paraa.innerText="Draw";
            document.getElementById("pp").style.backgroundColor="skyblue";
            document.getElementById("pp").style.color="black";
            document.getElementById("pp").style.fontSize="20px";
        } 
    else 
        {
        let userWin = false;

        if (
            (userChoice === "Rock" && computerChoice === "Scissor") || 
            (userChoice === "Paper" && computerChoice === "Rock") || 
            (userChoice === "Scissor" && computerChoice === "Paper")) 
            {
            userWin = true;
            userScore++;
            scoreuser.innerText=userScore;
            paraa.innerText="You Win";
            document.getElementById("pp").style.backgroundColor="Green";
            document.getElementById("pp").style.color="white";
            document.getElementById("pp").style.fontSize="20px";

            }
        else 
            {
            computerScore++;
            scorecomputer.innerText=computerScore;
            paraa.innerText="You Loose";
            document.getElementById("pp").style.backgroundColor="Red";
            document.getElementById("pp").style.color="white";
            document.getElementById("pp").style.fontSize="20px";
            }
        }
    }





