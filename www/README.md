# Quiz - 5 Perguntas - Confirm e Beep

```

//OBS: achei mais interessante fazer o questionário sem resposta correta, 
//portanto, independente da resposta, o dispositivo irá vibrar
$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser Sonysta");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser Caixista");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Xbox ou PlayStation", confirma, "Pergunta 1:",['PlayStation','Xbox']);
});

$(document).on("click","#confirm2", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser das Ruas");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser das Pistas");
       navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("MotorSport ou Horizon", confirma, "Pergunta 2:",['Horizon','MotorSport']);
});

$(document).on("click","#confirm3", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser do UnderGround 3");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser do Midnight");
       navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Midnight ou UnderGround 3", confirma, "Pergunta 3:",['UnderGround 3','Midnight']);
});

$(document).on("click","#confirm4", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser do Controle");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser do Teclado");
       navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Teclado ou Controle", confirma, "Pergunta 4:",['Controle','Teclado']);
});

$(document).on("click","#confirm5", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser do talento!");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser do trabalho duro!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("CR7 ou Messi", confirma, "Pergunta 5:",['Messi','CR7']);
});



```
