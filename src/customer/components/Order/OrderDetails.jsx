import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import{Grid, Box} from '@mui/material'
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delievery Address</h1>
            <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        
        <Grid className='space-y-5'>
            {[1,1,1,1,1].map((item)=>
                <Grid item container className='shadow-x1 rounded-md p-5 border' sx={{alignItems:'center',justifyContent:'space-between'}}>
                <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/l/1/xl-t68-grey-teemex-original-imahyvth6ytkx5fh.jpeg?q=70" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className='font-semibold'>Men Slim mid Rise Black Jeans</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:pink</span><span>Size:m</span></p>
                        <p className=''>Seller: linaria</p>
                        <p className=''>$1099</p>
                    </div>
                </div>
                </Grid>
            

            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:'2rem'}} className='px-2'/>
                    <span>Rate & Review Products</span>
                </Box>
            </Grid>
            </Grid> 
            )}
            
        </Grid>
    </div>
  )
}

export default OrderDetails
