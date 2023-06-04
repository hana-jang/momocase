import { React, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { addCount, minusCount, sortName, deleteItem } from './../store.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cart() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let navigate=useNavigate();

    function totalprice(){
        let sum=0;
        for(let s in state.cart){
            sum+=state.cart[s].price*state.cart[s].count
        }
        return sum
    }

    let [deliverymoney, setDeliverymoney]=useState(3000);

    useEffect(()=>{
        let free=function(){
            if(totalprice()>=20000){
                setDeliverymoney(0);
            } else {
                setDeliverymoney(3000);
            }
        }
        free();
    },[state])
    
    function product(){
        let sum1=0;
        sum1=state.cart.length
        return sum1
    } product();


    return (
        <>
            <Container id="cart">
                <h1>장바구니</h1>
                <Row className="cart-body">
                    <div className="cart-top">
                        <hr />
                        <p>일반상품<span>({product()})</span></p>
                    </div>
                    <Row className="cart-main">
                        <Col className="cart-left" md={9}>
                            {
                                state.cart.map((v, i) =>
                                    <div className="row-wrap">
                                        <Row className="firstrow" key={i} i={i}>
                                            <Col xxl={2} xl={3} lg={3} md={4} sm={4} xs={4}>
                                                <input type="checkbox" className="choice" />
                                                <img src={state.cart[i].img} alt="cart-img" />
                                            </Col>
                                            <Col xxl={7} xl={6} lg={6} md={5} sm={6} xs={6}>
                                                <p className="name">{state.cart[i].name}</p>
                                                <p className="count">{(state.cart[i].price * state.cart[i].count).toLocaleString()}원</p>
                                                <p className="delivery">배송 : {deliverymoney.toLocaleString()} / 기본배송</p>
                                            </Col>
                                            <Col xxl={2} xl={2} lg={2} md={2}>
                                                <p>
                                                    {(state.cart[i].price * state.cart[i].count).toLocaleString()}원
                                                </p>
                                            </Col>
                                            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
                                                <Button variant="link" onClick={() => { dispatch(deleteItem(state.cart[i].id)) }}>X</Button>
                                            </Col>
                                        </Row>
                                        <Row className="secondrow">
                                            <Col xxl={2} xl={3} lg={3} md={4} sm={4} xs={4}></Col>
                                            <Col xxl={7} xl={6} lg={5} md={5} sm={6} xs={6}>
                                                <p>[옵션 : {state.cart[i].design}]</p>
                                                <div>
                                                    <button className="countbtn" onClick={() => { dispatch(minusCount(state.cart[i].id)) }}>-</button>
                                                    <input type="text" value={state.cart[i].count} />
                                                    <button className="countbtn" onClick={() => { dispatch(addCount(state.cart[i].id)) }}>+</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }
                            <button className="sortbtn" onClick={() => { dispatch(sortName(state.cart.id)) }}>이름순정렬</button>
                        </Col>
                        <Col className="cart-right" md={3}>
                            <Row>
                                <h2>주문상품</h2>
                            </Row>
                            <hr />
                            <Row>
                                <ul>
                                    <li>총 상품금액</li>
                                    <li>{totalprice().toLocaleString()}원</li>
                                </ul>
                            </Row>
                            <Row>
                                <ul>
                                    <li>총 배송비</li>
                                    <li>{deliverymoney.toLocaleString()}원</li>
                                </ul>
                            </Row>
                            <hr />
                            <Row>
                                <ul>
                                    <li>결제예정금액</li>
                                    <li>{(totalprice()+deliverymoney).toLocaleString()}<span> 원</span></li>
                                </ul>
                            </Row>
                            <Row>
                                <Button variant="link" onClick={()=>{alert("로그인 후 구매가능합니다."); navigate('/login')}}>전체 주문하기</Button>
                                <Button variant="link" onClick={()=>{alert("로그인 후 구매가능합니다."); navigate('/login')}}>상품 주문하기</Button>
                            </Row>
                        </Col>
                    </Row>
                </Row>                
            </Container>
        </>
    )
}

export default Cart;
