import React from 'react';

let NewTitle=()=>{
    let css1={
        textAlign:'center',
        margin:'150px 0 25px'
    }
    return(
        <div className="title1" style={css1}>
            <p style={{marginBottom:'5px',fontSize:"1.4rem", color:'#999'}}>폰케이스는 모모케이스</p>
            <h3 style={{padding:'0px 0 5px 0',fontSize:'2.8rem',fontWeight:"bold"}}>New</h3>
        </div>
    )
}

export default NewTitle;