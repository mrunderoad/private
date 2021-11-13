$(document).ready(function() {
  $("#formInfo").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    $(".show-match").show();
    $(".match").show();
    $(".form-group").hide();
    $(".btn").hide();
    $(".me").show();
    $("#name1").text(nameInput);
  });
});