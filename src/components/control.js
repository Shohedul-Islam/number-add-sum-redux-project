import React from 'react'
import {connect} from 'react-redux'

const Control= (props)=> {
    return (
        <div>
            <button onClick={()=>props.add()}>+ADD</button>
            <button onClick={()=>props.sub()}>-SUB</button>
        </div>
    )
}


function mapDispatchToprops(dispatch){
    return{
     add: ()=>{
         dispatch({type:'ADD'})
     },

     sub: ()=>{
        dispatch({type:'SUB'})
    }
    }
}


export default connect(null,mapDispatchToprops)(Control)