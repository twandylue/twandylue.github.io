function avg(data) {
    let total_price = 0;
    for (let i=0; i<data['size']; i++){
        total_price += data['products'][i]['price'];
    }
    avg_price = total_price/data['size'];
    return(avg_price)
}

console.log(
    avg({
        size:3,
        products:[
            {
                name:"Product 1",
                price:100
            },
            {
                name:"Product 2",
                price:700
            },
            {
                name:"Product 3",
                price:250  
            }
        ]
    })
) 
// should print the average price of all products 