$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($"input#age").val());
    var gender = $("select#gender").val();
    var

    if (gender === 'female' && age > 50) {

    }

    event.preventDefault();
  }
}
