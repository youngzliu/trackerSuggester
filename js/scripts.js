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
  else if((choice3 === "website") && (choice4 === "begin"){
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
    var choice1 = $("input:radio[name=development]:checked").val();
    var choice2 = $("input:radio[name=development]:checked").val();
    var choice3 = $("input:radio[name=development]:checked").val();
    var choice4 = $("input:radio[name=development]:checked").val();
    var choice5 = $("input:radio[name=development]:checked").val();
  });
});
