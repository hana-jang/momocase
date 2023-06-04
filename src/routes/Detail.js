import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Tab, Tabs, ButtonGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { addItem } from './../store.js'
import { useDispatch } from 'react-redux'

function Detail(props) {
    let { id } =useParams();
    let selproduct=props.bestphone.find((x)=>x.id==id);
    let dispatch=useDispatch();
    let navigate=useNavigate();
    let [fade, setFade]=useState('');

    useEffect(() => {
        setTimeout(() => { setFade('end') }, 50)
        return () => {
            setFade('');
        }
    }, [props.tab])

    
    return (
        <>
            <Container className={"detailpage "+'start '+fade}>
                <Row className="detailpage1">
                    <Col md={6} xs={12}>
                        <img src={process.env.PUBLIC_URL+'/img/best' + (Number(id)+1)+'.jpg'} alt="best" style={{ width: '100%' }} />
                    </Col>
                    <Col md={6} xs={12}>
                        <h2>{selproduct.title}</h2>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <th>정가</th>
                                    <td>{selproduct.price}</td>
                                </tr>
                                <tr>
                                    <th>할인율</th>
                                    <td>{selproduct.percent}</td>
                                </tr>
                                <tr>
                                    <th>금액</th>
                                    <td>{selproduct.discount.toLocaleString()}원</td>
                                </tr>
                                <tr>
                                    <th>배송비</th>
                                    <td>3,000원(20,000원 이상 구매 시 무료)</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Form.Group className="mb-3" >
                            <Form.Label>기종</Form.Label>
                            <Form.Select style={{fontSize:'1.6rem'}} onChange={(e)=>{
                                selproduct.option=e.target.value
                                // console.log(selproduct)
                            }}>
                                <option>[필수] 옵션을 선택해주세요</option>
                                <option disabled>-------------------</option>
                                {
                                    props.design1.iphone.map((option,i)=>{
                                        return(
                                            <option key={i} value={option} i={i}>{props.design1.iphone[i]}</option>
                                        )
                                    })
                                }
                                <option disabled></option>
                                <option disabled>----------갤럭시기종-----------</option>
                                {
                                    props.design1.galaxy.map((option,i)=>{
                                        return(
                                            <option key={i} value={option} i={i}>{props.design1.galaxy[i]}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <hr/>
                        <div className="detailbtnbox">
                            <Button variant="dark" onClick={()=>{
                                alert("로그인 후 구매 가능합니다");
                                navigate('/login')
                            }}>구매하러 가기</Button>
                            <Button variant="light" onClick={()=>{
                                dispatch(addItem({id:selproduct.id, name:selproduct.title, img:selproduct.imgUrl, price:selproduct.discount, count:1, design:selproduct.option})); navigate('/cart')
                            }}>장바구니 담기</Button>
                        </div>
                        <Row className="another">
                            <Col md={4} xs={4}>
                                <a href="#none">
                                    <img src={process.env.PUBLIC_URL + selproduct.imgUrl1} alt="detail" />
                                </a>
                                <h4>{selproduct.title1}</h4>
                                <p>{selproduct.price1.toLocaleString()}원</p>
                            </Col>
                            <Col md={4} xs={4}>
                                <a href="#none">
                                    <img src={process.env.PUBLIC_URL+selproduct.imgUrl2} alt="detail"/>
                                </a>    
                                <h4>{selproduct.title2}</h4>
                                <p>{selproduct.price2.toLocaleString()}원</p>
                            </Col>
                            <Col md={4} xs={4}>
                                <a href="#none">
                                    <img src={process.env.PUBLIC_URL+selproduct.imgUrl3} alt="detail"/>
                                </a>
                                <h4>{selproduct.title3}</h4>
                                <p>{selproduct.price3.toLocaleString()}원</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="detailpage2">
                    <Tabs
                        defaultActiveKey="imformation"
                        id="uncontrolled-tab-example"
                        className="mb-3">
                        <Tab eventKey="imformation" title="상품정보">
                            <img src={process.env.PUBLIC_URL+'/img/best' + (Number(id) + 1) + '-1.jpg'} alt="best" style={{ width: '100%', paddingTop:'30px' }} />
                        </Tab>
                        <Tab eventKey="important" title="구매 전 필독">
                            <h1>상품 구매 안내</h1>
                            <div className="money">
                                <h3>상품결제정보</h3>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>결제안내</th>
                                            <td>
                                                <ul>
                                                    <li>- 무통장 입금 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.</li>
                                                    <li>- 주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 주문자명과 입금자명이 다르거나 입금금액이 다를경우 발송이 지연되니, 문의게시판이나 카카오톡 플친 모모케이스로 연락주세요.</li>
                                                    <li>- 3일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="delivery">
                                <h3>배송정보</h3>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>배송방법</th>
                                            <td>택배</td>
                                        </tr>
                                        <tr>
                                            <th>배송지역</th>
                                            <td>전국지역</td>
                                        </tr>
                                        <tr>
                                            <th>배송비용</th>
                                            <td>3,000</td>
                                        </tr>
                                        <tr>
                                            <th>배송 기간</th>
                                            <td>2일 ~ 7일</td>
                                        </tr>
                                        <tr>
                                            <th>배송 안내</th>
                                            <td>
                                                <ul>
                                                    <li>- 저희 모모케이스에서는 주문건을 확인 후, 자체제작을 하여 송장번호 입력일 기준으로 2~4일내 출고로 진행하고 있습니다</li>
                                                    <li>- 제주도 및 도서산간 지역은 기본배송료 외 추가 운임료가 발생할 수 있습니다.<br/>추가 금액은 별도로 공지드리고있으니 이점 참고하여주세요</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="change">
                                <h3>교환/반품안내</h3>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <th>배송정보</th>
                                            <td>
                                                <ul>
                                                    <span>교환 및 반품이 가능한 경우</span>
                                                    <li>* 구입한 상품에 이상이 있는 경우 교환 및 환불이 가능합니다</li>
                                                    <li>* 롯데택배 이외의 택배사 이용 및 요금 선불 지급으로 인해 발생된 추가 요금은 고객님께서 부담하셔야 됩니다.</li>
                                                    <li>* 수령후 7일이내에 반품/교환 의사를 게시판 혹은 카카오플친으로 통보해주셔야 합니다.</li>
                                                    <li>* 교환 및 반품의사를 통보하지않고 보낸경우 반송처리 되는 점 확인부탁드립니다.</li>
                                                    <li>* 수취인과의 전화 연결이 되지 않거나 주소오기입으로 인해 반송되는 경우의 모든 책임과 반송료는 고객님께서 부담하셔야 합니다.</li>
                                                </ul>
                                                <ul>
                                                    <span>교환 및 반품이 불가능한 경우</span>
                                                    <li>* 교환 및 반품의사를 통보하지 않은 경우</li>
                                                    <li>* 착용으로 인하여 제품에 오염이 발생하였거나 포장이 훼손되어 상품가치가 상실된 경우</li>
                                                    <li>* 반품/교환/환불 신청은 상품수령후 7일이내에 게시판 혹은 카카오플친 모모케이스로 신청부탁드립니다.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="review" title="리뷰">
                            <div className="review">
                                <h1>상품 리뷰</h1>
                                <Container>
                                    <Row className="graphbox">
                                        <Col lg={3} md={3}>
                                            <p>상품만족도</p>
                                            <p><span>★</span> <b>5.0</b> / 5.0</p>
                                            <p><span>5 </span>개의 리뷰가 있습니다</p>
                                            <button onClick={()=>{alert("로그인 후 작성가능합니다."); navigate('/login');}}>리뷰 작성하기</button>
                                        </Col>
                                        <Col lg={3} md={3} id="bordereffect">
                                            <div className="allgraph">
                                                <div className="graygraph">
                                                    <div className="bkgraph"></div>
                                                </div>
                                                <span>5점</span>
                                                <span>100%</span>
                                            </div>
                                            <div className="allgraph">
                                                <div className="graygraph"></div>
                                                <span>4점</span>
                                                <span>0%</span>
                                            </div>
                                            <div className="allgraph">
                                                <div className="graygraph"></div>
                                                <span>3점</span>
                                                <span>0%</span>
                                            </div>
                                            <div className="allgraph">
                                                <div className="graygraph"></div>
                                                <span>2점</span>
                                                <span>0%</span>
                                            </div>
                                            <div className="allgraph">
                                                <div className="graygraph"></div>
                                                <span>1점</span>
                                                <span>0%</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="writereviewbox">
                                        <Col md={2} sm={3} xs={4}className="writereview_left">
                                            <p>★★★★★</p>
                                            <p>NAME : ***</p>
                                            <p>2023-03-09</p>
                                        </Col>
                                        <Col md={10} sm={9} xs={8}>
                                            <p>이뻐요 마음에듭니다!</p>
                                        </Col>
                                    </Row>
                                    <Row className="writereviewbox">
                                        <Col md={2}  sm={3} xs={4}className="writereview_left">
                                            <p>★★★★★</p>
                                            <p>NAME : ***</p>
                                            <p>2023-03-09</p>
                                        </Col>
                                        <Col md={10} sm={9} xs={8}>
                                            <p>굿!!! 너무 좋아요 ㅠ 내돈내산 만족!</p>
                                        </Col>
                                    </Row>
                                    <Row className="writereviewbox">
                                        <Col md={2}  sm={3} xs={4}className="writereview_left">
                                            <p>★★★★★</p>
                                            <p>NAME : ***</p>
                                            <p>2023-03-08</p>
                                        </Col>
                                        <Col md={10} sm={9} xs={8}>
                                            <p>배송 되게 빨랐어요 ~! 제품도 이쁘네요</p>
                                        </Col>
                                    </Row>
                                    <Row className="writereviewbox">
                                        <Col md={2}  sm={3} xs={4}className="writereview_left">
                                            <p>★★★★★</p>
                                            <p>NAME : ***</p>
                                            <p>2023-03-08</p>
                                        </Col>
                                        <Col md={10} sm={9} xs={8}>
                                            <p>너무 이뻐요!</p>
                                        </Col>
                                    </Row>
                                    <Row className="writereviewbox">
                                        <Col md={2}  sm={3} xs={4}className="writereview_left">
                                            <p>★★★★★</p>
                                            <p>NAME : ***</p>
                                            <p>2023-03-07</p>
                                        </Col>
                                        <Col md={10} sm={9} xs={8}>
                                            <p>톡이랑 같이 샀는데 너무 예뻐요!</p>
                                        </Col>
                                    </Row>
                                    <div className="btn-group-wrap">
                                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="secondary">&lt; </Button>
                                            <Button variant="secondary">1</Button>
                                            <Button variant="secondary">&gt;</Button>
                                        </ButtonGroup>
                                    </div>
                                </Container>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    )
}

export default Detail;
