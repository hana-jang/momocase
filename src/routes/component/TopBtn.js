import { useEffect, useRef } from 'react';


function TopBtn(){
    let scrollevent=useRef();
    let scrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(()=>{
        let handleScroll=()=>{
            if(window.scrollY>100){
                scrollevent.current.style.opacity="1"
            } else {
                scrollevent.current.style.opacity="0"
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <>
            <button className="topbtn" onClick={scrollTop} ref={scrollevent} type="button">Top</button>
        </>
    )
}

export default TopBtn;