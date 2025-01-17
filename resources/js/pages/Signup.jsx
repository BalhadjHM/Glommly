import BoxLayout from '../Layouts/BoxLayout.jsx';
import { usePage, useForm } from '@inertiajs/react';
import React from "react";

function Signup({ csrf_token }) {

    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const SubmitAccount = (e) => {
        e.preventDefault();
        post('/signup');
    }

    return (
        <div className='mt-8'>
            {/* Signup form */}
            <form className="space-y-6" method='POST' onSubmit={SubmitAccount}>
                <div className="pb-4 space-y-4">
                    {/* Add CSRF token*/}
                    <input type="hidden" name="_token" value={csrf_token}/>

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Username
                        </label>
                        <input
                            id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                                placeholder="Username"
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                            />
                        {errors.username && (
                            <p className="pt-2 text-red-500 text-xs italic">{errors.username}</p>
                        )}
                    </div>

                    {/* Name */}
                    <div>
                        <label htmlFor="username" className="sr-only">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Full Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && (
                            <p className="pt-2 text-red-500 text-xs italic">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Email address"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        {errors.email && (
                            <p className="pt-2 text-red-500 text-xs italic">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        {errors.password && (
                            <p className="pt-2 text-red-500 text-xs italic">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        {errors.password_confirmation && (
                            <p className="pt-2 text-red-500 text-xs italic">{errors.password_confirmation}</p>
                        )}
                    </div>
                </div>

                {/* Signup button */}
                <div>
                    <button
                        disabled={processing}
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>
                </div>
            </form>

            {/* Alredy have an account */}
            <div className="pt-4 text-center">
                <p className="text-sm text-gray-400">
                    Already have an account?
                    <a href='/login' className="font-medium text-white hover:text-gray-300">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}

Signup.layout = page => <BoxLayout title='Create an account' note='Please signup to your account' children={page}/>;

export default Signup;
