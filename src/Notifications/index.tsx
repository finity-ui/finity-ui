import React, { FC } from 'react';
import Icon from './assets/icon';

export interface Props {
  message: string;
  variant?: 'active' | 'warning' | 'error' | 'success' | 'info' | 'grey';
}

interface IButtonClass {
  name: string;
  style: string;
}

export const Notifications: FC<Props> = ({ message, variant = 'active' }) => {
  const styling: IButtonClass | undefined = buttonClasses.find(classes => {
    return classes.name === variant;
  });
  return (
    <div className={`${styling?.style}`}>
      <div className="inline-flex items-center justify-center w-full gap-3">
        <p className="flex-1 text-base font-semibold leading-[1.6] text-white">
          {` ${message} `}
        </p>
        <div className="flex items-start justify-start gap-2.5">
          <Icon />
        </div>
      </div>
    </div>
  );
};

const buttonClasses: Array<IButtonClass> = [
  {
    name: 'active',
    style:
      'inline-flex w-[1024px] flex-col items-center justify-center gap-2.5 rounded-[3px] bg-[rgba(130,71,229,1)] px-4 py-3 drop-shadow-lg',
  },
  {
    name: 'warning',
    style:
      'inline-flex w-[1024px] flex-col items-center justify-center gap-2.5 rounded-[3px] bg-[#FFAD0D] px-4 py-3 drop-shadow-lg',
  },
  {
    name: 'error',
    style:
      'inline-flex w-[1024px] flex-col items-center justify-center gap-2.5 rounded-[3px] bg-[#DB2438] px-4 py-3 drop-shadow-lg',
  },
  {
    name: 'success',
    style:
      'inline-flex w-[1024px] flex-col items-center justify-center gap-2.5 rounded-[3px] bg-[#44AC21] px-4 py-3 drop-shadow-lg',
  },
  {
    name: 'info',
    style:
      'inline-flex w-[1024px] flex-col items-center justify-center gap-2.5 rounded-[3px] bg-[#1B4ACB] px-4 py-3 drop-shadow-lg',
  },
  {
    name: 'grey',
    style:
      'inline-flex w-[1024px] flex-col items-center justify-center gap-2.5 rounded-[3px] bg-[#49536E] px-4 py-3 drop-shadow-lg',
  },
];
