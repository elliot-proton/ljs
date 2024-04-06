function createParagraph() {
      const para = document.createElement("p");
      para.textContent = "You clicked the button!";
      document.body.appendChild(para);
    }

const alert_text = "I'm an alert"
function checkGuess(){
    alert(alert_text);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
      button.addEventListener("click", createParagraph);
    }
