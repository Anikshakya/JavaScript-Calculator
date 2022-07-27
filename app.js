(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let backspace = document.querySelector('.btn-backspace')

   buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value +=value;
        })
    }); 

    
   
 /*       let buttons1 = document.getElementsByClassName('.btn');
        for(let all of buttons1){
            all=dataset.num;
            screen.value += all;
        }
    */

    equal.addEventListener('click', function(e){
        if(screen.value == ''){
            screen.value = "";
        }else{
            let ans = eval(screen.value);
            screen.value = ans;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

    backspace.addEventListener('click', function(e){
        if(screen.value == ""){
            screen.value ='';
        }else{
            let del = screen.value.substring(0, screen.value.length - 1);
            screen.value = del;
        }
    })

    let a ='apple';
    let b = "apple ball all dog ele";

    let a1 = a.split('');
    a1l= a1.length;
    console.log(a1l);
   
    let a2 = b.split(' ');
    a2l= a2.length;
    console.log(a2l);

    let v=0;

    if(a1l == a2l){
        for(let i=0; i<a1l; i++){
            for(let j=i+1; j<a2l; j++){
                if(a[i] == a[j]){
                    if(b[i] == b [j]){
                        console.log(a[i]);
                        console.log(b[j]);
                     v = 1;
                    }
                    else{
                        v = 0;
                    }
                }
        
            }
        }
    }else{
        v = 0;
    }

    if (v == 1){
        console.log('In pattern')
    }else {
        console.log('Not in pattern')
    }

})();