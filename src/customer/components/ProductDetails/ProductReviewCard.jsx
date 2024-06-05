import React from 'react'
import { Grid } from '@mui/material'
import {Box} from '@mui/material'
import {Avatar} from '@mui/material'
import {Rating}from '@mui/material'
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgColor:'#9155fd'}}></Avatar>
            </Box>
        </Grid>
      </Grid>

      <Grid item xs={9}>
        <div className='space-y-2'>
            <div>
                <p className='font-semibold text-lg'>ram</p>
                <p className='opacity-70'>April 5,2023</p>
            </div>
        </div>
        <Rating value={4.5} name='half-rating'readOnly precision={.5}></Rating>
        <p>Nice Product, i love this search.</p>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
