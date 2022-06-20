import { ReactElement, useState } from 'react';

const Navbar = (): ReactElement => {
  return (
    <nav className="z-0 relative" x-data="{open:false,menu:false, lokasi:false}">
      <div className="relative z-10 bg-primary-color shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <a className="flex-shrink-0" href="#">
                <img
                  className="block lg:hidden h-12 w-16"
                  src="https://imlovefood.com/wp-content/themes/mypanganthema/img/logo_small.png"
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-12 w-auto"
                  src="https://imlovefood.com/wp-content/themes/mypanganthema/img/logo_small_gray.png"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <form action="#" className="relative z-50">
                  <button
                    type="submit"
                    id="searchsubmit"
                    className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="text"
                    name="s"
                    id="s"
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-yellow-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Search"
                  />
                </form>
                <label className="sr-only">Search </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;