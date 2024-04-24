'use client';

import {useAdvertisementsCounter} from '~/hooks/useAdvertisementsCounter';

const AllOffersText = () => {
  const {data} = useAdvertisementsCounter();

  return (
    <>
      <span>{'All offers'}&nbsp;</span>
      {data && <span>{`${data.total} offers`}</span>}
    </>
  );
};

export default AllOffersText;
