let string = '';
let btns = document.querySelectorAll('.btns');
let input = document.querySelector('input');
let result = document.querySelector('#result');
let moonAndSunContainer=document.querySelector('#themeIcon')
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
            if (result.innerHTML || input.value == 'Error') {
                string = '';
                input.value = '';
                result.innerHTML = '';
            }
            string += btnValue;
            input.value = string;
        }
    });
});

let isWhite = true;
moonAndSunContainer.addEventListener('click', (e) => {
    if (isWhite) {
        appWrapper.style.backgroundColor = '#283637';
        btns.forEach((button) => {
            button.style.color = '#f5f5f5'
        });
        input.style.backgroundColor='#283637';
        moonAndSunContainer.innerHTML=`<i class="fa-regular fa-sun icons"></i>`;
        isWhite = !isWhite;
    } else {
        appWrapper.style.backgroundColor = '#ffffff';
        btns.forEach((button) => {
            button.style.color = '#283637'
        });
        input.style.backgroundColor='#ffffff'
        moonAndSunContainer.innerHTML=`<i class="fa-solid fa-moon fa-xl icons"></i>`;
        isWhite = !isWhite;
    }
});