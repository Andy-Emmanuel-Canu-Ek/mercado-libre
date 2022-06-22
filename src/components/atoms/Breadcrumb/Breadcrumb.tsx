import React, { ReactElement } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import Text from 'components/atoms/Text';
import cn from 'classnames';
const Breadcrumb = ({ list = [] }): ReactElement => {
  return (
    <div className="flex mt-4 mb-4">
      <div className="flex-1 max-w-screen-xl m-auto">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex">
            {list.map((breadcrumb, index) => {
              const isTheLast = index + 1 === list.length;
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <Text
                      text={breadcrumb}
                      size="14px"
                      className={cn('cursor-pointer', {
                        'text-gray-color': !isTheLast,
                      })}
                    />
                    {!isTheLast && <BsChevronRight size="10" className="ml-1 mr-1 text-gray-color" />}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
