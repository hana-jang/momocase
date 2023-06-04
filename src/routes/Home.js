import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Product from './component/Product';
import Slide from './component/Slide';
import BestTitle from './component/BestTitle';
import NewTitle from './component/NewTitle';
import new1 from '../data/new';
import axios from 'axios'


function Home(props) {
    let [count, setCount]=useState(1);
    let [newdata, setNewdata]=useState(new1);

    return (
        <>
            <Slide/>
            <BestTitle/>
            <div className="btnbox" id="bestproduct">
                <Button variant="link" onClick={()=>{
                    let copy=[...props.bestphone].sort((a,b)=>a.title>b.title?1:-1);
                    props.setBestphone(copy);

                    let res1=[];
                    for(let i in copy){
                        res1.push(copy[i].id)
                    }
                    props.setRes(res1);
                }}>이름순 정렬</Button>{' '}
                <Button variant="link" onClick={()=>{
                    let copy = [...props.bestphone].sort((a, b) => {
                        if (a.discount === b.discount) {
                            return a.title.localeCompare(b.title);
                        }
                        return a.discount - b.discount > b.discount - a.discount ? 1 : -1
                    });
                    props.setBestphone(copy);
                    
                    let res1=[];
                    for(let i in copy){
                        res1.push(copy[i].id)
                    }
                    
                    props.setRes(res1);
                }}>낮은 가격순</Button>{' '}
                <Button variant="link" onClick={()=>{
                    let copy = [...props.bestphone].sort((a, b) => {
                        if (a.discount === b.discount) {
                            return a.title.localeCompare(b.title);
                        }
                        return a.discount - b.discount < b.discount - a.discount ? 1 : -1
                    });
                    props.setBestphone(copy);

                    let res1=[];
                    for(let i in copy){
                        res1.push(copy[i].id)
                    }
                    props.setRes(res1);
                }}>높은 가격순</Button>{' '}
            </div>
            <Container style={{marginBottom:'100px'}}>
                <Row>
                    {
                        props.bestphone.map((v, i) => {
                            return (
                                <Product bestphone={props.bestphone[i]} key={i} i={i} res={props.res} setRes={props.setRes}/>
                            )
                        })
                    }
                </Row>
            </Container>
            <div className="imgbox">
                <img src={process.env.PUBLIC_URL + "/img/center.jpg"} alt="center"/>
            </div>
            <NewTitle/>
            <Container style={{marginBottom:'100px'}}>
                <Row>
                    {
                        newdata.map((v, i) => {
                            return (
                               <New newdata={newdata[i]} key={i}/>
                            )
                        })
                    }
                </Row>
                <div className="btnbox">
                    <Button variant="link" count={count} onClick={() => {
                        if (count === 1) {
                            axios.get("https://hana-jang.github.io/momocase/new1.json").then((result) => {
                                let copy = [...newdata, ...result.data];
                                setNewdata(copy);
                                setCount(2);
                            })
                        } else if (count === 2) {
                            axios.get("https://hana-jang.github.io/momocase/new2.json").then((result) => {
                                let copy = [...newdata, ...result.data];
                                setNewdata(copy);
                                setCount(3);
                            })
                        } else {
                            alert("더 이상 상품이 없습니다");
                        }
                    }}>4개 더 보기</Button>{' '}
                </div>
            </Container>
            
        </>
    )
}

function New(props){
    return(
        <Col sm={3} md={3} style={{fontFamily: 'LINESeedKR-Bd'}}>
            <img src={process.env.PUBLIC_URL+"/"+props.newdata.imgUrl} width="100%" alt="new" />
            <h6 style={{ margin: '10px 0', fontSize: '1.5rem', color: "#555" }}>{props.newdata.title}</h6>
            <p style={{ fontSize: '1.3rem', textDecoration: 'line-through', color: "#888" }}>{props.newdata.price}</p>
            <p style={{ marginBottom: '10px', fontSize: '1.3rem', fontWeight: 'bold', color: '#f57c00' }}>{props.newdata.percent}</p>
            <p><b style={{ fontSize: '1.5rem', color: '#555' }}>{props.newdata.discount}</b></p>
        </Col>
    )
}

export default Home;