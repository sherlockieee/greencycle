import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderHistory } from "../actions/orderActions";
import MessageBox from "../components/MessageBox";
import LoadingScreen from "./LoadingScreen";
import "./OrderHistoryScreen.css";

function OrderHistoryScreen(props) {
  const orderHistory = useSelector((state) => state.orderHistory);
  const { isLoading, error, orders } = orderHistory;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderHistory());
  }, [dispatch]);
  return (
    <div className="orderHistory">
      <h1>Order History</h1>
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <MessageBox variant="danger" message={error} />
      ) : (
        <table className="orderHistory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</td>
                  <td>
                    {order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : "No"}
                  </td>
                  <td>
                    <button
                      className="btn btn--secondary btn--small"
                      onClick={() => {
                        props.history.push(`/order/${order._id}`);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistoryScreen;
