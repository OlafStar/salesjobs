export const pricingCards: PricingCardType[] = [
  {
    name: 'Simple',
    price: 49,
    info: [
      {
        key: 'Publication days',
        value: 30,
        infoText: 'Number of days your publication is active.',
      },
      {
        key: 'Bump ups',
        value: 2,
        infoText: 'Number of times your publication will be bumped up.',

      },
    ],
  },
  {
    name: 'Pro',
    price: 99,
    info: [
      {
        key: 'Publication days',
        value: 30,
        infoText: 'Number of days your publication is active.',
      },
      {
        key: 'Bump ups',
        value: 5,
        infoText: 'Number of times your publication will be bumped up.',
      },
      {
        key: 'Featured for',
        value: 8,
        infoText: 'Number of days your publication will be featured.',
      },
    ],
  },
  {
    name: 'Featured',
    price: 149,
    info: [
      {
        key: 'Publication days',
        value: 30,
        infoText: 'Number of days your publication is active.',
      },
      {
        key: 'Bump ups',
        value: 8,
        infoText: 'Number of times your publication will be bumped up.',
      },
      {
        key: 'Featured for',
        value: 30,
        infoText: 'Number of days your publication will be featured.',
      },
    ],
  },
];

export type PricingCardType = {
  name: string;
  price: number;
  info: PricingCardInfo[];
};

export type PricingCardInfo = {
  key: string;
  value: number;
  infoText: string;
};
