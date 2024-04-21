const cup = {
    color:'red',
    shape:'circular',
    weight:'50 grams',
    size:'medium',
    description:{
        drinkType:'tea',
        temperature:'hot'
    },
    drink: function(){
        console.log('Use me to drink');
        // console.log(`The main purpose of this cup is to drink` ${this:description.temperature})
    } 
};
// key and value
console.log({color:cup.color});
console.log({'size':cup['size']});
console.log({'temperature':cup.description.temperature});

cup.material = 'ceramic'
console.log({cup});

cup.color = 'green'
console.log({cup});

delete cup.material;

console.log({cup});

const keys= Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log({values});

Object.keys(cup).forEach(item =>{
    console.log({key:item, values:cup[item]});
})