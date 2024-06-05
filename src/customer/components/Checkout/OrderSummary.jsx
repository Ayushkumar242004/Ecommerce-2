import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { store } from '../../../State/store'

const OrderSummary = () => {
    const dispatch=useDispatch();
    const location=useLocation();
    const {order}=useSelector(store=>store);
    const searchParams=new URLSearchParams(location.search);
    const orderId=searchParams.get("order_id")

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
  return (
    <div>

{/* address={order.order?.shippingAddress}     */}
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard />
        </div>
        <div>

        <div className="lg:grid grid-cols-3  relative">
         <div className="col-span-2">
         {/* order.order?.orderItems */}
           {[1,1,1,1].map((item)=>{
            // item={item}
            <CartItem />
            })}
         </div>
        
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                <div className="border">
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <hr />
                    <div className="space-y-3 font-semibold">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            {/* {order.order?.totalPrice} */}
                            <span>₹4699</span>
                        </div>
                        <div className="flex justify-between pt-3 ">
                            <span>Discount</span>
                            {/* {order.order?.discount} */}
                            <span className='text-green-600'>-₹123</span>
                        </div>
                        <div className="flex justify-between pt-3 text-black">
                            <span>Delievery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className="flex justify-between pt-3 text-black">
                            <span>Total amount</span>
                            {/* {order.order?.totalDiscountedPrice} */}
                            <span>₹4820</span>
                        </div>
                    </div>
                    <Button variant="contained" className='w-full mt-5' sx={{px:"2.5 rem", py:"7 rem", bgColor:'#9155fd'}}>
                    Checkout
                </Button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OrderSummary
