import React, {useState, useEffect} from 'react';
import { listOfOrders } from '../Data/OrdersData.ts';

function OrdersManagement() {

  // to store only selected order details when View Details button clicked
  const [selectedOrder, setSelectedOrder] = useState({
    id: 0,
    ordernumber: "",
    customername: "",
    orderdate: '',
    status: "",
    amount: 0,
    ordereditem: "",
    quantity: 0,
    shippingaddress: "",
    shippingmethod: "",
    deliverydate: "",
  }
  );

  // to store orders from localstorage and listOfOrders object
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : listOfOrders;
  });

  // editingId used for opening and closing edit input text boxes
  const [orderEditingId, setOrderEditingId] = useState(null);

  // editedValues for storing edited values
  const [orderEditedValues, setOrderEditedValues] = useState({});

  // to store edited order
  const [newOrder, setNewOrder] = useState({
    id: '',
    ordernumber: '',
    customername: '',
    orderdate: '',
    status: '',
    amount: '',
    ordereditem: '',
    quantity: '',
    shippingaddress: '',
    shippingmethod: '',
    deliverydate: '',
  });

  // to edit order with given orderId
  const handleEdit = (orderId) => {
    setOrderEditingId(orderId); 
    const orderToEdit = orders.find(order => order.id === orderId);
    setOrderEditedValues({ ...orderToEdit });
  };

  // function called when there is any change in input feilds
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (orderEditingId) {
      setOrderEditedValues({ ...orderEditedValues, [name]: value });
    } else {
      setNewOrder({ ...newOrder, [name]: value });
    }
  };

  // function called to save edited values when save button of Edit form clicked
  const saveEditedOrder = () => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderEditedValues.id) {
        return orderEditedValues;
      }
      return order;
    });
    setOrders(updatedOrders);
    setOrderEditingId(null); 
  };

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // to view the details of particular order
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/*side navbar */}
        <div className='bg-dark col-auto col-sm-2 min-vh-100 d-flex justify-content-between flex-column'>
          <div>
            <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'>
              <span className='ms-1 fs-1 d-none d-sm-inline'>Royal</span>
            </a>
            <hr className='text-secondary d-none d-sm-block'/>
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="/" class='nav-link text-white fs-5' aria-current='page'>
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="/products" class='nav-link text-white fs-5' aria-current='page'>
                  <i className='bi bi-grid'></i>
                  <span className='ms-3 d-none d-sm-inline'>Products</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="/orders" class='nav-link text-white fs-5' aria-current='page'>
                  <i className='bi bi-table'></i>
                  <span className='ms-3 d-none d-sm-inline'>Orders</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="/ordercalender" class='nav-link text-white fs-5' aria-current='page'>
                  <i class="bi bi-calendar-event"></i>
                  <span className='ms-3 d-none d-sm-inline'>Order Calender</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* body */}
        <div className='col-sm-10'>
          <div className="container mt-4">
            <div className="row">
              {/* Orders table */}
              <div className="col-12 mb-4">
                <div className="card bg-secondary">
                  <div className="card-body">
                    <h5 className="card-title text-white fs-2">Orders Management</h5>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">Order List</h6>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order Number</th>
                          <th>Customer Name</th>
                          <th>Order Date</th>
                          <th>Status</th>
                          <th>Total Amount</th>
                          <th>Actions</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td>{order.ordernumber}</td>
                            <td>{order.customername}</td>
                            <td>{order.orderdate}</td>
                            <td>{orderEditingId === order.id ? 
                              <select name="status" value={orderEditedValues.status} onChange={handleInputChange}>
                                <option>Pending</option>
                                <option>Shipped</option>
                                <option>Delivered</option>
                              </select>
                              : order.status}</td>
                            <td>{'$'+(order.amount * order.quantity)}</td> {/* total amount = amount * quantity */}
                            <td>{/* View details button */}
                              <button
                                type="button"
                                className="btn btn-outline-success me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#details"
                                onClick={() => handleViewDetails(order)}
                              >
                                View Details
                              </button>
                            </td>
                            <td>{/* edit details button */}
                            {orderEditingId === order.id ? (
                                <button className="btn btn-outline-success me-2" onClick={saveEditedOrder}>Update</button>
                              ) : (
                                <button className="btn btn-outline-secondary me-2" onClick={() => handleEdit(order.id)}>Update Status</button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      {/* View Details Window appears when View details button clicked */}
                      <div class="modal fade" id="details" tabindex="-1" aria-labelledby="detailsLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="detailsLabel">Order Details</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <p>Order Number: {selectedOrder.ordernumber}</p>
                              <p>Customer: {selectedOrder.customername}</p>
                              <p>Item Ordered: {selectedOrder.ordereditem}</p>
                              <p>Order Date: {selectedOrder.orderdate}</p>
                              <p>Shipping Address: {selectedOrder.shippingaddress}</p>
                              <p>Shipping Method: {selectedOrder.shippingmethod}</p>
                              <p>Expected Delivery: {selectedOrder.deliverydate}</p>
                              <p>Order Status: {selectedOrder.status}</p>
                              <p>Amount: {'$'+selectedOrder.amount}</p>
                              <p>Quantity: {selectedOrder.quantity}</p>
                              <p>Total Amount: {'$'+(selectedOrder.amount * selectedOrder.quantity)}</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersManagement;
