import {areIntervalsOverlapping} from 'date-fns'

const numbers = [1,2,3,4,5]

let res = false
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if ( element % 2 === 0) {
        res = true
        break
    }
}

console.log(res)

const resp2 = numbers.some(item => item % 2 === 0)
console.log(resp2);

const orders = [
    { customerName: "Nicolas", total: 1000, delivered: true, },
    { customerName: "Zulema", total: 2000, delivered: false, },
    { customerName: "Santiago", total: 180, delivered: true, },
    { customerName: "Valentina", total: 240, delivered: true, },
]

const resp3 = orders.some(item => item.delivered)
console.log(resp3);

const dates = [
    { startDate: new Date(2021, 1, 1, 10), endDate: new Date(2021, 1, 1, 11), title: "Cita de trabajo",},
    { startDate: new Date(2021, 1, 1, 15), endDate: new Date(2021, 1, 1, 15, 30), title: "Cita con mi jefe", },
    { startDate: new Date(2021, 1, 1, 20), endDate: new Date(2021, 1, 1, 21), title: "Cena", },
]

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 10, 30),
}

//var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlapping = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}
console.log('isOverlapping', isOverlapping(newAppointment))
