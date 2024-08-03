let btnGenerate = document.getElementById("btnGenerate");
let btnClear = document.getElementById("btnClear");
let btnAutoGen = document.getElementById("btnAutoGen");
let initialNumber = document.getElementById("initialNumber");
let endNumber = document.getElementById("endNumber");
let autoGenNumber;



//generate the random number(Using Number() to convert)
btnGenerate.addEventListener('click', function(){
    let initialNumberValue = Number(initialNumber.value);
    let endNumberValue = Number(endNumber.value);

    const numberGenerated = 
    Math.floor(Math.random() * (initialNumberValue - endNumberValue)) + endNumberValue;

    
    document.getElementById("numberGenerated").innerHTML = numberGenerated;
    
});

//Automatic generate a random number
btnAutoGen.addEventListener('click', function(){
    alert("To stop auto generate, press CLEAR");
    let initialNumberValue = Number(initialNumber.value);
    let endNumberValue = Number(endNumber.value);

    autoGenNumber = setInterval(function(){    
        const numberGenerated = 
        Math.floor(Math.random() * (initialNumberValue - endNumberValue)) + endNumberValue;
        document.getElementById("numberGenerated").innerHTML = numberGenerated;
        
    },1000);
});

//clear inputs and stop auto generate
btnClear.addEventListener('click', function(){
    let InputInitialNumber = initialNumber.value = '';
    let InputEndNumber = endNumber.value = '';
    document.getElementById("numberGenerated").innerHTML = "000";
    clearInterval(autoGenNumber);  
    
});



