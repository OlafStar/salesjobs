import {useQuery} from '@tanstack/react-query';

import {fetchAdvertisement} from '~/lib/fetchers';

export function useAdvertisement(id: string) {
  const {isPending, isError, error, data, isFetching} = useQuery({
    queryFn: async () => await fetchAdvertisement(id),
    queryKey: [`advertisements`, id],
    staleTime: Infinity,
  });

  return {isPending, isError, error, data, isFetching};
}
