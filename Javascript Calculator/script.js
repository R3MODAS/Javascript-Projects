const inputs = document.querySelectorAll("input[type='button']");
const display = document.querySelector(".display input"); 

inputs.forEach((input) => {

    input.addEventListener("click", (e) => {

        if(e.target.value === "AC"){
            display.value = "";
        }
        else if(e.target.value === "DE"){
            display.value = display.value.slice(0,-1);
        }
        else if(e.target.value === "="){
            display.value = eval(display.value);
        }
        else{
            display.value += e.target.value;
        }
    })

})

