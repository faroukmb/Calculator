
const display=document.querySelector("#display");
function add(num1,num2){
    return parseFloat(num1)+parseFloat(num2);
}
function sous(num1,num2){
    return parseFloat(num1)-parseFloat(num2);
}
function mult(num1,num2){
    return parseFloat(num1)*parseFloat(num2);
}
function divide(num1,num2){
    if (parseFloat(num2)!=0){
        return parseFloat(num1)/parseFloat(num2);
    }
     display.value="Error!";
     
    
}
let operator="";
let first="";
let second="";
function operate(first,second,operator){
    switch (operator){
        case "+":
         return add(first,second);
         break;
        case "-":
         return sous(first,second);
         break;
        case "*":
         return mult(first,second);
         break;
        case "/":
         return divide(first,second);
     };
}


let desplayed="";
const curentdisplay=document.querySelector(".display");
const btns=document.querySelectorAll("button");
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      switch (btn.id){
        case "seven":
            desplayed=(desplayed+"7").substring(0,22);
            curentdisplay.value=desplayed;
            break;
        case "eight":
            desplayed=(desplayed+"8").substring(0,22);
            curentdisplay.value=desplayed;
            break;
           
        case "nine":
            desplayed=(desplayed+"9").substring(0,22);
            curentdisplay.value=desplayed;
            break;
           
        case "four":
            desplayed=(desplayed+"4").substring(0,22);
            curentdisplay.value=desplayed;
            break;
    
        case "five":
            desplayed=(desplayed+"5").substring(0,22);
            curentdisplay.value=desplayed;
            break;
    
        case "six":
            desplayed=(desplayed+"6").substring(0,22);
            curentdisplay.value=desplayed;
            break;
    
        case "one":
            desplayed=(desplayed+"1").substring(0,22);
            curentdisplay.value=desplayed;
            break;

        case "two":
            desplayed=(desplayed+"2").substring(0,22);
            curentdisplay.value=desplayed;
            break;
        
        case "three":
            desplayed=(desplayed+"3").substring(0,22);
            curentdisplay.value=desplayed;
            break;
        case "zero":
            desplayed=(desplayed+"0").substring(0,22);
            curentdisplay.value=desplayed;
            break;
        case ".":
            desplayed=(desplayed+".").substring(0,22);
            curentdisplay.value=desplayed;
            break;
        case "reset":
            operator='';
            first='';
            second='';
            desplayed='';
            curentdisplay.value=desplayed;
        case "perc":
            curentdisplay.value=curentdisplay.value/100;
            desplayed='';            
        case "add":
            operator="+";
            if (first ===""){
                first=desplayed;
            }   
            desplayed="";
            break;
        case "sous":
            operator="-";
            if (first ===""){
                first=desplayed;
            }   
            desplayed="";
            break;
        case "mult":
                operator="*";
                if (first ===""){
                    first=desplayed;
                }   
                desplayed="";
                break;
        case "devi":
            operator="/";
            if (first ===""){
                first=desplayed;
            }   
            desplayed="";
            break;
        case "equal":
            if (first !=""){
                second=desplayed;
            }     
            if (first !="" && operator!="" && second==""){
                second=first;
            }
            if (first !="" && second !="" && operator !=""){
                desplayed=(operate(first,second,operator)).toString().substring(0,22);
                curentdisplay.value=desplayed;
                first="";
                second="";
                operator="";
                if (desplayed == "Error!"){
                    desplayed="";
            }
        
          }
            break;
            case "plmo":
                toggleSign();
                
        };  
    });
});
function toggleSign() {
    if (desplayed.startsWith('-')) {
        desplayed = desplayed.substring(1);
    } else {
        desplayed = '-' + desplayed;
    }
    curentdisplay.value = desplayed;
}

 