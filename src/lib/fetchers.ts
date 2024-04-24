'use server';

import {
  Advertisement,
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

export const fetchAdvertisements = async (page: number, limit?: number) => {
  const response = await fetch(
    `${apiUrl}/advertisements?page=${page}&limit=${limit ? limit : 10}`,
    {
      method: 'GET',
    },
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: GetAdvertisementApiResponse = await response.json();
  return data;
};

export const fetchAdvertisement = async (id: string) => {
  const response = await fetch(`${apiUrl}/advertisement/${id}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: Advertisement = await response.json();
  return data;
};
