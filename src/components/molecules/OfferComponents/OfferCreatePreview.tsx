'use client';

import {BriefcaseIcon, HandshakeIcon, LocateFixedIcon, StarIcon} from 'lucide-react';
import {memo} from 'react';

import {Button} from '~/components/ui/button';
import {useCreateOfferContext} from '~/components/providers/CreateOfferProvider';

import CompanyIcon from '../../../../public/icons/company-icon.svg';
import LocationIcon from '../../../../public/icons/location-icon.svg';

const OfferCreatePreview = () => {
  const {offerDetails: data} = useCreateOfferContext();
  return (
    <div className="border border-[#f1f1f1] shadow-sm rounded-lg p-4 flex flex-col gap-4 min-h-screen-minus-88 bg-white relative">
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col justify-between">
          <div className="text-2xl font-medium">{data?.title}</div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <CompanyIcon />
              <div className="text-sm">{data?.company.name}</div>
            </div>

            <div className="flex gap-2 items-center">
              <LocationIcon />
              <div className="text-sm">{`${data?.location.city}, ${data?.location.country}`}</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 w-24 h-24" />
      </div>
      <div className="w-full h-[1px] bg-[#f1f1f1]" />
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div className="flex gap-2">
          <div className="bg-slate-200 w-fit h-fit p-3 rounded-xl">
            <BriefcaseIcon color="#94A3B8" />
          </div>
          <div className="text-sm">
            <div className="font-medium opacity-60">{'Type of work'}</div>
            <div className="line-clamp-1">{data?.typeOfWork}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-200 w-fit h-fit p-3 rounded-xl">
            <StarIcon color="#94A3B8" />
          </div>
          <div className="text-sm">
            <div className="font-medium opacity-60">{'Experience'}</div>
            <div className="line-clamp-1">{data?.experience}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-200 w-fit h-fit p-3 rounded-xl">
            <HandshakeIcon color="#94A3B8" />
          </div>
          <div className="text-sm">
            <div className="font-medium opacity-60">{'Employment type'}</div>
            <div className="line-clamp-1">{data?.salary[0].employmentType}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-200 w-fit h-fit p-3 rounded-xl">
            <LocateFixedIcon color="#94A3B8" />
          </div>
          <div className="text-sm">
            <div className="font-medium opacity-60">{'Operating mode'}</div>
            <div className="line-clamp-1">{data?.operatingMode}</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#f1f1f1]" />
      <div>
        <div className="text-xl font-medium">{'Job description'}</div>
        <div>{data?.description}</div>
      </div>

      <div className="absolute bottom-0 mx-4 py-4 left-0 right-0 border-t border-t-[#f1f1f1]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="font-medium text-lg">{`${data?.salary[0].minSalary} - ${data?.salary[0].maxSalary}`}</div>
            <div className="text-sm">{data?.salary[0].employmentType}</div>
          </div>
          <Button className="px-12 text-md">{'Apply'}</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(OfferCreatePreview);
