'use server';

import {
  GetAdvertisementApiResponse,
  GetAdvertisementCounterApiResponse,
} from '~/types/advertisements';

const apiUrl = process.env.API_URL;

export async function fetchAdvertisementsCouneter(): Promise<{total: number}> {
  const response = await fetch(`${apiUrl}/advertisements/counter`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data: GetAdvertisementCounterApiResponse = await response.json();

  return data;
}

export const fetchAdvertisements = async (page: number) => {
  const response = await fetch(`${apiUrl}/advertisements?page=${page}&limit=10`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: GetAdvertisementApiResponse = await response.json();
  return data;
};
