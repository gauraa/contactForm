window.onload = function () {
  document.getElementById("submitButton").onclick = function () {
    var mailAdress = contactForm.email.value
    alert('mailAdress: ' + mailAdress)
  }
}

function hoge() {
  alert('hoge')
}