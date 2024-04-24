import {useQuery} from '@tanstack/react-query';

import {fetchAdvertisementsCouneter} from '~/lib/fetchers';

export function useAdvertisementsCounter() {
  const {data, isLoading, isError} = useQuery({
    queryFn: async () => await fetchAdvertisementsCouneter(),
    queryKey: ['advertisementsCounter'],
    staleTime: Infinity,
  });

  return {data, isLoading, isError};
}
