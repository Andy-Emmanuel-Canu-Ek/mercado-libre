import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import routes from 'shared/constants/routes';
const { itemsRoute } = routes;

const Navbar = (): ReactElement => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');

  const onChangeSearchBox = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const onSearch = () => router.replace(`${itemsRoute}?search=${searchValue}`);

  const onEnterCapture = (event) => {
    if (event.key === 'Enter') onSearch();
  };

  return (
    <nav className="bg-primary-color shadow">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <a href="/">
              <img className="h-10 w-auto overflow-y-hidden" src="/assets/ic_logo_ml_large.png" alt="Logo" />
            </a>
          </div>
          <div className="flex-1 flex justify-left pl-6">
            <div className="w-full">
              <div className="relative z-50">
                <div className="flex justify-left">
                  <input
                    type="text"
                    name="searchBox"
                    className="w-full pl-4 shadow-md focus:outline-none focus:border-sky-500 rounded-xs"
                    placeholder="Nunca dejes de buscar"
                    value={searchValue}
                    onChange={onChangeSearchBox}
                    onKeyDownCapture={onEnterCapture}
                  />
                  <button
                    type="button"
                    className="bg-white-gray-color h-9 w-9 hover:bg-gray-color shadow-md rounded-xs transition duration-500"
                    onClick={onSearch}
                  >
                    <img src="/assets/ic_search_large.png" className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
