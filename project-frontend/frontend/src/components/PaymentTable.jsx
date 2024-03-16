import React, { useEffect, useState } from 'react';
import userService from '../services/registerForm';
import Table from 'react-bootstrap/Table';

const PaymentTable = () => {
  const [tableData, setTableData] = useState([]);
  //for timer
  const [countdown, setCountdown] = useState(5); // sets the default timer by 5 seconds

  useEffect(() => {
    
      const fetchData = async () => {
        try {
          //calling the server to fetch user transactions data
          const result = await userService.paymentTable();
          console.log(result);
          setTableData(result);
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      };
    //intial call by default
    fetchData();
    
    //for auto refreshment every 5 seconds
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if(prevCountdown === 1) {
          fetchData() // callig when timer comes to 1 sec left
          return 5
        } else {
          return prevCountdown -1 
        }
      })
    }, 1000 /* renew for every 1 seconds */)

    //clear interval
    return () => clearInterval(interval)
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h2>Your Orders</h2>

        {tableData.length === 0 ? (
          <>
            <p>No orders yet</p>
            <p>Refreshing into... {countdown}</p>
          </>
        ) : (
          <>
          <Table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Email</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(row => (
                <tr key={row.id}>
                  <td>{row.price}</td>
                  <td>{row.email}</td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Refreshing into... {countdown}</p>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentTable;
