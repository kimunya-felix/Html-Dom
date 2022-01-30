let el1 = document.querySelector("#primary").getElementsByClassName("link")
for(let x=0; x<el1.length; x+=2){
   el1[x].style.backgroundColor="red"
   el1[x].style.color="black"
}
let element = document.querySelector("#primary")