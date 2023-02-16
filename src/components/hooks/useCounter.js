import React, { useState } from "react";

const useCounter = (initialValue)=>{

    const [value, setValue] = useState(initialValue);

    const incrementValue = ()=>{
        if(value + 1 >29){
            throw Error("You reached the limit!")
        }else{
            setValue(value + 1);
        }
    }

    const decrementValue = ()=>{
        if(value - 1 < 0){
            throw Error("You reached the minimum!")
        }else{
            setValue(value - 1);
        }
    }

    const resetValue = ()=>{
        setValue(0)
    }
    return {value,incrementValue,decrementValue,resetValue}
}

export default useCounter;