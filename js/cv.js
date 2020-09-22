first = sessionStorage.getItem("first");
middle = sessionStorage.getItem("midd");
last = sessionStorage.getItem("last");
addy = sessionStorage.getItem("pob");
mobile = sessionStorage.getItem("mob");
email = sessionStorage.getItem("mail");
li = sessionStorage.getItem("li");

document.getElementById("c-name").innerHTML = `${first} ${middle} ${last}`;
document.getElementById("c-addy").innerHTML = `${addy}`;
document.getElementById("c-mobile").innerHTML = `${mobile}`;
document.getElementById("c-mail").innerHTML = `${email}`;
document.getElementById("c-LI").innerHTML = `${li}`;