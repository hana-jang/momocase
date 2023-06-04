import './App.css';
import './Common.scss';
import './main.scss';

import data from './data/best.js'
import design from './data/design';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import Home from './routes/Home';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import Header from './routes/component/Header';
import Footer from './routes/component/Footer';
import Login from './routes/Login'
import TopBtn from './routes/component/TopBtn';

// {process.env.PUBLIC_URL + "/img/search.png"}
// ,"homepage": "https://hana-jang.github.io/momocase/" -> packagejson에 붙여넣기

function App() {
  let [bestphone,setBestphone]=useState(data);
  let [res, setRes]=useState([0,1,2,3,4,5,6,7,8,9,10,11,12]);
  let [design1]=useState(design);
  let a=useSelector((state)=>{return state});


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home bestphone={bestphone} setBestphone={setBestphone} res={res} setRes={setRes} />} />
        <Route path="/detail/:id" element={<Detail bestphone={bestphone} design1={design1} />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/*" element={<div>없는 페이지</div>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <TopBtn/>
      <Footer />
    </>
  );
}



export default App;
