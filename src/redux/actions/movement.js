export const movement = (data,i) => {

    if(i!=-5){
        return {type: 'isMoving', 
        AllData:data
    }   
    }
    else{
        return {type: 'clearIsmoving', 
        id:data
    }    
    }
}
