//Back end functions
var determine = function(choice1, choice2, choice3, choice4, choice5){
  if (choice2 === "android"){
    return "java";
  }
  else if (choice1 === "front"){
    return "css";
  }
  else if (choice3 === "videoGame" && choice4 != "begin"){
    return "csharp";
  }
  else if(choice3 === "website" && choice4 === "begin"){
    return "php";
  }
  else if (choice5 === "fun" || choice3 === "website"){
    return "ruby";
  }
  else{
    return "java2";
  }
};



//Front end
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $(".results").children().hide();
    $(".question").removeClass("has-error");
    $(".help-block").hide();
    var choice1 = $("input:radio[name=development]:checked").val();
    var choice2 = $("input:radio[name=os]:checked").val();
    var choice3 = $("input:radio[name=typeApp]:checked").val();
    var choice4 = $("input:radio[name=exp]:checked").val();
    var choice5 = $("input:radio[name=goal]:checked").val();
    if(!choice1 || !choice2 || !choice3 || !choice4 || !choice5){
      if(!choice1){
        $("#question1").addClass("has-error");
        $("#help-block1").show();
      }
      if(!choice2){
        $("#question2").addClass("has-error");
        $("#help-block2").show();
      }
      if(!choice3){
        $("#question3").addClass("has-error");
        $("#help-block3").show();
      }
      if(!choice4){
        $("#question4").addClass("has-error");
        $("#help-block4").show();
      }
      if(!choice5){
        $("#question5").addClass("has-error");
        $("#help-block5").show();
      }
    }
    else{
      var answer = determine(choice1, choice2, choice3, choice4, choice5);
      if (answer === "java"){
        $("#java").show();
      }
      else if(answer === "css"){
        $("#css").show();
      }
      else if(answer === "csharp"){
        $("#csharp").show();
      }
      else if(answer === "php"){
        $("#php").show();
      }
      else if(answer === "ruby"){
        $("#ruby").show();
      }
      else{
        $("#java2").show();
      }
    }
  });
});
