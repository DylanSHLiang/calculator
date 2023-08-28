const display = document.querySelector(".display");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const operations = document.querySelectorAll(".divide,.multiply,.subtract,.add");
const numbers = document.querySelectorAll(".zero,.one,.two,.three,.four,.five,.six,.seven,.eight,.nine")
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");

del.addEventListener("click", () => {
    if (display.innerText != "0") {
        if (display.innerText.length == 1) {
            display.innerText = "0";
        } else {
            display.innerText = display.innerText.slice(0, display.innerText.length - 1);
        }
    }
});

clear.addEventListener("click", () => {
    display.innerText = "0";
});

operations.forEach(button => {
    button.addEventListener("click", element => {
        if (display.innerText.length < 14) {
            if (element.target.innerText == "÷" || element.target.innerText == "x") {
                if (
                    display.innerText[display.innerText.length - 1] != "÷" && 
                    display.innerText[display.innerText.length - 1] != "x" && 
                    display.innerText[display.innerText.length - 1] != "-" && 
                    display.innerText[display.innerText.length - 1] != "+" 
                ) {
                    display.innerText = display.innerText.concat(element.target.innerText);
                }
            } else {
                display.innerText = display.innerText.concat(element.target.innerText);
            }
        }
    });
});

numbers.forEach(button => {
    button.addEventListener("click", element => {
        if (display.innerText.length < 14) {
            if (display.innerText == "0") {
                display.innerText = element.target.innerText;
            } else {
                display.innerText = display.innerText.concat(element.target.innerText);
            }
        }
    });
});

dot.addEventListener("click", element => {
    if (display.innerText.length < 14) {
        if (!display.innerText.includes(".")) {
            display.innerText = display.innerText.concat(element.target.innerText);
        }
    }
});

equal.addEventListener("click", () => {
    if (
        display.innerText[display.innerText.length - 1] != '÷' && 
        display.innerText[display.innerText.length - 1] != 'x' && 
        display.innerText[display.innerText.length - 1] != '-' && 
        display.innerText[display.innerText.length - 1] != '+' 
    ) {
        let numbers = display.innerText.split('/[÷x-+]/')
        console.log(numbers);
    }
});