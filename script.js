let button = document.querySelector("#button1");

let currentmode = "light";


button.addEventListener("click",() =>{
if(currentmode ==="light"){
    currentmode ="dark";
    document.querySelector("body").style.backgroundColor="black";
}else{
    currentmode="light";
    document.querySelector("body").style.backgroundColor="white";
} 

console.log(currentmode);
});


