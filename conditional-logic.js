captureTimeChange(captureTrafficLightChange);

function captureTrafficLightChange(number){
    //write your code here!
    // number is the value entered in the text on the screen
    if (number > 40){
      go();
    }
      else if
     (number <= 40 && number >= 30){
       caution();
     }

    else{
    (number < 40)
      stop();
    }
}
