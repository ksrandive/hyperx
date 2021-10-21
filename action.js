function ClearFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function showDialog(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    window.alert(name+" Your response is saved !!! \nMail is sent on "+email+". \nThank You for contating us !!");
}

function showRatingDialog(){
  var review = document.getElementById("review").value
  var rate_value
  if (document.getElementById('star-5').checked) {
    rate_value = "Excellent"
  }
  else if (document.getElementById('star-4').checked) {
    rate_value = "Good"
  }
  else if (document.getElementById('star-3').checked) {
    rate_value = "Ok"
  }
  else if (document.getElementById('star-2').checked) {
    rate_value = "Poor"
  }
  else if (document.getElementById('star-1').checked) {
    rate_value = "Very Bad"
  }

  window.alert("Review saved as "+ rate_value+"\nYour Review "+review)

}

function cart(){
  alert("Added to cart !!")
}

function resetReview(){
    var radio = document.querySelector('input[type=radio][name=star]:checked');
    radio.checked = false;
    document.getElementById("star-1").checked = true;
    document.getElementById("review").value = "";
}

function buyItem(){
  if (document.getElementById('7').checked) {
    rate_value = "7"
  }
  else if (document.getElementById('8').checked) {
    rate_value = "8"
  }
  else if (document.getElementById('9').checked) {
    rate_value = "9"
  }
  else if (document.getElementById('10').checked) {
    rate_value = "10"
  }
  var pname = document.getElementById('pname').value
  var quantity = document.getElementById('quantity').value
  alert("Thanks for Buying !! \nOrder Places as...\nProduct Name : "+pname+" \nSize : "+rate_value+" \nQuantity : "+quantity)
}