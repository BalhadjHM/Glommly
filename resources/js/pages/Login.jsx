import React, { useState, useEffect } from 'react';
import BoxLayout from '../layouts/BoxLayout';
import { usePage, useForm } from '@inertiajs/react';

function Login({ csrf_token }) {

    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const SubmitAuth = (e) => {
        e.preventDefault();
        post('/login');
    }

    const [flashMessage, setFlashMessage] = useState(flash);

    useEffect(() => {
        if (flash.success || flash.error) {
            setFlashMessage(flash);
            const timer = setTimeout(() => setFlashMessage({}), 5000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return (
        <div className='mt-8'>

            {/* Flash message */}
            {flashMessage.error && (
                <div
                    className="px-4 py-2 bg-red-100 border border-red-400 text-sm text-red-700 rounded relative space-x-2"
                    role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{flashMessage.error}</span>
                </div>
            )}

            {/* Flash message */}
            {flashMessage.success && (
                <div className="px-4 py-2 bg-teal-100 border border-teal-400 text-sm text-teal-700 rounded relative space-x-2" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline">{flashMessage.success}</span>
                </div>
            )}

            {/* Login form */}
            <form className="space-y-6" method="POST" onSubmit={SubmitAuth}>
                {/* Add CSRF token*/}
                <input type="hidden" name="_token" value={csrf_token}/>

                <div className="space-y-4">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="email"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Email address"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">{errors.email}</p>
                    )}

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">{errors.password}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    {/* Remember me */}
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-white focus:ring-white border-gray-700 rounded bg-gray-900"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                            Remember me
                        </label>
                    </div>

                    {/* Forgot password */}
                    <div className="text-sm">
                        <a href="#" className="font-medium text-white hover:text-gray-300">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                {/* Sign in button */}
                <div>
                    <button
                        disabled={processing}
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-150 ease-in-out"
                    >
                        Sign in
                    </button>
                </div>
            </form>

            {/* Sign up link */}
            <div className="pt-4 text-center">
                <p className="text-sm text-gray-400">
                    Don't have an account? <a href='/signup' className="font-medium text-white hover:text-gray-300">Create one</a>
                </p>
            </div>
        </div>
    );
}

Login.layout = page => <BoxLayout title='Welcome Back' note='Please sign in to your account' children={page}/>;
export default Login;
