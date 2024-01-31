const orders = [
    { customerName: "Nicolas", total: 1000, delivered: true, },
    { customerName: "Zulema", total: 2000, delivered: false, },
    { customerName: "Santiago", total: 180, delivered: true, },
    { customerName: "Valentina", total: 240, delivered: true, },
  ]


  const resp = orders.map(item => item.total)

  /*const resp2 = orders.map(item => {
    item.tax = .19
    return item
  })*/

  const resp3 = orders.map(item => {
    return {
        ...item,
        tax : Math.trunc(item.total * .19)
    }
  })

  console.log(orders)
  console.log(resp3)