import ItemsService from 'api/Items';
import { Option } from 'shared/types/common';
import SearchBox from 'components/atoms/SearchBox';
import { formatSuggestions } from 'shared/utils/formats';
import { ReactElement, useEffect, useState } from 'react';

const Navbar = (): ReactElement => {
  const [suggestValue, setSuggestValue] = useState<string>('');
  const [suggests, setSuggests] = useState<Option[]>([]);
  const [querySearch, setQuerySearch] = useState('');

  useEffect(() => {
    setSuggests([]);
    if (suggestValue.length <= 2) return;

    ItemsService.searchAutosuggest({ q: suggestValue }).then((suggests) => {
      const dataSuggests = formatSuggestions(suggests);
      setSuggests(dataSuggests);
    });
  }, [suggestValue]);

  const onInputChange = (value) => {
    setQuerySearch(value);
    if (value.length < 2) return;
    setSuggestValue(value);
  };

  const onSelectQuerySearch = (option) => setQuerySearch(option?.value);

  return (
    <nav className="z-0 relative" x-data="{open:false,menu:false, lokasi:false}">
      <div className="relative z-10 bg-primary-color shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <a className="flex-shrink-0" href="#">
                <img className="hidden lg:block h-10 w-auto" src="/assets/ic_logo_ml_large.png" alt="Logo" />
              </a>
            </div>
            <div className="flex-1 flex px-6 justify-left">
              <div className="w-full">
                <form className="relative z-50">
                  <div className="flex">
                    <SearchBox
                      name="searchBox"
                      placeholder="Nunca dejes de buscar"
                      options={suggests}
                      isSearchable={true}
                      defaultValue={querySearch}
                      value={querySearch}
                      onInputChange={onInputChange}
                      onChange={onSelectQuerySearch}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
