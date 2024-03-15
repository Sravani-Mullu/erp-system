import { useEffect } from "react";


function Navbar(){
    useEffect(() => {
        // Enable tooltips on hover
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);
    return(
        <div className='bg-dark col-auto col-xl-2 min-vh-100 d-flex justify-content-between flex-column'>
          <div>
            <div className="text-center">
                <span className='fs-1 text-white d-none d-xl-inline'>Royal Collections</span>
            </div>
            <hr className='text-secondary d-none d-xl-block'/>
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="/" class='nav-link text-white fs-5' aria-current='page' data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard">
                  <i className='bi bi-speedometer2'></i>
                  <span className='ms-3 d-none d-xl-inline'>Dashboard</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="/products" class='nav-link text-white fs-5' aria-current='page' data-bs-toggle="tooltip" data-bs-placement="right" title="Products">
                  <i className='bi bi-grid'></i>
                  <span className='ms-3 d-none d-xl-inline'>Products</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="/orders" class='nav-link text-white fs-5' aria-current='page' data-bs-toggle="tooltip" data-bs-placement="right" title="Orders">
                  <i className='bi bi-table'></i>
                  <span className='ms-3 d-none d-xl-inline'>Orders</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="/ordercalender" class='nav-link text-white fs-5' aria-current='page' data-bs-toggle="tooltip" data-bs-placement="right" title="Order Calender">
                  <i class="bi bi-calendar-event"></i>
                  <span className='ms-3 d-none d-xl-inline'>Order Calender</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Navbar;