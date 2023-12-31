import React, { useContext, useState } from 'react';
import form from '../../image/form.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                toast.success('successfull you login !!!!')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img draggable='true' src={form} className="-w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} className="input input-bordered input-primary w-96" required />
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} className="input input-bordered input-primary w-96" required />
                                </div>
                                <p className='mt-4 text-white text-justify'>Have you not registered yet? <Link to={'/register'} className='font-bold'>Register</Link></p>
                                <input className='mt-4 w-96 btn btn-warning' type="submit" />
                                <div className="divider">OR</div>
                                <button className='w-96 btn btn-warning btn-outline'>GOOGLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;