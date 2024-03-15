# Enterprise Resource Planning System with React

This project is a simplified interface to manage basic business operations of a company. This includes
Dashboard - provides an overview of the resources and features.
Products Management  - Allows to manage products and perform some actions like add, edit, delete.
Orders Management - Allows to view the orders and update them.
Orders Calender - shows the orders and their expected delivery dates in a calendar. 

## Table of Contents
- [Installation](#Installation)
- [Functionalities](#Functionalities)

## Installation
### Prerequisites
- Node.js and npm should be installed. You can download them from [nodejs.org](https://nodejs.org) (20.11.1 LTS)
### Steps
 1. **Clone the repository:**
    ```bash
    git clone https://github.com/Sravani-Mullu/erp-system.git
    ```
   
3. **Navigate to the project directory:**
    ```bash
    cd erp-system 
    ```
    
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start the development server:**
   ```bash
   npm start
   ```
6. **Open the application in your browser:**
    Open http://localhost:3000 in your browser.
   
## Functionalities

### Dashboard
This is the dashboard of the project (first page appears while running the project).
- It shows the inventory status which includes Total Products, Total Orders, Total Inventory Vlaue, Top Selling Products.
- last 4 months Sales chart(derived from mock data, as the data was randomly generated, there will be no sales data after March, so the graph won't show anything after March).
- display Inventory update messages(static).
- Navbar to navigate to Products, Orders and Order calendar pages.
### Product Management
This is the products management page which provides actions to manage products such as add product, edit product, delete product.

**Add Product form:**

After clicking the Add Product button Add Product Form appears.

Form consists of Id, Name, Price, Quantity Text fields and two buttons Add Product and Cancel.

The "Add Product" button validates the input fields; if all validations are satisfied, it adds the data to local storage.

The “Cancel” button closes the Add Product Form.

JavaScript validations:
-	Id: gives error message if id field was empty.
-	Name: gives error message if name field was empty.
-	Price: gives error message if price was not a number or empty.
-	Quantity: gives error message if quantity was not a number or empty.

**Edit Product:**

When edit button clicked text fields will be appeared allow us to edit the fields.

The "Save" button validates the input fields; if all validations are satisfied, it updates the data in local storage.

Javascript validations are same as Add Product Form.

### Order Management 
This is the orders management page allows to view details and update the status of the order.

**View Details:**

When “View Details” button clicked full details of that particular order will appeared like above.

“Close” button closes the details page.

**Update Status:**

When “Update Status” button clicked select field appear in that particular status column. Only 3 options are provided they are Pending, Shipped, Delivered.

“Update” button updates the edited value in local storage.

### Order Calendar
Shows the orders and their delivery dates in a calendar.

### Responsive
Pages looks good in all screen sizes from desktop to mobile.
While hovering over the icons in the navbar, the page name will appear.





