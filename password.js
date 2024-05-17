let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let number=document.getElementById("number");
let symbols=document.getElementById("symbols");
let genbtn=document.getElementById("genbtn");
let copyIcon=document.getElementById("content-copy");



sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});
genbtn.addEventListener('click',()=>{
    passbox.value=generatepassword();
})
let lowerchars="abcdefghijklmnoprstuvwxyz";
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers="0123456789";
let allsymbol="~!@#$%^&*?"
function generatepassword(){
    let genpassword="";
    let allchars="";
    allchars +=lowercase.checked ? lowerchars : "";
    allchars +=uppercase.checked ? upperchars : "";
    allchars +=number.checked ? allnumbers : "";
    allchars +=symbols.checked ? allsymbol : "";

    if(allchars == "" || allchars.length == 0){
        return genpassword;
    }
    let i=1;
    while(i<=inputSlider.value){
    genpassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
    i++;
    }
    return genpassword;
}
copyIcon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});

