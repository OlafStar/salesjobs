'use client';

import React, {useState, useEffect, useRef, Fragment} from 'react';

import {useAdvertisements} from '~/hooks/useAdvertisements';
import {AdvertisementCard} from '~/types/advertisements';

import OfferListCard from '../../OfferComponents/OfferListCard';
import OfferListEmptyState from '../OfferListEmptyState';

const OfferList = () => {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState<AdvertisementCard[]>([]);
  const {isPending, data, isFetching} = useAdvertisements(page);
  const loader = useRef(null);

  useEffect(() => {
    if (data && data.advertisements && !isFetching) {
      setAllData((prev) => [...prev, ...data.advertisements]);
    }
  }, [data, isFetching]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        data &&
        !isFetching &&
        data.currentPage < data.last
      ) {
        setPage((old) => old + 1);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader.current, isFetching, data]);

  return (
    <div>
      {data?.advertisements && data?.advertisements.length == 0 ? (
        <OfferListEmptyState />
      ) : (
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col min-w-[640px]">
            {allData.map((item) => (
              <Fragment key={item.id}>
                <OfferListCard {...item} />
                <div className="w-full h-[1px] bg-[#d9d9d9]" />
              </Fragment>
            ))}
          </div>
          <div id="modal-root" className="sticky flex-1 top-[76px] h-fit" />
        </div>
      )}
      <div ref={loader} />
      {isPending && <div>{'Loading...'}</div>}
    </div>
  );
};

export default OfferList;
