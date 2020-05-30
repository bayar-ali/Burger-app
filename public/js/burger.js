

$(function () {
    $(".change-devoured").on("click", function (event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function () {
          console.log("changed sleep to", newSleep);
        
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
  
      var newCat = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=sleepy]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function () {
          console.log("created new burger");
       
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");
  
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
         
          location.reload();
        }
      );
    });
  });