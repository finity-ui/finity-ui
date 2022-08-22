import React, { FC } from 'react';
import IconlyLightOutlineWallet from './assets/iconly-light-outline-wallet';
import IconlyLightOutlineWallet1 from './assets/iconly-light-outline-wallet1';
import IconLightWall from './assets/icon-light-wall';
import IconBoldX from './assets/icon-bold-x';

export interface Props {
  card: ICardDetail;
}

export interface ICardDetail {
  heading: string;
  subHeading: string;
  col1Heading: string;
  col1description: string;
  col2Heading: string;
  col2description: string;
  col2link: string;
  col3Heading: string;
  col3description: string;
}

export const ConnectionModal: FC<Props> = ({ card }) => {
  const {
    heading,
    subHeading,
    col1Heading,
    col1description,
    col2Heading,
    col2description,
    col2link,
    col3Heading,
    col3description,
  } = card;
  return (
    <div className="inline-flex flex-col items-start justify-start rounded-xl border border-solid border-[rgba(202,205,213,1)] bg-white drop-shadow-lg">
      <div className="flex w-full items-center justify-end py-4 pl-6 pr-[42px]">
        <IconBoldX />
      </div>
      <div className="h-4 w-[1158px] bg-[rgba(255,255,255,0)]" />
      <div className="flex w-full flex-col items-start justify-start gap-4 pr-6 pl-[42px]">
        <p className="font-['General_Sans'] text-[28px] font-semibold leading-[1.5] text-black">
          {heading}
        </p>
        <p className="w-[811px] font-['General_Sans'] text-lg leading-[1.6] text-black">
          {subHeading}
        </p>
      </div>
      <div className="h-8 w-[1158px] bg-[rgba(255,255,255,0)]" />
      <div className="flex flex-col items-center justify-center gap-2.5 pl-[42px] pr-[42px]">
        <div className="flex items-start justify-center gap-[42px]">
          <div className="flex w-[330px] flex-col items-start justify-start gap-4">
            <div>
              <div className="inline-flex items-start justify-start gap-2.5 rounded-[48px] bg-[rgba(130,71,229,1)] p-3 drop-shadow-lg">
                <IconlyLightOutlineWallet />
              </div>
              <div className="inline-flex w-[331px] flex-col items-start justify-start gap-2">
                <p className="font-['General_Sans'] text-xl font-semibold leading-[1.6] text-black">
                  {col1Heading}
                </p>
                <p className="w-[331px] font-['General_Sans'] text-lg leading-[1.6] text-black">
                  {col1description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[330px] flex-col items-start justify-start gap-4">
            <div>
              <div className="inline-flex items-start justify-start gap-2.5 rounded-[48px] bg-[rgba(130,71,229,1)] p-3 drop-shadow-lg">
                <IconlyLightOutlineWallet1 />
              </div>
              <div className="inline-flex w-[331px] flex-col items-start justify-start gap-2">
                <p className="font-['General_Sans'] text-xl font-semibold leading-[1.6] text-black">
                  {col2Heading}
                </p>
                <div className="flex flex-col items-start justify-start gap-4">
                  <p className="w-[331px] font-['General_Sans'] text-lg leading-[1.6] text-black">
                    {col2description}
                  </p>
                  <p className="w-[322px] font-['General_Sans'] text-lg leading-[1.6] text-[rgba(130,71,229,1)]">
                    {col2link}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[330px] flex-col items-start justify-start gap-4">
            <div>
              <div className="inline-flex items-start justify-start gap-2.5 rounded-[48px] bg-[rgba(130,71,229,1)] p-3 drop-shadow-lg">
                <IconLightWall />
              </div>
              <div className="inline-flex w-[331px] flex-col items-start justify-start gap-2">
                <p className="font-['General_Sans'] text-xl font-semibold leading-[1.6] text-black">
                  {col3Heading}
                </p>
                <p className="w-[331px] font-['General_Sans'] text-lg leading-[1.6] text-black">
                  {col3description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 w-[1158px] bg-[rgba(255,255,255,0)]" />
    </div>
  );
};
