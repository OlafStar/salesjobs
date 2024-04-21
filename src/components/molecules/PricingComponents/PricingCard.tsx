import {InfoIcon} from 'lucide-react';
import Link from 'next/link';
import {Fragment} from 'react';

import {Tooltip} from '~/components/atoms/Tooltip';
import {Button} from '~/components/ui/button';
import {PricingCardType} from '~/config/pricing';

const PricingCard = ({name, price, info}: PricingCardType) => {
  return (
    <div className="border border-[#f1f1f1] w-[304px] p-5 rounded-lg bg-white shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-end gap-8 justify-between">
          <div className="font-medium text-2xl">{name}</div>
          <div className="font-bold text-5xl">{`${price}$`}</div>
        </div>
        <div className="flex flex-col gap-2 my-8">
          {info.map((item, index) => (
            <Fragment key={index}>
              <div className="flex gap-2 justify-between">
                <div className="flex gap-2 cursor-default items-center">
                  <div>{item.key}</div>
                  <Tooltip text={item.infoText}>
                    <div>
                      <InfoIcon size={16} color="black" />
                    </div>
                  </Tooltip>
                </div>
                <div className="font-medium">{item.value}</div>
              </div>
              {info.length > index + 1 && (
                <div className="w-full h-[1px] bg-[#d1d1d1]" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <Link href={'/offer-create'}>
        <Button>{'Post a job'}</Button>
      </Link>
    </div>
  );
};

export default PricingCard;
