function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback();
};

function intro(){
    console.log('This is me');
    
};
greet("Helen", intro);


setTimeout(intro, 2000);


setInterval(function(){
    console.log('This is an interval');
},3000);

// Closures

function nums(){
    const a = 2;
    console.log({a});
    function add(){
        const b = 3;
        console.log({add:a+b});
    };
    add();
};
nums();