import React, { FC } from 'react';
import { Spinner } from '../Spinner/index';

export interface Props {
  card: ILoadingDetail;
}

export interface ILoadingDetail {
  message: string;
  subMessage: string;
}

export const LoadingSection: FC<Props> = ({ card }) => {
  const { message, subMessage } = card;
  return (
    <section>
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
    </section>
  );
};
