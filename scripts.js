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
            if (
                display.innerText[display.innerText.length - 1] == "÷" || 
                display.innerText[display.innerText.length - 1] == "x" || 
                display.innerText[display.innerText.length - 1] == "-" || 
                display.innerText[display.innerText.length - 1] == "+" ||
                display.innerText == "0"
            ) {
                display.innerText = display.innerText.slice(0, display.innerText.length - 1);
            }
            display.innerText = display.innerText.concat(element.target.innerText);
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

function evalTerm(s) {
    let terms = s.split(/[x÷]/);
    let ops = s.split(/[0-9]/);
    var i = 0;
    if (terms.length == 1) {
        return terms[0];
    }
    return terms.reduce((total, curr) => {
        while (ops[i] == '' && i < ops.length) {
            i++;
        }
        i++;      
        return operate(total, curr, ops[i - 1]);
    })
}

function evalString(s) {
    let terms = s.split(/[+-]/);
    let ops = s.split(/[0-9x÷]/);
    var j = 0;
    if (terms.length == 1) {
        return evalTerm(terms[0]);
    }
    for (let i = 0; i < terms.length; i++) {
        terms[i] = evalTerm(terms[i]);
    }
    return terms.reduce((total, curr) => {
        while (ops[j] == '' && j < ops.length) {
            j++;
        }
        j++
        return operate(total, curr, ops[j - 1]);
    })
}

equal.addEventListener("click", () => {
    if (
        display.innerText[display.innerText.length - 1] != '÷' && 
        display.innerText[display.innerText.length - 1] != 'x' && 
        display.innerText[display.innerText.length - 1] != '-' && 
        display.innerText[display.innerText.length - 1] != '+' 
    ) {
        display.innerText = evalString(display.innerText);
    }
});