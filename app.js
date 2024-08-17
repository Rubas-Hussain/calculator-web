let string = '';
let btns = document.querySelectorAll('.btns');
let input = document.querySelector('input');
let result = document.querySelector('#result');
let moon = document.querySelector('.fa-moon');
let appWrapper = document.querySelector('#appWrapper');

Array.from(btns).forEach((button) => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.innerHTML;

        if (btnValue == '=') {
            try {
                string = string.replace(/x/g, '*').replace(/÷/g, '/').replace(/(\d+(\.\d+)?)%/g, '($1 * 0.01');
    
                string = eval(string);
                result.innerHTML = string; 
            } catch (error) {
                input.value = "Error"; 
            }
        } else if (btnValue == 'AC') {
            string = ''; 
            input.value = '';
        } else {
            if(result.innerHTML || input.value=='Error'){
                string = ''; 
                input.value = '';
                result.innerHTML='';
            }
            string += btnValue;
            input.value = string;
        }
    });
});

let isWhite=true;
moon.addEventListener('click',(e)=>{
    if(isWhite){
        appWrapper.style.backgroundColor='#283637';
        isWhite=!isWhite;
    }else{
        appWrapper.style.backgroundColor='#ffffff';
        isWhite=!isWhite;
    }
});