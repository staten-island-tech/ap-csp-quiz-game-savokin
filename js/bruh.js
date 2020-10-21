






send();















function send(){
    document.getElementsByClassName('resultbutton')[0].addEventListener("click", function(){
        process(lmao());
        return false;
    });
}




function process(score){
    if(score<5){
        window.location.href = "./Score1-4.html";
    }else if(score>4 && score<9){
        window.location.href = "./Score5-8.html";

    }else{
       window.location.href = "./Score9-12.html";
    }
    
    
}

function lmao(){
    let score = 0;
    for(i=1; i<11; i++){
        bruhstring = 'q' + i;
        console.log(bruhstring);
        bruh = document.getElementsByName(bruhstring);
        console.log(bruh);
    
        for(x=0; x<4; x++){
            if(bruh[x].checked && bruh[x].value == 'correct'){
                score++;
            }
            console.log(score);
        }
    }
    return score;
}
