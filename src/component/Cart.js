/* eslint-disable */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let PinkBtn = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => (props.color == 'pink' ? 'white' : 'black')};
  padding: 10px;
`;

const Cart = (props) => {
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
      <div className="container">
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
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
