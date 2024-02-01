const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const resp = users.map(item => item.attributes).flat(2)
console.log(resp);

const resp2 = users.flatMap(item => item.attributes)
console.log(resp2);

const calendars = {
    primaryCalendar: [
      { startDate: new Date(2021, 1, 1, 15), endDate: new Date(2021, 1, 1, 15, 30), title: "Cita 1", },
      { startDate: new Date(2021, 1, 1, 17), endDate: new Date(2021, 1, 1, 18), title: "Cita 2", },
    ],
    secondaryCalendar: [
      { startDate: new Date(2021, 1, 1, 12), endDate: new Date(2021, 1, 1, 12, 30), title: "Cita 2", },
      { startDate: new Date(2021, 1, 1, 9), endDate: new Date(2021, 1, 1, 10), title: "Cita 4", },
    ],
  }

  console.log(Object.values(calendars).flatMap(calendar => calendar.map(date => date.startDate)));


  const arr = ["Beautiful is better than ugly","Explicit is better than implicit"]

  const resp4 = arr.map((item) => item.split(' ')).flat().length
  console.log(resp4);