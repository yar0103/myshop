/* eslint-disable */
import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import Cart from './component/Cart.js';
import Sample from './component/Sample.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('./cart');
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('./event');
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('./sample');
              }}
            >
              Sample
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {shoes.map((item, i) => {
                    return <Card shoes={shoes[i]} i={i} key={i} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {
                      console.log(result.data);
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    });
                  axios
                    .get('https://codingapple1.github.io/shop/data3.json')
                    .then((result) => {
                      console.log(result.data);
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />

        {/* url 파라미터 문법 */}
        <Route path="/cart:id" element={<Cart shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 드림</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/sample" element={<Sample />} />
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </div>
  );
}

const Event = () => {
  return (
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
};
export default App;
