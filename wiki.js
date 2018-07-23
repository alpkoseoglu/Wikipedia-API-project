$(document).ready(function() {
  $("#search1").click(function() {
    var input = $("#input1");
    var title = input.val();
    var url1 =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      title +
      "&format=json";

    $.ajax(url1, {
      type: "GET",
      url: url1,
      async: false,
      dataType: "json",
      data: {
        origin: "*"
      },
      success: function(data) {
        $("#results").empty();
        for (var i = 0; i < data[1].length; i++) {
          $("#results").append(
            "<div><div class='btn-primary' id='links'> <a href=" +
              data[3][i] +
              " target='_blank'><h2>" +
              data[1][i] +
              "</h2></a>" +
              "<p id='text'>" +
              data[2][i] +
              "</p></div></div>"
          );
        }
        $("#input1").val("");
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });
  });

  $("#input1").keypress(function(e) {
    if (e.which == 13) {
      $("#search1").click();
    }
  });
});
