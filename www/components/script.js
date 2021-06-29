//OBS: achei mais interessante fazer o questionário sem resposta correta, 
//portanto, independente da resposta, o dispositivo irá vibrar
$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você é de humanas");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você é de exatas");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Matemática ou Português", confirma, "Pergunta 1:",['Português','Matemática']);
});

$(document).on("click","#confirm2", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser sedentário");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser atleta");
       navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Esporte ou Jogos virtuais", confirma, "Pergunta 2:",['Jogos virtuais','Esporte']);
});

$(document).on("click","#confirm3", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Escolheu ser caseiro");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu ser da Noitada");
       navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Festa ou Filme em casa", confirma, "Pergunta 3:",['Filme em casa','Festa']);
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
      navigator.notification.alert("Escolheu o que acham que é o melhor do mundo!");
       navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Escolheu o melhor do mundo!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("CR7 ou Messi", confirma, "Pergunta 5:",['Messi','CR7']);
});

