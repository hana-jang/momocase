import { Nav, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Product(props) {
  let navigate = useNavigate();

  return (
    <Col sm={4} md={3} style={{fontFamily: 'SpoqaHanSansNeo-Regular'}}>
      <Nav.Link onClick={() => { navigate('/detail/' + props.res[props.i])}} className='c1'>
        <img src={process.env.PUBLIC_URL+"/"+props.bestphone.imgUrl} width="100%" alt="best" />
        <h6 style={{margin: '10px 0', fontSize: '1.5rem', color: "#555", fontWeight:"bold" }}>{props.bestphone.title}</h6>
        <p style={{ fontSize: '1.35rem', textDecoration: 'line-through', color: "#888" }}>{props.bestphone.price}</p>
        <p style={{ marginBottom: '10px', fontSize: '1.35rem', fontWeight: 'bold', color: '#f57c00' }}>{props.bestphone.percent}</p>
        <p><b style={{ fontSize: '1.5rem', color: '#555' }}>{props.bestphone.discount.toLocaleString()}원</b></p>
      </Nav.Link>
    </Col>
  )
}

export default Product;


// fontFamily: 'LINESeedKR-Bd'
// fontFamily: 'SpoqaHanSansNeo-Regular'