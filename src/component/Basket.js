import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { countAdd } from './../store.js';

const Basket = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h2>{state.user.name}의 장바구니</h2>

      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.basketItem.map((val, i) => {
            return (
              <tr key={i}>
                <td>{state.basketItem[i].id}</td>
                <td>{state.basketItem[i].name}</td>
                <td>{state.basketItem[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(countAdd(state.basketItem[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Basket;
