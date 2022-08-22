import React, { FC } from 'react';
import { Spinner } from '../Spinner/index';
import IconBoldX from './assets/icon-bold-x';

export interface Props {
  card: ILoadingDetail;
}

export interface ILoadingDetail {
  heading: string;
  subHeading: string;
  message: string;
  subMessage: string;
}

export const WaitingNetworkModal: FC<Props> = ({ card }) => {
  const { heading, subHeading, message, subMessage } = card;
  return (
    <div className="inline-flex flex-col items-start justify-start bg-white drop-shadow-lg">
      <div className="flex w-full items-center justify-end py-6 pl-6 pr-[42px]">
        <IconBoldX />
      </div>
      <div className="h-4 w-[1024px] bg-[rgba(255,255,255,0)]" />
      <div className="flex w-[1024px] flex-col items-start justify-start gap-4 pr-6 pl-[42px]">
        <p className="font-['General_Sans'] text-[28px] font-semibold leading-[1.5] text-black">
          {heading}
        </p>
        <p className="w-[811px] font-['General_Sans'] text-lg leading-[1.6] text-black">
          {subHeading}
        </p>

        <div className="inline-flex items-center justify-center gap-6 rounded-2xl bg-[rgba(249,248,255,1)] p-6">
          <Spinner />
          <div className="flex w-[723px] flex-col items-start justify-start gap-2">
            <p className="font-['General_Sans'] text-xl font-semibold leading-[1.6] text-black">
              {message}
            </p>
            <p className="font-['General_Sans'] text-lg leading-[1.6] text-black">
              {subMessage}
            </p>
          </div>
        </div>
      </div>
      <div className="h-16 w-[1024px] bg-[rgba(255,255,255,0)]" />
    </div>
  );
};
