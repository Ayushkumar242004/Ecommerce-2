import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const userData = {
            email : data.get("email"),
            password : data.get("password")
        }
        dispatch(login(userData));
        console.log(userData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField
                    required
                    id='email'
                    name='email'
                    label="E-mail"
                    fullWidth
                    autoComplete='email'>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='password'
                    name='password'
                    label="Password"
                    fullWidth
                    autoComplete='password'>
                    </TextField>
                </Grid>
                <Grid item xs={12} >
                    <Button
                    className='w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{ padding: ".8rem 0", backgroundColor: "#9155FD" }}>
                    LOGIN
                    </Button>
                </Grid>
            </Grid>

        </form>

        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>if you don't have an acoount? </p>
                <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
            </div>
        </div>
        
    </div>
  )
}

export default LoginForm