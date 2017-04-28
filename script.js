$(document).ready(function(){
  var dollars = 100;
  var options = ["<i class='fa fa-money fa-3x'></i>","<i class='fa fa-jpy fa-3x'></i>","<i class='fa fa-gbp fa-3x'></i>"];
  $("#money").html(dollars + "$");
  $("#input1").keypress(function(e){
    if(e.which==13){
      $("#spin").click();
    }
  });
  $("#spin").click(function(){
    //slots
    var randnum1 = Math.floor(Math.random()*3);
    $("#rand1").html(options[randnum1]);
    var randnum2 = Math.floor(Math.random()*3);
    $("#rand2").html(options[randnum2]);
    var randnum3 = Math.floor(Math.random()*3);
    $("#rand3").html(options[randnum3]);
    
    if (randnum1 === 0 && randnum2 === 0 && randnum3 === 0){
      dollars += ($("#input1").val()*3);
      $("#money").html(dollars + "$");
      setTimeout(function() 
  {
    alert("You won 3x what you bet! Jackpot!");
  }, 500);
    }
    else if (randnum1 === 1 && randnum2 === 1 && randnum3 === 1){
      dollars += ($("#input1").val()*2);
      $("#money").html(dollars + "$");
      setTimeout(function() 
  {
    alert("You won 2x two times what you bet!");
  }, 500);
    }
    else if (randnum1 === 2 && randnum2 === 2 && randnum3 === 2){
      dollars += ($("#input1").val()*2);
      $("#money").html(dollars + "$");
    setTimeout(function() 
  {
    alert("You won 2x what you bet!");
  }, 500);
    }
    else if ((randnum1===0 && randnum2===0)||(randnum1===0 && randnum3===0)||(randnum2===0 && randnum3===0)){
      dollars += ($("#input1").val()*2);
      $("#money").html(dollars + "$");
      setTimeout(function() 
  {
    alert("You won 2x what you bet!");
  }, 500);
    }
 /*   else if ((randnum1===1 && randnum2===1)||(randnum1===1 && randnum3===1)||(randnum2===1 && randnum3===1)){
      dollars += ($("#input1").val()*1.2);
      $("#money").html(dollars + "$");
    setTimeout(function() 
  {
    alert("You won 1.2x!");
  }, 500);
    }
    else if ((randnum1===2 && randnum2===2)||(randnum1===2 && randnum3===2)||(randnum2===2 && randnum3===2)){
      dollars += ($("#input1").val()*1.2);
      $("#money").html(dollars + "$");
    setTimeout(function() 
  {
    alert("You won 1.2x!");
  }, 500);
    } */
    else{
       dollars -= $("#input1").val();
    $("#money").html(dollars + "$");
      if(dollars === 0){
        setTimeout(function() 
  {
      alert("You're out of money. Please leave.");
  }, 500);
      }
     else{ 
    setTimeout(function() 
  {
      alert("Better luck next time!");
  }, 500);
    }
    }
    //reset submit form
    $("#input1").val(""); 
  }); 
});