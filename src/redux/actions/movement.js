export const movement = (data,i) => {

    if(i==1){
        return {type: 'isMoving', 
        AllData:data
    }   
    }
    else if(i==-10){
        return {type: 'isPaused', 
        AllData:data
    }
    }
    else if(i==10){
        return {type: 'isResumed', 
        AllData:data
    }
    }
    else{
        return {type: 'clearIsmoving', 
        id:data
    }    
    }
}
