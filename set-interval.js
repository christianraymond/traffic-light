var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval(){
        counter++;
        // write some code here
        showNumber(counter);

        if(counter === 60){
         counter = 0;

        }
}

setInterval(interval, 500);
