let count = 0;
    
document.addEventListener('DOMContentLoaded', function(){
    let clearButton = document.querySelector('#clear');
    let plusButton = document.querySelector('#plus');
    let minusButton = document.querySelector('#minus');
    minusButton.disabled = true;
    let counterInput = document.querySelector('#counter');
    
    clearButton.addEventListener('click', function(){
        count = 0;
        plusButton.disabled=false;
        minusButton.disabled=true;
        counterInput.value = count;
    });

    plusButton.addEventListener('click', function(){
        count++;
        plusButton.disabled= count >= 10;
        minusButton.disabled=false;
        counterInput.value = count;
    });

    minusButton.addEventListener('click', function(){
        count--;
        minusButton.disabled= count < 1;
        plusButton.disabled=false;
        counterInput.value = count;
    });
});
    