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

function operate(n1, n2, op) {
    console.log("begin");
    console.log(n1);
    console.log(n2);
    console.log(op);
    console.log("end");
    if (op == "÷") {
        if (n2 == "0") {
            alert("Can't divide by 0!");
            return NaN;
        }
        return n1 / n2;
    }
    if (op == "x") {
        return n1 * n2;
    }
    if (op == "-") {
        return n1 - n2;
    }
    if (op == "+") {
        return n1 + n2;
    }
}

equal.addEventListener("click", () => {
    if (
        display.innerText[display.innerText.length - 1] != '÷' && 
        display.innerText[display.innerText.length - 1] != 'x' && 
        display.innerText[display.innerText.length - 1] != '-' && 
        display.innerText[display.innerText.length - 1] != '+' 
    ) {
        let nums = display.innerText.split(/[÷x+-]/g);
        let ops = display.innerText.split(/[0-9]/g);
        var i = 0;
        console.log(nums.reduce((total, curr) => {
            while (ops[i] == '') {
                i++;
            }
            i++;
            return operate(total, curr, ops[i - 1]);
        }));
    }
});