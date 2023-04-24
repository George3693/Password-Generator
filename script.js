const Range=document.getElementById("Input-Range")
const upperCase=document.getElementById("uppercase")
const lowerCase=document.getElementById("lowercase")
const Number=document.getElementById("numbers")
const Symbols=document.getElementById("symbols")
const passwordResult=document.getElementById("result")
const rangeResult=document.getElementById("rangevalue")
const div1 =document.getElementById("div11")
const div2 =document.getElementById("div22")
const div3 =document.getElementById("div33")
const div4 =document.getElementById("div44")
const strength=document.getElementById("passwordStrength")
const buttonValue=document.getElementById("button")
 let value = 13; 



Range.addEventListener("input", (event) => {
    value=parseInt(event.target.value)
console.log(value)
rangeResult.innerText=value
})
rangeResult.innerText=value







 function generationPassword(){
    let characterSet = "";
    let password ="";
    if(upperCase.checked){
         characterSet = characterSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
 }
 if(lowerCase.checked){
    characterSet = characterSet +"abcdefghijklmnopqrstuvwxyz" ;
 }
if(Number.checked){
    characterSet=characterSet + "0123456789"
}
if(Symbols.checked){
    characterSet= characterSet + "~`!@#$4%^&*()_-=+\|',.<>"
}
for(let i=0; i<Range.value; i++ ){
    let randomIndex = Math.floor(Math.random()* characterSet .length)

password = password + characterSet[randomIndex]
}
passwordResult.innerText=password



if(upperCase.checked || lowerCase.checked|| Number.checked || Symbols.checked ){
    strength.innerText="to week!"
   }
if(upperCase.checked && (lowerCase.checked || Number.checked || Symbols.checked )){
    strength.innerText="week"
}
if(lowerCase.checked && (Symbols.checked ||Number.checked)){
    strength.innerText="  week"
}
 if(Symbols.checked && Number.checked){
    strength.innerText="week"
 }
 if(upperCase.checked && lowerCase.checked &&  (Number.checked || Symbols.checked)){
    strength.innerText=" medium"
 }
 if(Number.checked && Symbols.checked && (lowerCase.checked|| upperCase.checked)){
    strength.innerText=" medium"
 }
 if(upperCase.checked && lowerCase.checked && Number.checked && Symbols.checked){
    strength.innerText="strong"
 }

 if(strength.innerText =="to week!"){
    div1.style.backgroundColor ="#F64A4A"
    div2.style.backgroundColor ="#18171F"
    div3.style.backgroundColor ="#18171F"
    div4.style.backgroundColor ="#18171F"

 }

 if(strength.innerText=="week"){
    div1.style.backgroundColor ="#FB7C58"
    div2.style.backgroundColor ="#FB7C58"
    div3.style.backgroundColor ="#18171F"
    div4.style.backgroundColor ="#18171F"


 }
 if(strength.innerText=="medium"){
    div1.style.backgroundColor ="#F8CD65"
    div2.style.backgroundColor ="#F8CD65"
    div3.style.backgroundColor ="#F8CD65" 
    div4.style.backgroundColor ="#18171F" 
 }
 if(strength.innerText=="strong"){
    div1.style.backgroundColor ="#A4FFAF"
    div2.style.backgroundColor ="#A4FFAF"
    div3.style.backgroundColor ="#A4FFAF"
    div4.style.backgroundColor ="#A4FFAF"
 }
 if(strength.value==""){
   div1.style.backgroundColor ="#18171F"
    div2.style.backgroundColor ="#18171F"
    div3.style.backgroundColor ="#18171F"
    div4.style.backgroundColor ="#18171F"

 }
 console.log(strength)
 if(lowerCase.checked==false && upperCase.checked==false && Number.checked==false && Symbols.checked==false){
   passwordResult.innerText=""
   strength.innerText=""
   div1.style.backgroundColor ="#18171F"
   div2.style.backgroundColor ="#18171F"
   div3.style.backgroundColor ="#18171F"
   div4.style.backgroundColor ="#18171F"
}
}
function copyText(){


   // Copy the text inside the text field
  navigator.clipboard.writeText(passwordResult.innerText);

  // Alert the copied text
  alert("Copied the text: " + passwordResult.innerText);
}

