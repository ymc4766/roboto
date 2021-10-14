import React from 'react'

const stylled ={
    overFlowY: 'scroll',


}

const Scroll = (props) => {
    return (
        <div style={{overflowY :"scroll" ,border:"2px solid black", height:"700px"} }>
            {props.children}
        </div>
    )
}

export default Scroll;
