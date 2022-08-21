import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button {...props}>
      {variant === 'primary' && (
        <div className="bg-purple-500 text-lg font-semibold leading-[1.6] flex w-64 items-center justify-center overflow-clip rounded-[3px] px-4 py-2 drop-shadow-lg text-white hover:bg-purple-400 hover:shadow-lg focus:bg-purple-500 focus:shadow-lg active:bg-purple-500 active:shadow-lg transition duration-150 ease-in-out">
          {children}
        </div>
      )}
      {variant === 'secondary' && (
        <div className="bg-white text-lg font-semibold text-primary-500 leading-[1.6] flex w-64 items-center justify-center overflow-clip rounded-[3px] border border-solid border-[rgba(166,115,239,1)] px-4 py-2 drop-shadow-lg hover:bg-[rgba(249,248,255,1)] hover:shadow-lg focus:bg-white focus:drop-shadow-lg active:bg-white active:drop-shadow-lg transition duration-150 ease-in-out">
          {children}
        </div>
      )}
      {variant === 'tertiary' && (
        <div className="bg-white text-lg font-semibold text-[rgba(82,92,118,1)] leading-[1.6] flex w-64 items-center justify-center overflow-clip rounded-[3px] border border-solid border-[rgba(202,205,213,1)] px-4 py-2 drop-shadow-lg hover:bg-[rgba(250,250,251,1)] hover:drop-shadow-lg focus:bg-white focus:drop-shadow-lg active:bg-white active:drop-shadow-lg transition duration-150 ease-in-out">
          {children}
        </div>
      )}
    </button>
  );
};
