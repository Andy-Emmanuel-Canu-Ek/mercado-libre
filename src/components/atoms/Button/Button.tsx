import React, { FC, ReactElement } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import cn from 'classnames';
import { Else, If, Then } from 'react-if';

type Color = 'primary' | 'secondary';
type Type = 'submit' | 'button' | 'reset';
type Size = 'xs' | 'sm' | 'base' | 'lg';
type Variant = 'outline' | 'solid';
type CallbackFunction = () => void;

type ButtonProps = {
  text: string;
  onClick?: CallbackFunction;
  type?: Type;
  preffix?: ReactElement;
  suffix?: ReactElement;
  className?: string;
  loading?: boolean;
  color?: Color;
  variant?: Variant;
  spinnerText?: string;
  disabled?: boolean;
  size?: Size;
  uppercase?: boolean;
};

const Button: FC<ButtonProps> = ({
  text,
  onClick = () => {},
  type,
  className,
  loading = false,
  color = 'primary',
  variant = 'solid',
  spinnerText = 'Loading...',
  size = 'sm',
  disabled = false,
  uppercase = false,
}) => {
  const buttonSize = cn({
    'h-8': size === 'xs',
    'h-12': size === 'sm',
    'h-16': size === 'base',
    'h-20': size === 'lg',
  });

  const buttonStyles = cn(
    'px-6 tracking-wider transition duration-150 ease-in-out rounded-md shadow-md focus:outline-none',
    {
      'text-white-color bg-primary-color border border-primary-color hover:bg-gray-color hover:text-primary-color':
        color === 'primary' && variant === 'solid',
    },
    {
      'text-white-color bg-blue-color border border-blue-color hover:bg-white-color hover:text-blue-color':
        color === 'secondary' && variant === 'solid',
    },

    { uppercase },
    className,
    buttonSize
  );

  return (
    <button disabled={disabled} type={type} className={buttonStyles} onClick={onClick}>
      <If condition={loading}>
        <Then>
          <div className="flex flex-row items-center justify-center">
            <AiOutlineLoading3Quarters className="w-12 h-6 text-sm text-white animate-spin" />
            {spinnerText}
          </div>
        </Then>
        <Else>
          <div className="flex flex-row items-center justify-center">
            <div>{text}</div>
          </div>
        </Else>
      </If>
    </button>
  );
};
export default Button;
