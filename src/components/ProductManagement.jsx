import React, {useState, useEffect} from 'react';
import  listOfProducts from '../Data/ProductsData.ts';
import ProductAuth from './ProductAuth';
import Navbar from './Navbar';

function ProductManagement() {
  // getting products localstorage and listOfProducts object
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : listOfProducts;
  });

  // editingId used for opening and closing edit input text boxes
  const [editingId, setEditingId] = useState(null); 

  // editedValues for storing edited values
  const [editedValues, setEditedValues] = useState({});

  // newProduct to store newly added product
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    quantity: ''
  });

  // showAddProductForm for opening and closing Add Product form
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  // errors to validate the inputs of Add Product form
  const [errors, setError] = useState('')

  // editerrors to validate inputs of Edit form
  const [editerrors, setEditError] = useState('')

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // function called when Edit button clicked
  const handleEdit = (productId) => {
    setEditingId(productId); 
    const productToEdit = products.find(product => product.id === productId);
    setEditedValues({ ...productToEdit });  
  };

  // function called when there is any change in input feild
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingId) {
      setEditedValues({ ...editedValues, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // function called when click on save button of edit form
  const saveEditedProduct = (event) => {
    event.preventDefault();
    setEditError(ProductAuth(editedValues))
    if(editerrors.id === "" && editerrors.name === "" && editerrors.price === "" && editerrors.quantity === ""){ 
      const updatedProducts = products.map(product => {
        if (product.id === editedValues.id) {
          return editedValues;
        }
        return product;
      });
    setProducts(updatedProducts);
    setEditingId(null);
    setEditError('');
    }
  };

  // function to delete product
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  // function to Add Product 
  const handleAddProduct = (event) => {
    event.preventDefault();
    setError(ProductAuth(newProduct));
    if(errors.id === "" && errors.name === "" && errors.price === "" && errors.quantity === ""){
      setProducts([...products, newProduct]);
      setNewProduct({
        id: '',
        name: '',
        price: '',
        quantity: ''
      });
      setShowAddProductForm(false);
      setError('');
    }
    else{
      setShowAddProductForm(true);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* Side navbar */}
        <Navbar/>
        {/* body */}
        <div className='col-10'>
          <div className="container mt-4">
            <div className="row">
              {/* Header */}
              <div className="col-12">
                <div className="card mb-4 bg-secondary">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <h3 className="card-title text-white fs-2">Product Management</h3>
                    <button className="btn btn-light" onClick={() => setShowAddProductForm(true)}>Add Product</button>
                  </div>
                </div>
              </div>
              {showAddProductForm && (<div className="col-12 addProductForm">
              {/* Add Product Form */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Add Product</h4>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="productId" className="form-label">ID</label>
                        <input type="text" className="form-control" id="productId" name="id" value={newProduct.id} onChange={handleInputChange} />
                        {errors.id && <span className='text-danger'>{errors.id}</span>}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="productName" name="name" value={newProduct.name} onChange={handleInputChange} />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Price</label>
                        <input type="text" className="form-control" id="productPrice" name="price" value={newProduct.price} onChange={handleInputChange} />
                        {errors.price && <span className='text-danger'>{errors.price}</span>}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productQuantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="productQuantity" name="quantity" value={newProduct.quantity} onChange={handleInputChange} />
                        {errors.quantity && <span className='text-danger'>{errors.quantity}</span>}
                      </div>
                      <button type="button" className="btn btn-secondary" onClick={handleAddProduct}>Add Product</button>

                      <button type="button" className='btn btn-secondary ms-4' onClick={() => setShowAddProductForm(false)}>Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              )}
              {/* Products table */}
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Product List</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Actions</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{editingId === product.id ? <div><input type="text" name="name" value={editedValues.name} onChange={handleInputChange} /><br/> {editerrors.name && <span className='text-danger'>{editerrors.name}</span>}</div> : product.name}</td>
                            <td>{editingId === product.id ? <div><input type="text" name="price" value={editedValues.price} onChange={handleInputChange} /><br/> {editerrors.price && <span className='text-danger'>{editerrors.price}</span>}</div>: '$'+product.price}</td>
                            <td>{editingId === product.id ? <div><input type="text" name="quantity" value={editedValues.quantity} onChange={handleInputChange} /><br/> {editerrors.quantity && <span className='text-danger'>{editerrors.quantity}</span>}</div> : product.quantity}</td>
                            <td>{/* edit button */}
                              {editingId === product.id ? (
                                <button className="btn btn-outline-success me-2" onClick={saveEditedProduct}>Save</button>
                              ) : (
                                <button className="btn btn-outline-secondary me-2" onClick={() => handleEdit(product.id)}>Edit</button>
                              )}
                            </td>
                            <td>
                              {/* delete button */}
                              <button className="btn btn-outline-danger" onClick={() => handleDelete(product.id)}><i class="bi bi-trash-fill"></i></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
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

export default ProductManagement;
