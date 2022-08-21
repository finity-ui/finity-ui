import React, { FC } from 'react';

export interface Props {
  card: ICardDetail;
}

export interface ICardDetail {
  heading: string;
  subHeading?: string;
  featuredImageUrl: string;
  description: string;
  profileUrl?: string;
}

export const Cards: FC<Props> = ({ card }) => {
  const {
    heading,
    featuredImageUrl,
    subHeading,
    profileUrl,
    description,
  } = card;
  return (
    <section>
      <div className="inline-flex flex-col items-center justify-center rounded-md border border-solid border-[rgba(202,205,213,1)] bg-white py-2">
        <img
          src={featuredImageUrl}
          alt={heading}
          className="h-[255.05px] w-[407px] rounded-md"
        />
        <div className="w-[375px]">
          <div className="flex flex-col items-start justify-start flex-1 flex-grow">
            <div className="h-4 w-[375px] bg-[rgba(255,255,255,0)]" />
            <div className="w-[375px]">
              <div className="flex items-start justify-start flex-1 flex-grow">
                <div className="flex items-center justify-center gap-2.5 p-2">
                  <div className="relative h-9 w-9">
                    <img
                      src={profileUrl}
                      className="absolute left-[0] right-[0] top-[0] bottom-[0] rounded-[100px] bg-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex w-[269px] flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start w-full pl-2">
                      <p className="font-['General_Sans'] text-2xl font-semibold leading-[1.5] text-[rgba(130,71,229,1)]">
                        {heading}
                      </p>
                    </div>
                    <div className="h-1 bg-[rgba(255,255,255,0)]" />
                    <div className="flex flex-col items-start justify-start w-full pl-2">
                      <p className="font-['General_Sans'] text-base font-medium leading-[1.6] text-black">
                        {subHeading}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2 w-[375px] bg-[rgba(255,255,255,0)]" />
          </div>
        </div>
        <div className="inline-flex w-[423px] flex-col items-start justify-start px-6">
          <p className="font-['General_Sans'] text-sm font-medium leading-[1.6] text-black">
            {description}
          </p>
          <div className="h-2 w-[375px] bg-[rgba(255,255,255,0)]" />
        </div>
      </div>
    </section>
  );
};
