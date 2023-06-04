import { useRef } from 'react';
import { Button, Form, Nav, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let id=useRef();
    let pw=useRef();

    function checkpw() {
        let idcheck = id.current.value;
        let email = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
        let pwcheck = pw.current.value;
        let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if (false === email.test(idcheck)) {
            alert("올바른 이메일을 입력해주세요");
            return false;
        } else {
            if (false === reg.test(pwcheck)) {
                alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
            } else if (/(\w)\1\1\1/.test(pwcheck)) {
                alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
                return false;
            } else if (pwcheck.search(idcheck) > -1) {
                alert("비밀번호에 아이디가 포함되었습니다.");
                return false;
            } else if (pwcheck.search(/\s/) != -1) {
                alert("비밀번호는 공백 없이 입력해주세요.");
                return false;
            } else {
                alert("로그인 성공");
                return true;
            }
        }
    }
    

    
    return (
        <>
            <Container id="login">
                <Row className="logintop">
                    <Nav.Link onClick={() => { navigate(-1) }}>&lt; &nbsp;뒤로가기</Nav.Link>
                    <h1>LOGIN</h1>
                </Row>
                <Row>
                    <Form className="loginwrap">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="id" ref={id} placeholder="아이디" style={{paddingLeft:'20px'}} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" ref={pw} placeholder="비밀번호" style={{paddingLeft:'20px'}}/>
                        </Form.Group>
                        <Button variant="link" type="submit" onClick={()=>{
                            checkpw()}}>로그인
                        </Button>
                        <ul>
                            <li><a href="#none">아이디 찾기</a></li>
                            <li><a href="#none">비밀번호 찾기</a></li>
                            <li><a href="#none">가입하기</a></li>
                        </ul>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Login;