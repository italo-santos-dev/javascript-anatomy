function formattedDate(time){
    if(time === undefined){
        time = new Date();
    }
    time = new Date(time);
    let h = time.getHours() < 10 ? '0'+ time.getHours() : time.getHours();
    let m = time.getMinutes() < 10? '0'+time.getMinutes(): time.getMinutes();
    
    return time.toLocaleDateString('pt-BR') + ' '+h+':'+m;
    
}


console.log(formattedDate(new Date()));