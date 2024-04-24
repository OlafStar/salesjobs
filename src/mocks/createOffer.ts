import {z} from 'zod';

import {createOfferScheme} from '~/schemas/createOfferScheme';

export const createOfferMockData: z.infer<typeof createOfferScheme> = {
  company: {
    name: 'Tech Innovations Inc.',
    size: '101 - 500', // Ensure this matches one of the enums defined in your schema
    website: 'https://www.techinnovations.com',
    logo: 'https://www.techinnovations.com/logo.png',
  },
  title: 'Senior Software Engineer',
  experience: 'Senior', // This should match the enum options in your schema
  skill: 'Proficient in Go and microservices architecture',
  salary: [
    {
      employmentType: 'Permament',
      minSalary: 80000,
      maxSalary: 120000,
      currency: 'USD',
    },
  ],
  description:
    'Seeking a Senior Software Engineer to lead our backend team, focusing on building scalable microservices.',
  location: {
    country: 'USA',
    city: 'San Francisco',
    address: '123 Tech Lane',
  },
  operatingMode: 'Hybrid',
  typeOfWork: 'Permanent',
  contact: {
    name: 'John Doe',
    email: 'john.doe@techinnovations.com',
    phone: '555-1234-567',
  },
  applyType: {
    type: 'email',
    value: 'john.doe@techinnovations.com',
  },
};
