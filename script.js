const id=document.getElementById("id")
const buttomID=document.getElementById("buttom-id")


const abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
/* let num1=Math.round(Math.random()*10) */


function idd(){
    let numa=Math.round(Math.random()*25)
    id.textContent=Math.round(Math.random()*10)+""+abc[numa]+""+Math.round(Math.random()*10)+""+Math.round(Math.random()*10)+""+Math.round(Math.random()*10)+""+abc[numa]
}



buttomID.addEventListener("click",(e)=>{
    idd()
})

