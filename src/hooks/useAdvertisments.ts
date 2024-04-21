import {useQuery, keepPreviousData} from '@tanstack/react-query';

import {fetchAdvertisements} from '~/lib/fetchers';

export function useAdvertisements(page: number) {
  const {isPending, isError, error, data, isFetching, isPlaceholderData} = useQuery({
    queryFn: async () => await fetchAdvertisements(page),
    queryKey: ['advertisements', page],
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });

  return {isPending, isError, error, data, isFetching, isPlaceholderData};
}
