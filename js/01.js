'use strict'

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак,
// решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

let i = 0;
let res;

while (i !== null){
    const a = +prompt('Введите первое число', '');
    const b = +prompt('Введите второе число', '');
    const c = prompt('Введите знак', '');

    if (isNaN(a) || isNaN(b) || (c !== '+' && c !== '-' && c !== '*' && c !== '/')){
        alert('ошибка');
    } else {
        if (c == '+'){
            res = a + b;
        } else if (c == '-'){
            res = a - b;
        } else if (c == '*'){
            res = a * b;
        } else if (c == '/'){
            res = a / b;
        }

        alert('Результат ' + res);
        let d = prompt('Хотите продолжить? (нажмите только ОК либо Отмена');

        i = d;
    } 
}

