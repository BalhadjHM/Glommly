import BoxLayout from '../layouts/BoxLayout';

function Signup() {

    return (
        <div>
            <form className="mt-8 space-y-6">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">
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
                            //value={name}
                            //onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                            //value={email}
                            //onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
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
                            //value={password}
                            //onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm bg-gray-900"
                            placeholder="Confirm Password"
                            //value={confirmPassword}
                            //onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-white focus:ring-white border-gray-700 rounded bg-gray-900"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                            I agree to the <a href="#" className="text-white hover:text-gray-300">Terms and
                            Conditions</a>
                        </label>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>
                </div>
            </form>
            <div className="text-center">
                <p className="text-sm text-gray-400">
                    Already have an account?
                    <a  className="font-medium text-white hover:text-gray-300">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}

Signup.layout = page => <BoxLayout title='Create an account' children={page}/>;

export default Signup;
