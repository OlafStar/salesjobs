export type Advertisement = {
  id: string;
  company: {
    name: string;
    size: number;
    website: string;
    logo: string;
  };
  title: string;
  experience: string;
  skill: string;
  salary: Salary[];
  description: string;
  location: {
    country: string;
    city: string;
    address: string;
  };
  operatingMode: string;
  typeOfWork: string;
  applyType: {
    email: string;
    url: string;
  };
  consent: boolean;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  createdAt: string;
};

type Salary = {
  employmentType: string;
  minSalary: number;
  maxSalary: number;
  currency: string;
};

export type GetAdvertisementCounterApiResponse = {
  total: number;
};


export type GetAdvertisementApiResponse = {
  currentPage: number;
  total: number;
  last: number;
  advertisements: Advertisement[];
};
