// Question: print out how much each donut costs.
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(num, index, array){
    const donut = array[index];
    console.log(donut.type + " donuts cost $" + donut.cost + " each" );
});
