function ProductAuth(values) {
    let error = {}
  
    if (!values.id) {
        error.id = "Id should not be empty";
    } else {
        error.id= "";
    }
  
    if (!values.name) {
        error.name = "Name should not be empty";
    } else {
        error.name="";
    }
  
    if (!values.price) {
        error.price = "Price should not be empty";
    } else if(isNaN(values.price)) {
        error.price = "Price should be in Number format";
    } else {
        error.price = "";
    }
  
    if (!values.quantity) {
        error.quantity = "quantity should not be empty";
    }else if(isNaN(values.quantity)) {
        error.quantity = "quantity should be in number";
    }else {
        error.quantity = "";
    }
    return error;
  }
  
  export default ProductAuth;  