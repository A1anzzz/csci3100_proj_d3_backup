function WordValidation(x){
    let words = x;
    fetch("./SwearWord.json").then(response => {
        return response.json();
    }).then( swearWords => {
        let tmp = IsIn(words,swearWords['swear_word']);
        if (tmp[0] > 0){
            for (let j = 1; j < tmp.length; j++){
                let reply = 'Your words are invalid. In details, ';
                let replyTxt = (xx) =>{
                    for (let z = 1; z < tmp.length; z++) {
                        xx = xx + swearWords['swear_word'][tmp[z]] + ",";
                    }
                    xx = xx+" is/are not permitted. Please make some modification.";
                    return xx;
                }
                console.log(replyTxt(reply));
            }
        } else{
            console.log("Your words are valid.")
        }
    });
}

function IsIn(x,y){
    let xx=x;
    let yy=y;
    let index = new Array();
    index[0]=0;
    for (let i = 0; i < yy.length; i++) { 
        if (xx.includes(" "+yy[i]+" ")) {
           index[index[0]+1] = i;
           index[0]= index[0] +1;
        }
    }
    return(index);
}