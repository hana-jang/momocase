import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <img src={process.env.PUBLIC_URL + "/img/logo1.png"} alt="logo"/>
                        <ul>
                            <li><a href="#none">이용약관</a> &nbsp;&nbsp;| </li>
                            <li><a href="#none">개인정보 취급방침</a>&nbsp;&nbsp; | </li>
                            <li><a href="#none">이용안내</a></li>
                        </ul>
                        <ul>
                            <li>상호명 : 주식회사 이노코믹스&nbsp;&nbsp; | </li>
                            <li>대표 : 홍승범</li>
                        </ul>
                        <ul>
                            <li>사업자등록번호 : 784-88-01575</li>
                        </ul>
                        <ul>
                            <li>통신판매업신고 : 2020-대구수성구-0585</li>
                        </ul>
                        <ul>
                            <li>주소 : 대구광역시 수성구 지산동 11-83-1 백구빌딩 5층 이노코믹스</li>
                        </ul>
                    </Col>
                    
                    <Col lg={3} md={4} className="customer">
                        <h3>고객센터</h3>
                        <ul>
                            <li>010-8556-8284</li>
                            <li>업무 시간 : 월-금 AM 10:00 - PM 5:00</li>
                            <li>휴무 : 주말 및 국가공휴일 OFF</li>
                            <li>계좌번호 : 국민은행 67630104266457</li>
                            <li>예금주 : 주식회사 이노코믹스</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={2} className="community">
                        <h3>커뮤니티</h3>
                        <ul>
                            <li><a href="#none">공지사항</a></li>
                            <li><a href="#none">마이페이지</a></li>
                            <li><a href="#none">문의게시판</a></li>
                            <li><a href="#none">FAQ</a></li>
                        </ul>
                        <ul>
                            <li><a href="#none">회원가입</a></li>
                            <li><a href="#none">로그인</a></li>
                            <li><a href="#none">마이페이지</a></li>
                            <li><a href="#none">주문조회</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr/>
                        <p>Copyright © 주식회사 이노코믹스.All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;