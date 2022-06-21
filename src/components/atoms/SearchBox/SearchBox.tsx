import React, { useState } from 'react';
import Select, { components, DropdownIndicatorProps, IndicatorSeparatorProps } from 'react-select';

const IndicatorSeparator = (props: IndicatorSeparatorProps) => (
  <components.IndicatorSeparator {...props}>
    <>sdasdas</>
  </components.IndicatorSeparator>
);

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <button type="button" className="bg-white-gray-color h-10 w-10 p-2.5">
      <img src="/assets/ic_search_large.png" className="" />
    </button>
  </components.DropdownIndicator>
);

const SearchBox = ({ ...props }) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      zIndex: 11,
    }),
    control: (base, state) => ({
      ...base,
      padding: '0px',
      margin: '0px',
      borderColor: 'white',
      boxShadow: '',
      ':hover': {
        borderColor: 'white',
      },
    }),
    option: (provided, state) => ({
      ...provided,
    }),
  };

  return (
    <Select
      className="w-full"
      styles={customStyles}
      isSearchable={true}
      components={{
        IndicatorSeparator,
      }}
      {...props}
    />
  );
};

export default SearchBox;
