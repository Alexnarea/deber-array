"use strict"

let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

//elimina sunday del inicio de la lista.
week.shift("Sunday");

alert(week);

//agrega monday al inicio de la lista.
week.unshift("Monday");

alert(week);

//agrega sunday al final de la lista.
week.push("Sunday");

alert(week);

//inserta friday en la posicion correspondiente.
week.splice(4, 0, 'Friday');

alert(week);

//muestra en la pantalla elemento por elemento.
for(let i = 0; i <week.length; i++) {
    alert(`${i + 1} ${week[i]}`)
}


