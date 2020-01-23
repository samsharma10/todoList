/** //Check off specific todos by clicking
$("li").click(function(){
    //if li is grey
    if( $(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black
        $(this).css({
            color:"black",
            textDecoration: "none"
        });
    }
    //else
    else{
        //turn it grey
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    } 
});
*/
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    //grabbing todo text from input
    var todoText = $(this).val();
    $(this).val("");

    //creating new li and append to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
