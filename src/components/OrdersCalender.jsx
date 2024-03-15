import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Navbar from './Navbar';

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
        <Navbar/>
        {/* calender */}
        <div className='col-10'>
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
