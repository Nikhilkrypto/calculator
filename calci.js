const display = document.getElementById('displayer');
buttons = document.querySelectorAll('button');
let screenValue='';
let decount=0;
for(item of buttons)
{
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='x')
        {
            buttonText='*';
            screenValue+=buttonText;
            display.value=screenValue;
        }else if(buttonText=='AC')
        {
            screenValue='';
            display.value=screenValue;
        }
        else if(buttonText=='=')
        {
            display.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            display.value=screenValue;
        }
        
    });
}
