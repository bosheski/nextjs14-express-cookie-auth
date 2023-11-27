'use client';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ loginUser }) => {

 const router = useRouter();
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = (data) => {
  loginUser(data);
 }

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div className="form-control">
    <label>Email</label>
    <input type="text" {...register("email")} />
   </div>
   <div className="form-control">
    <label>Password</label>
    <input type="password" {...register("password")} />
   </div>
   <div className="form-control">
    <label></label>
    <button type="submit">Login</button>
   </div>
  </form>
 );
};

export default Login;