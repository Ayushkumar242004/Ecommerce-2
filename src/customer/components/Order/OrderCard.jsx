import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)}className='p-5 shadow-md hover:shadow-2x1 border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/l/1/xl-t68-grey-teemex-original-imahyvth6ytkx5fh.jpeg?q=70" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className=''>Men Slim mid Rise Black Jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>Size:m</p>
                    <p className=''>Color:Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>$1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div>
                
            <p>
                <AdjustIcon sx={{ width:'15px', height:'15px' }} className='text-green-600 mr-2 text-sm' />
                <span>
                    Delievered on March 03
                </span>
            </p>
            <p className='text-xs'>
                Your item has been delievered
            </p>
            </div> }

            {false && <p>
                <span>
                    Expected Delievery on Mar 03
                </span>
            </p>}

            
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
