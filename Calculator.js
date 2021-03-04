document.querySelectorAll(".same").forEach((cell)=>{cell.addEventListener("click",calculation)});
function calculation(event){
    let clickedBtn = event.target;
    document.getElementById("input").value = document.getElementById("input").value + clickedBtn.innerHTML;
}

function displayAns(){
    let input = document.getElementById("input").value;
    if(input !== "")
        document.getElementById("input").value = eval(input);
}

function clearAll(){
    document.getElementById("input").value = ""; 
}