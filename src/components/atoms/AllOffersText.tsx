'use client';

import {useAdvertisementsCounter} from '~/hooks/useAdvertismentsCounter';

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
