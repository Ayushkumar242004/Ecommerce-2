import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import {IconButton} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
const CartItem = ({item}) => {

const dispatch=useDispatch();

const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num},cartItemId:item?.id};
    dispatch(updateCartItem(data));
}
    const handleRemoveCartItem=(item)=>{
       
        dispatch(removeCartItem(item.id))
    }
    // {item.product.imageUrl} 
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className="flex items-center">

            <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                <img className='w-full h-full object-cover object-top'src="https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/e/h/6/aqua-punch-zinc-copper-and-alkaline-kinsco-original-imagsyyb2yqrhnhf.jpeg?q=70"
                alt="" />
            </div>
            {/* {item.product.title} */}
            {/* {item.size} */}
            {/* {item.discountedPrice} */}
            {/* {item.discountPersent} */}
            <div className="ml-5 space-y-1">
                <p className='font-semibold'>Pureit Max Water </p>
                <p className='opacity-70'> Brown</p>
                <p className='opacity-70 mt-2'> Pureit</p>

                <div className="flex space-x-5 items-center text-gray-900 pt-6">
                    <p className="font-semibold">
                       ₹10,199
                        
                    </p>
                    <p className='opacity-50 line-through'>
                    ₹99
                    </p>
                    <p className='text-green-600 font-semibold '>10% Off</p>
                </div>
                {/* onClick={()=>handleUpdateCartItem(-1)}disabled={item.quantity<=1} */}
                {/* onClick={()=>handleUpdateCartItem(1)} sx={{color:"RGB(145 85 253)"}} */}
                <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        {/* {item.quantity} */}
                        <span className='py-1 px-7 border rounded-sm'>2</span>
                        <IconButton>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>
                    {/* onClick={handleRemoveCartItem} */}
                    <div>
                        <Button sx={{color:'RGB(145 85 253)'}}>remove</Button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CartItem
