"use client";


import { AuthContext, SignIdData } from "@/context/AuthContext";
import { useForm } from 'react-hook-form';
import { useContext } from "react";

const Login =  ({}) => {
    const {register, handleSubmit} = useForm<SignIdData>();
    const { login, authError } = useContext(AuthContext);

    const handleLogin = async (data : SignIdData) => {
        await login(data);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
                    <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-700">Usuário:</label>
                    <input 
                        {...register('username')}
                        type="text" 
                        name='username' 
                        id='username' 
                        placeholder="username" 
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">Senha:</label>
                    <input 
                        {...register('password')}
                        type="password" 
                        name='password' 
                        id='password' 
                        placeholder="password" 
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <input 
                        type="submit" 
                        value="Acessar" 
                        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition-colors cursor-pointer"
                    />
                </form>
                {authError && <p className="mt-4 text-sm text-red-500">{authError}</p>}
            </div>
        </div>
    );
}

export default Login;