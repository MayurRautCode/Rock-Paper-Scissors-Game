let my = document.querySelector("#my");
let comp = document.querySelector("#comp");
let draw = document.querySelector("#Draw");
let msg1 = document.querySelector("#msg1");
let option = document.querySelectorAll(".option");


option.forEach( (op) => {
   op.addEventListener("click", () => {
      let userchoise = op.getAttribute("id");
      console.log(userchoise);
      compoption(userchoise);
   }) 
});

let compoption =  (userchoise) => {
   let a = Math.floor(Math.random() * 3);
   let compchoise = option[a].getAttribute("id");
   console.log(compchoise);
   result(userchoise , compchoise);
};

let x = 0;
let y = 0;
let z = 0;

let result = (userchoise , compchoise) => {
   if(userchoise === compchoise){
      msg1.innerText = " Match Draw! Play Again.";
      x++;
      draw.innerText = x;
      msg1.style.backgroundColor = "black";
   }else if(userchoise === "rock" &&  compchoise === "paper" || userchoise === "paper" && compchoise === "scissor" || userchoise === "scissor" && compchoise === "rock" ){
      msg1.innerText = ` You Lose. ${compchoise} beats your ${userchoise}.`;
      y++;
      comp.innerText = y;
      msg1.style.backgroundColor = "red";
   }else if(userchoise === "rock" && compchoise === "scissor" || userchoise === "paper" && compchoise === "rock" || userchoise === "scissor" && compchoise === "paper"){
      msg1.innerText = ` You Win. your ${userchoise} beats ${compchoise}.`;
      z++;
      my.innerText = z;
      msg1.style.backgroundColor = "green";
   }
   };

