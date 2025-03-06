// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

const caffee = "Coffee";
const  tea = "Tea";
const juice = "Juice";
const nothing = "We dont have this"
const opinion = Number(prompt(`Choose the opinion where is 1 ${caffee} 2 ${tea} 3 ${juice}`));

switch (opinion) {
    case 1:
        alert(`${caffee}`);
    break;

        case 2:
        alert(`You order ${tea}`);
    break;

        case 3:
        alert(`You order ${juice}`);
    break;

    default:
        alert(`${nothing}`);
}

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

const workingDay = "Working day";
const dayWeekend = "Weekend";
const numberplease = "The wrong number"
const choooseDay = Number(prompt(`What day is it today 1 ${workingDay} 2 ${dayWeekend}`));

switch (choooseDay) {
    case 1:
        alert(`Today is ${workingDay}`)
        break;

        case 2:
        alert(`Today is ${dayWeekend}`)
        break;

    default:
        alert(`${numberplease}`);
}

// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const spring = "spring";
const summer = "summer";
const autumn = "autumn";
const winter = "winter";
const nomonth = "You have a more than 12"
const numberofminth = Number(prompt(`Choose the number of 1-12 month and I'll guess the season`));

switch (numberofminth) {
    case 1:
        alert(`${winter}`);
        break;

        case 2:
        alert(`${winter}`);
        break;

        case 3:
        alert(`${spring}`);
        break;

        case 4:
        alert(`${spring}`);
        break;

        case 5:
        alert(`${spring}`);
        break;

        case 6:
        alert(`${summer}`);
        break;

        case 7:
        alert(`${summer}`);
        break;

        case 8:
        alert(`${summer}`);
        break;

        case 9:
        alert(`${autumn}`);
        break;

        case 10:
        alert(`${autumn}`);
        break;

        case 11:
        alert(`${autumn}`);
        break;

        case 12:
        alert(`${winter}`);
        break;
    default:
        alert(`${nomonth}`);
}

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const red = "red";
const green = "green";
const yellow = "yellow";
const noOne = "The color is not founded"
const colors = Number(prompt(`Choose the color for the traffic light 1 ${red} 2 ${green} 3 ${yellow}`));

switch (colors) {
    case 1:
        alert(`${red} is stop`);
        break;

        case 2:
        alert(`${green} is walk`);
        break;

        case 3:
        alert(`${yellow} you need to be ready`);
        break;

    default:
        alert(`${noOne}`);
}

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

const numberOne = Number(prompt("Write the number"));
const numberTwo = Number(prompt('Write the second number'))
const oper = prompt("Choose the operation (+ - * /)");
switch (oper) {
    case "+":
        alert(numberOne + numberTwo);
        break;
    case "-":
        alert(numberOne - numberTwo);
        break;
    case "*":
        alert(numberOne * numberTwo);
        break;
    case "/":
        if (numberTwo === 0) {
            alert("You cant divide for a 0");
        } else {
            alert(numberOne / numberTwo)
        }
        break;
    default:
        alert ("Error enter the corect data")
}