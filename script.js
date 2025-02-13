function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;

    // Sprečavanje duplih operatora i višestrukih tačaka
    if (/[+\-*/.]$/.test(currentValue) && /[+\-*/.]/.test(value)) return;
    if (value === '.' && currentValue.split(/[\+\-\*\/]/).pop().includes('.')) return;

    display.value += value;
}

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value;

    // Provera da li izraz sadrži nedozvoljene slučajeve
    if (/[\+\-\*\/.]$/.test(expression) || /[+\-*/.]{2,}/.test(expression)) {
        display.value = "Greška!";
        return;
    }

    try {
        display.value = eval(expression);
    } catch {
        display.value = "Greška!";
    }
}
