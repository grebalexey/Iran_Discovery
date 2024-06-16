const rangeInput = document.querySelectorAll(".aside-filter__line-range-slider-input input"),
priceInput = document.querySelectorAll(".aside-filter__line-range-value input"),
progress = document.querySelector(".aside-filter__line-range-slider .aside-filter__line-range-slider-progress");

let priceGap = 3500000;
let dayGap = 100;

console.log(rangeInput);

rangeInput.forEach(input => {
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[1].value),
        maxVal = parseInt(rangeInput[0].value);

        if((maxVal - minVal) < priceGap){
           if(e.target.className === "aside-filter__line-range-slider-input-min"){
                rangeInput[1].value = maxVal - priceGap;
                console.log(rangeInput[1].value);
           } else{
            rangeInput[0].value = minVal + priceGap;
            console.log(rangeInput[0].value);
           }
            
        } else{
            priceInput[0].value = maxVal;
            priceInput[1].value = minVal;
            progress.style.right = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.left = 100 - (maxVal / rangeInput[0].max) * 100 + "%";
        }

    });
});

priceInput.forEach(input => {
    input.addEventListener("input", () =>{
        let minVal = parseInt(priceInput[1].value),
        maxVal = parseInt(priceInput[0].value);
     
        if((maxVal - minVal >= priceGap) && maxVal <= rangeInput[0].max){
           
           rangeInput[0].value = maxVal;
           progress.style.left = 100 - (maxVal / rangeInput[0].max) * 100 + "%";
           rangeInput[1].value = minVal;
           progress.style.right = (minVal / rangeInput[1].max) * 100 + "%";

        } 
    });
});