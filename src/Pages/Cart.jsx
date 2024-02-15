import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { emptyCart, removeFromCart } from '../slices/slices/cartSlice';


function Cart() {

  const cartlistArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  console.log("cartlist array");
  console.log(cartlistArray);
  let totalPrice=0;
  if(cartlistArray.length>0){
    for(let i=0;i<cartlistArray.length;i++){
      totalPrice=totalPrice+cartlistArray[i].price;
    }
  }
  const handleCheckout=()=>{
    dispatch(emptyCart())
    alert("Your Order Succesfully placed")
    navigate('/home')
  }
  return (
    <>

      <div style={{ marginTop: "150px" }}>
      <Link to={'/home'} style={{textDecoration:"none",color:"blue"}} className='m-3'><i class="fa-solid fa-arrow-left m-3"></i>Back To Home</Link>
        <div className='row w-100 ms-5'>

          <div className='col-lg-6 col-md-6 ms-2'>

            <table className='table shadow border '>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartlistArray?.length > 0 ?
                    cartlistArray.map((item, index) => (


                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.thumbnail} alt="" style={{ width: '100px', height: '100px' }} /></td>
                        <td>{item.price}</td>
                        <td><Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>

                      </tr>
                    ))
                    :
                    <p>No Item Display </p>
                }

              </tbody>
            </table>
          </div>

          <div className='col-lg-5 col-md-5 m-2'>
            <div className='col-lg-10 col-md-10 d-flex justify-content-center align-items-center'>
                <div className='border shadow p-5'>
                    <h3 className='text-primary'>Cart Summary</h3>
                    <h6>Total Number Of Products:<span className='fw-bolder fs-4 text-warning'>{cartlistArray.length}</span></h6>
                    <h6>Total Price:<span className='fw-bolder fs-5 text-warning'>{totalPrice}</span></h6>
                <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>CheckOut</button>
                </div>

            </div>
          </div>
        </div>

      </div>
















    </>
  )
}

export default Cart;
