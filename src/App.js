import React, { useState } from 'react';
import Api from './Api';

function App() {
  let [apiData, setApiData] = useState(Api);

  const Increment = (index) => {
    const newItems = [...apiData]; // Store API
    newItems[index].defaultQty++; // FIND API In  , Array of Index.defaultQty FIND  , AND UPDATE
    setApiData(newItems);
  };

  const Decrement = (index) => {
    const newItems = [...apiData];

    // IF Qty == 1 it will not Reduce Qty &
    //  Extea logic Tip : Database to fetch max Qty Available To Cart buy Leter if need
    if (newItems[index].defaultQty === 1) {
      return false;
    }

    newItems[index].defaultQty--;
    setApiData(newItems);
  };

  const lengthArray = apiData.length;

  return (
    <>
      <div className="container">
        <div className="row">
          <span>Total Item: </span>
          <span>{lengthArray}</span>

          <table className="table ">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {apiData.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>

                    <td>
                      <span
                        className="btn btn-sm btn-primary"
                        onClick={() => Decrement(index)}
                      >
                        -
                      </span>
                      <span> {item.defaultQty} </span>

                      <span
                        className="btn btn-sm btn-primary"
                        onClick={() => Increment(index)}
                      >
                        +
                      </span>
                    </td>
                    <td>{item.price * item.defaultQty} </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-dark text-white">
              <tr>
                <th>Total</th>
                <th></th>
                <th></th>
                <th>
                  {apiData.reduce(
                    (SumQty, index2) => (SumQty += index2.defaultQty),
                    0
                  )}
                </th>
                <th>
                  $
                  {apiData.reduce(
                    (sum, index2) => (sum += index2.defaultQty * index2.price),
                    0
                  )}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
