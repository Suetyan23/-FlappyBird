
function List () {

    const fruits =[{id:1, name:"orange", calories:95},
                    {id:2, name:"banana", calories:45},
                    {id:3, name:"apple", calories:55},
                    {id:4, name:"durian", calories:85}];


fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
// fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
// fruits.sort((a,b) => a.calories - b.calories);  //Numeric
// fruits.sort((a,b) => b.calories - a.calories);  //Reverse Numeric

    const lowCalFruits = fruits.filter(fruit => fruit.calories <60 );

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}> {lowCalFruit.name}: <b>{lowCalFruit.calories}</b>
                                            </li> );

  return( <ul>{listItems}</ul> );
}

export default List