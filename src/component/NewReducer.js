import React from 'react'


  export function reducer(state, action)
     {
        switch (action.type) 
        {
            case 'one':
                return {count : state . count + 1};
            case 'two':
            return{count:state.count-1}    
            case 'three':
                return{count:state.count*2}
                case 'four':
                    return{count:state.count/2}
                default:
                    return state.count;
        }

    }

