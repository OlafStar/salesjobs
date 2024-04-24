import {z} from 'zod';

const salarySchema = z.object({
  employmentType: z.enum([
    'B2B',
    'Permament',
    'Internship',
    'Any',
    'Mandate contract',
    'Specific-task contract',
  ]),
  minSalary: z.number(),
  maxSalary: z.number(),
  currency: z.string(),
});

const locationSchema = z.object({
  country: z.string().min(1, 'This field is required'),
  city: z.string().min(1, 'This field is required'),
  address: z.string().min(1, 'This field is required'),
});

const contactSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z.string().email('This field is required'),
  phone: z.string().optional(),
});

export const companySchema = z.object({
  name: z.string().min(1, 'This field is required'),
  size: z.enum(['1 - 10', '11 - 25', '25 - 50', '51 - 100', '101 - 500', '500+'], {
    required_error: 'This field is required',
  }),
  website: z.string().url(),
  logo: z.any().optional(),
});

export const applyTypeScheme = z.object({
  type: z.enum(['email', 'url']),
  value: z.string().min(1, 'This field is required'),
});

export const createOfferScheme = z.object({
  company: companySchema,
  title: z.string().min(5, 'This field is required, minimum 5 characters'),
  experience: z.enum(['Junior', 'Mid', 'Senior'], {
    required_error: 'This field is required',
  }),
  skill: z.string().optional(),
  salary: z.array(salarySchema),
  description: z.string().min(1, 'This field is required'),
  location: locationSchema,
  operatingMode: z.enum(['Hybrid', 'Remote', 'Onsite'], {
    required_error: 'This field is required',
  }),
  typeOfWork: z.enum(['Permanent', 'Contract', 'Temporary'], {
    required_error: 'This field is required',
  }),
  contact: contactSchema,
  applyType: applyTypeScheme,
});
