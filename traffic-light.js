
function allLightsOff(){
    var lights = document.querySelectorAll('.light');
    for (var i = 0; i < lights.length; i++) {
        var light = lights[i];
        light.classList.remove('on');
    }

      // document.querySelectorAll('.light').forEach(function(light){
      //   light.classList.remove('on');
      // });

}

function switchOn(className){
  allLightsOff();
  var redLight = document.querySelector(className);
  redLight.classList.add('on');
}

function go(){
  switchOn('.go');
}

function stop(){
  switchOn('.stop');
}

function caution(){
  switchOn('.caution');
}

var number = document.querySelector("#number");

function captureTimeChange(cb){
  var timeLeft = document.querySelector("#timeLeft");

  console.log(timeLeft);

  timeLeft.addEventListener("keyup", function(evt){
      var num = Number(evt.target.value);
      number.innerHTML = num;
    setTimeout(function(){
      cb(num);
    }, 0)
  });
}

var counter = 60;
setInterval(function(){
  number.innerHTML = counter;
  counter--;
  if (counter > 40){
    stop();
  }
  else if (counter < 40 && counter > 20){
    go();
  }
  else{
    caution();
  }
  if (counter === 0){
    counter = 60;
  }
}, 500);
