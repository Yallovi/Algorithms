function addBusinessDays(date, daysToAdd) {
    let counter = 0;
    let dates = [];

    while (counter < daysToAdd) {
        date.setDate(date.getDate() + 1); // Увеличиваем дату на один день
        if (date.getDay() !== 0 && date.getDay() !== 6) { // Если это не воскресенье и не суббота
            counter++;
            dates.push(new Date(date)); // Сохраняем дату в массив
        }
    }
    return dates;
}

let currentDate = new Date();
let businessDates = addBusinessDays(currentDate, 5);

// Выводим каждый рабочий день по порядку в формате ISO 8601
businessDates.forEach(date => {
    console.log(date.toISOString());

});


/**
 * javaScript нужно написать функцию, которая получает дату и периодичность = неделе, и к этой дате она прибавляет периодичность 5 раз и выодит даты поочередно
 */

function addWeeksToDate(initialDate, weeks) {
    const resultDates = [];
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;

    for (let i = 0; i < 5; i++) {
        const newDate = new Date(initialDate.getTime() + i * weeks * millisecondsPerWeek);
        resultDates.push(newDate);
    }

    return resultDates;
}

const startDate = new Date(); // Здесь поместите вашу начальную дату
const weeksToAdd = 1; // Здесь поместите вашу периодичность в неделях

const newDates = addWeeksToDate(startDate, weeksToAdd);
newDates.forEach(date => {
    console.log(date.toDateString());
});


// test

const a = [
    {titleVarian: 'chilled'},
    {titleVarian: '123'},
    {titleVarian: '12'},
    {titleVarian: 'forzen'}
]
const p = a.filter(item => item.titleVarian === 'chilled' || item.titleVarian ===  'forzen')
// console.log('a', p)

function factorial(n) {
    if (n === 1) return 1

    return n * factorial(n - 1)
}

console.log('factorial', factorial(5));

function fibonachi(n) {
    if (n === 1 || n === 2){
        return 1
    }

    return fibonachi(n -1) + fibonachi(n - 2)
}

console.log('fibonachi',fibonachi(8))