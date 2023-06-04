import React from 'react';

let BestTitle=()=>{
    let css1={
        textAlign:'center',
        marginBottom:'10px'
    }
    return(
        <div className="title1" style={css1}>
            <p style={{marginBottom:'5px',fontSize:"1.4rem", color:'#999'}}>너도 나도 사고 싶어지는 디자인</p>
            <h3 style={{padding:'0px 0 5px 0',fontSize:'2.8rem',fontWeight:"bold"}}>BEST</h3>
        </div>
    )
}

export default BestTitle;