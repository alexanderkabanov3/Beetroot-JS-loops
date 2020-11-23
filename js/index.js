'use strict';

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

function updateResult() {
  const h1 = document.getElementById('result');
  const input = document.getElementById('input1');
  const input1 = document.getElementById('input11');

  let a = +input.value;
  let b = +input1.value;
  let sum = 0;
  
  if (!isNaN(a) && !isNaN(b)) {
        if (a < b){
            for (a ; a <=b ; a++){
                sum = sum + a;
            }
            h1.innerText = 'Сумма всех чисел в заданном диапазоне ' + sum;
        }else{
            h1.innerText = 'Ошибка, начало диапазона больше конечного';
        }
  } else {
    h1.innerText = 'Ошибка, не числовое значение';
  }
}

// Запросить 2 числа и найти только наибольший общий делитель. 

function updateResult2() {
    const h1 = document.getElementById('result2');
    const input = document.getElementById('input21');
    const input1 = document.getElementById('input22');
  
    let a = +input.value;
    let b = +input1.value;

    const min = (a < b) ? a : b;

    let i = min;
    let h = -1;

    if (!isNaN(a) && !isNaN(b)){
      while (i > 0 && h < 0){
        const c1 = a % i;
        const c2 = b % i;
  
        if(c1 == 0 && c2 == 0){
          h = i;
        }
  
        i -= 1;
      }
  
      h1.innerText = 'Наибольший общий делитель ' + h;
    } else {
      h1.innerText = 'Ошибка, не числовое значение';
    }

  }

  // Запросить у пользователя число и вывести все делители этого числа.

  function updateResult3() {
    const h1 = document.getElementById('result3');
    const input = document.getElementById('input3');
  
    let a = +input.value;
    let i = a;

    if (!isNaN(a)){
        if (a == 0){
          h1.innerText = 'Вы ввели 0';
        } else {
            let z = document.createElement('p');
            z.innerText = 'Все делите числа ' + a;
            result3.append(z);
            while (i > 0) {
                let b = a % i;

                  if (b == 0){
                    let li = document.createElement('li');
                    li.innerText = i;
                    result3.append(li);
                  }

                i -= 1;
            }
        }

    } else {
      h1.innerText = 'Ошибка, не числовое значение';
    }
  }

  // Определить количество цифр в введенном числе.

  function updateResult4() {
    const h1 = document.getElementById('result4');
    const input = document.getElementById('input4');
  
    let a = +input.value;
    let b = String(a);
    let c;

    if (!isNaN(a)){

       for (let i = 0 ; i < b.length ; i++){
         c = i + 1;
       }
       h1.innerText = 'Количество цифр в вашем числе ' + c;

    } else {
         h1.innerText = 'Ошибка, не числовое значение';
    }
  }

  // Запросить у пользователя число и на сколько цифр его сдвинуть.
  // Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

  function updateResult6() {
    const h1 = document.getElementById('result6');
    const input = document.getElementById('input61');
    const input1 = document.getElementById('input62');
  
    const a = +input.value;
    const b = +input1.value;
    const c = String(a);

    const d = c.slice(b);
    const e = c.substring(0, b);
    const res = d + e;

    h1.innerText = res;
  }

  //  Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10. 

  function updateResult7() {

    let table = document.createElement('table');
    result7.append(table);
    
        for (let i = 2 ; i <= 9 ; i++){

        let str = document.createElement('tr');
        table.append(str);
 
          for(let a = 1; a <= 10 ; a++){
            let b = document.createElement('td');
            b.innerText = i * a;
            str.append(b);
          }
        }
        
  }
  
