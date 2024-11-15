var submit = document.getElementById("btn")
//var namee, phno, email, height, nickname, income, scale, cheatedon;

var nm, ph, em, hg, nn, inc, scl, cht;

// inputs
var namee = document.getElementById("name")
var phno = document.getElementById("phno")
var email = document.getElementById("email")
var height = document.getElementById("height")
var nickname = document.getElementById("nickname")
var income = document.getElementById("inc")
var scale = document.getElementById("scale")
var cheatedon = document.getElementById("cheat")

var opt = document.getElementById("outputt")

scale.oninput = () => {
    scl = scale.value
    opt.innerHTML = "Answer: " + scl
}

submit.addEventListener("click", () => {

    nm = namee.value.toString();
    ph = Number(phno.value);
    em = email.value;
    hg = Number(height.value);
    nn = nickname.value.toString();
    inc = Number(income.value);
    scl = Number(scale.value);
    cht = Number(cheatedon.value);
    /*    console.log(nm)
        console.log(ph)
        console.log(em)
        console.log(hg)
        console.log(nn)
        console.log(inc)
        console.log(scl)
        console.log(cht)*/
})