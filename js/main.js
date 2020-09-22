const myform = document.getElementById("cv-f");

if (myform) {
    // myform.addEventListener("submit", getDeets)

    function getDeets(e) {
        e.preventDefault();

        const first = document.getElementById('fname').value;
        sessionStorage.setItem("first", first);

        const midd = document.getElementById('mname').value;
        sessionStorage.setItem("midd", midd);

        const last = document.getElementById('lname').value;
        sessionStorage.setItem("last", last);

        const pob = document.getElementById('p_o').value;
        sessionStorage.setItem("pob", pob);

        const mob = document.getElementById('mobile').value;
        sessionStorage.setItem("mob", mob);


        const mail = document.getElementById('mail').value;
        sessionStorage.setItem("mail", mail);

        const li = document.getElementById('LI').value;
        sessionStorage.setItem("li", li);

        let gender = document.getElementById('gen').value;
        sessionStorage.setItem("gen", gen)

        if (first.value === "") {
            alert("Please enter your first name");
            first.focus();
            return false;
        }


        if (last.value === "") {
            alert("Please enter your last name");
            last.focus();
            return false;
        }

        if (pob.value === "") {
            alert("Please enter your address");
            pob.focus();
            return false;
        }

        if (mob.value === "") {
            alert("Please enter your mobile number");
            mob.focus();
            return false;
        }

        if (mail.value === "") {
            alert("Please enter your email");
            mail.focus();
            return false;
        }

        if (li.value === "") {
            alert("Please enter your linkedin url");
            li.focus();
            return false;
        }

        if (gen.value === "0") {
            alert("Please select a gender");
            return false;
        }




        if (sessionStorage >= 7) {
            myform.addEventListener("submit", e => {
                location.href = "cv.html";
                console.log(sessionStorage.length);
                myform.reset();
            })
        }

        return true;
    }

}


// myform.addEventListener("submit", getDeets);