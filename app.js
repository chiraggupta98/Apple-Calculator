


let buttons = document.querySelectorAll("button");

let input = document.querySelector("input");


for(let button of buttons){
    button.addEventListener("click",function(event){
        let btntext = event.target.innerText;
        if(btntext === "C"){
            input.value="";
        }
        else if(btntext ==='='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value ='Invalid Value';
            }
            setInterval(()=>{
                input.value="";
            },10000);
        }
        else{
            input.value += btntext;
        }
    });

    

}