const submit = document.querySelector(".submit");
const height =  document.querySelector(".height");
const weight= document.querySelector(".weight");

const weight_err  = document.querySelector(".weight_err");
const height_err = document.querySelector(".height_err");
const isValid = true;

submit.addEventListener("click",()=>{
    //validate form
    if(weight.value == ''){
        weight_err.textContent =  "Weight field is required";
        isValid = false;
    }
    if(isNaN(weight.value)){
        weight_err.textContent =  "Weight requires a number";
        isValid = false;
    }
    if((weight.value).length >= 3){
        weight_err.textContent =  "Weight requires not more than 3  digits";
        isValid = false;
    }
    if(height.value == ''){
        height_err.textContent =  "Height field is required";
        isValid = false;
    }
    if(isNaN(height.value)){
        height_err.textContent =  "Height requires a number";
        isValid = false;
    }
    if((height.value).length >= 3){
        height_err.textContent =  "Height requires not more than 3  digits";
        isValid = false;
    }
    if(isValid){
        let bmi =( weight.value / (height.value ** 2)).toFixed(2);
        document.querySelector('.result').textContent = bmi;
        weight.value = '';
        height.value =  '';
    }
})


