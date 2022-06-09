let dataarr = JSON.parse(localStorage.getItem("userdetails"));

function login() {
  var e = [];
  var p = [];

  dataarr.forEach(function (el) {
    e.push(el.user);
    p.push(el.password);
  });

  var email = document.getElementById("user");
  var pw = document.getElementById("password");

  for (var i = 0; i < p.length; i++) {
    if (email.value == e[i] && pw.value == p[i]) {
      alert("Login Successful");
      window.location.href="index.html"
    } else {
      alert("Incorrect email or Password");
    }
  }
}
