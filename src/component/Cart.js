/* eslint-disable */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { addItem } from './../store.js';
import { useDispatch } from 'react-redux';

let PinkBtn = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => (props.color == 'pink' ? 'white' : 'black')};
  padding: 10px;
`;

const Cart = (props) => {
  //로딩시 애니메이션
  let [fade2, setFade2] = useState('');
  useEffect(() => {
    setFade2('end');
    return () => {
      setFade2('');
    };
  }, []);

  let dispatch = useDispatch();
  //tab
  let [tab, setTab] = useState(0);
  //hook 사용 : user가 파라미터에 입력한 값 가져올 수 있음
  let { id } = useParams();
  //정렬해도 고유id로 찾은 상품으로
  let findItem = props.shoes.find((x) => x.id == id);
  let [count, setCount] = useState(0);

  let [time, setTime] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let [check, setCheck] = useState('');

  useEffect(() => {
    if (isNaN(check) == true) {
      alert('dont');
    }
  }, [check]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        btn
      </button>
      <div className={`container start ${fade2}`}>
        {time == true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}
        <PinkBtn color="pink">버튼</PinkBtn>
        <PinkBtn color="yellow">버튼</PinkBtn>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <input
              onChange={(e) => {
                setCheck(e.target.value);
              }}
            ></input>
            <h4 className="pt-5">{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}원</p>
            <button className="btn btn-danger" onClick={()=> {
              dispatch(addItem({id: 1, name: 'Grey Yordan', count: 1 }))
            }}>주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => setTab(0)} eventKey="link0">
              제목이 엄청 긴 버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTab(1)} eventKey="link1">
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTab(2)} eventKey="link2">
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabComponent tab={tab} shoes={props.shoes} />
      </div>
    </>
  );
};

function TabComponent({ tab, shoes }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    let clear = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(clear);
      setFade('');
    };
  }, [tab]);

  if (tab == 0) {
    return <div className={`start ${fade}`}>{shoes[0].title}내용0</div>;
  } else if (tab == 1) {
    return <div className={`start ${fade}`}>내용1</div>;
  } else if (tab == 2) {
    return <div className={`start ${fade}`}>내용2</div>;
  }
}

export default Cart;
