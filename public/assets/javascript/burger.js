// A $( document ).ready() block.
$(document).ready(function () {
  $(".burgerPic").attr("src", "../assets/images/149336.png")
  $(function () {
    $(".change-devoured").on("click", function () {
      var id = $(this).data("id");
      var isDevoured = $(this).data("devour");
      var devouredState = {
        devoured: isDevoured
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function () {
        console.log("Burger has been officially " + isDevoured);
        location.reload();
      });
    });

      $("#create-burger").on("click", function(event){
        event.preventDefault();
        var newBurger = {
          burger_name: $("#burger-name").val().trim()
        };

        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
          console.log("Made that new burger.");
          location.reload();
        })
      });

    
  });
});