
let btn = document.querySelector("#btn");
let mode = "off";
let body = document.querySelector("body");

btn.onclick = () => {
    if(mode === "off") {
        mode = "on";
        body.style.backgroundColor = "yellow";
        btn.style.backgroundColor = "aqua";
        console.log(mode);
    } else {
        mode = "off";
        body.style.backgroundColor = "red";
        btn.style.backgroundColor = "orange";
        console.log(mode);
    }    
}