'use client';

import {createContext, useContext, useState, ReactNode} from 'react';
import {z} from 'zod';

import {createOfferScheme} from '~/schemas/createOfferScheme';

type OfferDetails = z.infer<typeof createOfferScheme>;

interface CreateOfferContextType {
  jobType: string | null;
  offerDetails: OfferDetails | null;
  setJobType: (type: string | null) => void;
  setOfferDetails: (details: OfferDetails | null) => void;
}

const CreateOfferContext = createContext<CreateOfferContextType | undefined>(
  undefined,
);

export function useCreateOfferContext() {
  const context = useContext(CreateOfferContext);
  if (!context) {
    throw new Error(
      'useCreateOfferContext must be used within a CreateOfferProvider',
    );
  }
  return context;
}

export const CreateOfferProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [jobType, setJobType] = useState<string | null>(null);
  const [offerDetails, setOfferDetails] = useState<OfferDetails | null>(null);

  const value = {jobType, setJobType, offerDetails, setOfferDetails};

  return (
    <CreateOfferContext.Provider value={value}>
      {children}
    </CreateOfferContext.Provider>
  );
};
