// Dashboard.js
import React from 'react';
import listOfProducts from '../Data/ProductsData.ts';
import { listOfOrders, generateRandomOrder } from '../Data/OrdersData.ts';
import SalesChart from './SalesChart.jsx'

function Dashboard() {

  // SET PRODUCTS DATA IN LOCALSTORAGE TO FETCH DYNAMICALLY
  const storedProducts = localStorage.getItem('products');
  if (!storedProducts) localStorage.setItem('products', JSON.stringify(listOfProducts));
  
  const totalProducts = JSON.parse(localStorage.getItem('products'));

  //static update messages
  const recentInventoryUpdates = [
    { id: 1, message: "New product added: Ralph Lauren Men's Classic Fit Mesh Polo Shirt" },
    { id: 2, message: "Inventory restocked: Levi's Men's 514 Straight Fit Jeans" },
    { id: 3, message: "Product discontinued: Tommy Hilfiger Women's Cotton Boyshorts (3-Pack)" },
  ];

  // SET ORDERS DATA IN LOCALSTORAGE TO FETCH DYNAMICALLY
  const additionalOrders = [];
  for (let i = 0; i < 30; i++) {
    additionalOrders.push(generateRandomOrder());
  }
  const updatedListOfOrders = [...listOfOrders, ...additionalOrders]
  if (!localStorage.getItem('orders'))
    localStorage.setItem('orders', JSON.stringify(updatedListOfOrders));

  // CALCULATE INVENTORY VALUE
  function calculateInventoryValue() {
    return JSON.parse(localStorage.getItem('products')).reduce((totalValue, product) => {
      // Calculate the value of each product (price * quantity) and add it to the total
      const productValue = product.price * product.quantity;
      return totalValue + productValue;
    }, 0);
  }

  // IDENTIFY TOP SELLING PRODUCT
  // Step 1: Count the total quantity sold for each product
  const productQuantitySold = {};
  JSON.parse(localStorage.getItem('orders')).forEach(order => {
    if (!productQuantitySold[order.ordereditem]) {
      productQuantitySold[order.ordereditem] = order.quantity;
    } else {
      productQuantitySold[order.ordereditem] += order.quantity;
    } 
  });

  // Step 2: Sort the products based on the total quantity sold
  const sortedProducts = Object.keys(productQuantitySold).sort((a, b) => {
   return productQuantitySold[b] - productQuantitySold[a];
  });

  const topSellingProduct = sortedProducts[0];

  return (
    <div className="container-fluid">
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
                  <i class="bi bi-calendar-event"></i>
                  <span className='ms-3 d-none d-sm-inline'>Order Calender</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-sm-10'>
          {/* body */}
          <div className="container mt-4">
            <div className="row">
              {/* Header */}
              <div className="col-12">
                <div className="card bg-secondary">
                  <div className="card-body">
                    <h5 className="card-title text-white fs-2">Dashboard</h5>
                    <p className="card-text text-white">Welcome to the Royal Collections Dashboard.</p>
                  </div>
                </div>
              </div>
              {/* Inventory status */}
              <div className='col-lg-3'>
                <div className="card mt-4 text-white bg-success">
                  <div className="card-body">
                    <h5 className="card-title">{totalProducts.length }</h5>
                    <p className="card-text">Total Products</p>
                    <i class="bi bi-boxes h1"></i>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="card mt-4 bg-info">
                  <div className="card-body">
                    <h5 className="card-title">{ JSON.parse(localStorage.getItem('orders')).length}</h5>
                    <p className="card-text">Total Orders</p>
                    <i class="bi bi-cart-check-fill h1"></i>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="card mt-4 bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">{calculateInventoryValue().toFixed(2) }</h5>
                    <p className="card-text">Inventory Value</p>
                    <i class="bi bi-currency-dollar h1"></i>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="card mt-4 text-white bg-primary">
                  <div className="card-body">
                    <h5 className="card-title">{topSellingProduct.split(' ')[0]}</h5>
                    <p className="card-text">Top Selling Products</p>
                    <i class="bi bi-suit-heart-fill h1"></i>
                  </div>
                </div>
              </div>
              {/* sales chart */}
              <div className="col-lg-6 mx-auto">
                <div className="card mt-4 border-info">
                  <div className="card-body">
                    <h5 className="card-title">Sales Chart</h5>
                    <p className="card-text">This is a sales chart showing the monthly sales data for last 4 months.</p>
                    {<SalesChart orders={JSON.parse(localStorage.getItem('orders'))}/>}
                  </div>
                </div>
              </div>
              {/* Inventory Updates */}
              <div className="col-12">
                <div className="card mt-4 border-success">
                  <div className="card-body text-success">
                    <h5 className="card-title">Recent Inventory Updates</h5>
                    <ul className="list-group list-group-flush">
                      {recentInventoryUpdates.map((update, index) => (
                        <li key={index} className="list-group-item text-secondary">{update.message}</li>
                      ))}
                    </ul>
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

export default Dashboard;
