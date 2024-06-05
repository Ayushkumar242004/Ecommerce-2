import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button,Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { store } from '../../../State/store'
const Cart = () => {
    const navigate=useNavigate();
    const {cart}=useSelector(store=>store)
    const dispatch=useDispatch()
    const handleCheckOut=()=>{
        navigate("/checkout?step=2")
    }
    // cart.cart?.cartItems
    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])
  return (
    <div>

        <div className="lg:grid grid-cols-3 lg:px-16 relative">
            <div className="col-span-2">
                {[1,1,1,1].map((item)=><CartItem />)}
            </div>
        
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                <div className="border">
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <hr />
                    {/* {cart.cart?.totalPrice} */}
                    <div className="space-y-3 font-semibold">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            <span>₹1234</span>
                        </div>
                        {/* {cart.cart?.discount} */}
                        <div className="flex justify-between pt-3 ">
                            <span>Discount</span>
                            <span className='text-green-600'>-₹299</span>
                        </div>
                        <div className="flex justify-between pt-3 text-black">
                            <span>Delievery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className="flex justify-between pt-3 text-black">
                            <span>Total Amount</span>
                            <span>₹3999</span>
                        </div>
                    </div>
                    <Button onClick={handleCheckOut} variant="contained" className='w-full mt-5' sx={{px:"2.5 rem", py:"7 rem", bgColor:'#9155fd'}}>
                    Checkout
                </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
