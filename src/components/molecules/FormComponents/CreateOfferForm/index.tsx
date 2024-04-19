'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Button} from '~/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {Input} from '~/components/ui/input';
import {applyTypeScheme, createOfferScheme} from '~/schemas/createOfferScheme';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';
import FormFieldArray from '../FormFieldArray';
import {Textarea} from '~/components/ui/textarea';
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group';
import {Label} from '~/components/ui/label';
import ApplyTypeField from './ApplyTypeField';
import {Checkbox} from '~/components/ui/checkbox';

const CreateJobPostingForm = () => {
    const form = useForm<z.infer<typeof createOfferScheme>>({
        resolver: zodResolver(createOfferScheme),
    });

    function onSubmit(values: z.infer<typeof createOfferScheme>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded-lg px-8 py-6 space-y-8"
            >
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'About company'}</div>
                    <div className="flex gap-8">
                        <div className="w-60 h-48 border-dashed border-slate-200 border rounded-lg"></div>
                        <div className="flex-1 flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="company.name"
                                defaultValue={''}
                                render={({field, fieldState: {error}}) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Tech Innovations Inc."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage>{error?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />

                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="company.size"
                                    defaultValue={undefined}
                                    render={({field, fieldState: {error}}) => (
                                        <FormItem className="w-44">
                                            <FormLabel>Contact Size</FormLabel>
                                            <FormControl>
                                                <Select
                                                    name={field.name}
                                                    onValueChange={(val) => {
                                                        field.onChange(val);
                                                    }}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choose size" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {createOfferScheme.shape.company.shape.size.options.map(
                                                            (size) => (
                                                                <SelectItem
                                                                    key={size}
                                                                    value={size}
                                                                >
                                                                    {size}
                                                                </SelectItem>
                                                            ),
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage>
                                                {error?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="company.website"
                                    defaultValue={''}
                                    render={({field, fieldState: {error}}) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Contact Website</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Tech Innovations Inc."
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage>
                                                {error?.message}
                                            </FormMessage>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Position info'}</div>
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Position title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Tech Innovations Inc."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="experience"
                            defaultValue={undefined}
                            render={({field, fieldState: {error}}) => (
                                <FormItem className="w-48">
                                    <FormLabel>Position title</FormLabel>
                                    <FormControl>
                                        <Select
                                            name={field.name}
                                            onValueChange={(val) => {
                                                field.onChange(val);
                                            }}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose experiance" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {createOfferScheme.shape.experience.options.map(
                                                    (exp) => (
                                                        <SelectItem
                                                            key={exp}
                                                            value={exp}
                                                        >
                                                            {exp}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Skill'}</div>
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="skill"
                            defaultValue={''}
                            render={({field, fieldState: {error}}) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Skill</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Skill" {...field} />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">
                        {'Salary range TODO: FIX VALIDATION'}
                    </div>
                    <div className="flex gap-4">
                        <FormFieldArray
                            control={form.control}
                            name="salary"
                            defaultValue={{
                                employmentType: 'B2B',
                                minSalary: 0,
                                maxSalary: 0,
                                currency: 'USD',
                            }}
                        />
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Job description'}</div>
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="description"
                            defaultValue={''}
                            render={({field, fieldState: {error}}) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Job description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your description here..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Location'}</div>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <FormField
                                control={form.control}
                                name="location.city"
                                defaultValue={''}
                                render={({field, fieldState: {error}}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="City" {...field} />
                                        </FormControl>
                                        <FormMessage>{error?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location.country"
                                defaultValue={''}
                                render={({field, fieldState: {error}}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Country"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage>{error?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="location.address"
                            defaultValue={''}
                            render={({field, fieldState: {error}}) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Address" {...field} />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Operating mode'}</div>
                    <FormField
                        control={form.control}
                        name="operatingMode"
                        render={({field, fieldState: {error}}) => (
                            <FormItem>
                                <RadioGroup
                                    onValueChange={(val) => {
                                        field.onChange(val);
                                    }}
                                >
                                    {createOfferScheme.shape.operatingMode.options.map(
                                        (mode) => (
                                            <div
                                                key={mode}
                                                className="flex items-center space-x-2"
                                            >
                                                <RadioGroupItem
                                                    value={mode}
                                                    id={mode}
                                                />
                                                <Label htmlFor={mode}>{mode}</Label>
                                            </div>
                                        ),
                                    )}
                                </RadioGroup>

                                <FormMessage>{error?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Type of work'}</div>
                    <FormField
                        control={form.control}
                        name="typeOfWork"
                        render={({field, fieldState: {error}}) => (
                            <FormItem>
                                <RadioGroup
                                    onValueChange={(val) => {
                                        field.onChange(val);
                                    }}
                                >
                                    {createOfferScheme.shape.typeOfWork.options.map(
                                        (mode) => (
                                            <div
                                                key={mode}
                                                className="flex items-center space-x-2"
                                            >
                                                <RadioGroupItem
                                                    value={mode}
                                                    id={mode}
                                                    onChange={(val) =>
                                                        field.onChange(
                                                            val.currentTarget.value,
                                                        )
                                                    }
                                                />
                                                <Label htmlFor={mode}>{mode}</Label>
                                            </div>
                                        ),
                                    )}
                                </RadioGroup>

                                <FormMessage>{error?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Applying'}</div>
                    <ApplyTypeField />
                </div>
                <div className="h-[1px] w-full bg-slate-200" />
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-semibold">{'Contact details'}</div>
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="contact.name"
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <FormItem className="flex-1">
                                    <FormLabel>First name Last name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Tech Innovations Inc."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="contact.email"
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Contact email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Tech Innovations Inc."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default CreateJobPostingForm;
