'use client';

import {BriefcaseBusinessIcon} from 'lucide-react';
import Link from 'next/link';
import {useMemo} from 'react';

import {AdvertisementCard} from '~/types/advertisements';
import {Badge} from '~/components/ui/badge';
import {daysFromToday} from '~/lib/utils';

import CompanyIcon from '../../../../public/icons/company-icon.svg';
import LocationIcon from '../../../../public/icons/location-icon.svg';

const OfferListCard = ({
  id,
  title,
  salary,
  company,
  location,
  createdAt,
}: AdvertisementCard) => {
  const days = useMemo(() => {
    return daysFromToday(createdAt);
  }, [createdAt]);

  return (
    <Link href={`/offer/${id}`} className={'flex gap-3 py-6'}>
      <div className="w-[88px] h-[59px] flex items-center justify-center">
        <BriefcaseBusinessIcon color={'#d1d1d1'} size={42} />
      </div>
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col justify-between">
          <div className="text-lg font-medium">{title}</div>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <CompanyIcon />
              <div className="text-sm">{company.name}</div>
            </div>
            <div className="flex gap-2 items-center">
              <LocationIcon />
              <div className="text-sm">{`${location.city}, ${location.country}`}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit justify-between">
          {salary && salary.length > 0 && (
            <div className="text-lg font-medium">{`${salary[0].minSalary} - ${salary[0].maxSalary} ${salary[0].currency}`}</div>
          )}
          <div className="flex justify-end">
            <Badge variant="secondary" className="font-medium text-xs">
              {days === 0
                ? 'New'
                : days === 1
                  ? `${days} day ago`
                  : `${days} days ago`}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OfferListCard;
