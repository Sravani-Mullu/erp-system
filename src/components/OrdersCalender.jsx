import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function OrderCalendar() {
  //getting orders stored in local storage
  const storedOrders = JSON.parse(localStorage.getItem('orders'));
  //creating new object with ordernumber and deliverydate from ordersdata
  const deliveryDates = storedOrders.map(({ ordernumber, deliverydate }) => ({
    ordernumber,
    deliverydate
  }));
  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* side navbar */}
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
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-3 d-none d-sm-inline'>Order Calender</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* calender */}
        <div className='col-sm-10'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={deliveryDates.map(({ ordernumber, deliverydate }) => ({
              title: ordernumber,
              date: deliverydate
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderCalendar;
