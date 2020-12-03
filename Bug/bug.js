

$(document).ready(function() {


  $("#submitButton").click(function() {
     $("#output").html($("#comments").val());
  });

  document.cookie = "stealme=it's pretty easy to access a cookie if you're not output escaping... Take a look at lab8.js to see how this cookie is set.; path=/";

});
