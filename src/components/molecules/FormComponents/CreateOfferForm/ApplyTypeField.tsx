'use client';

import React, {useEffect, useState} from 'react';
import {useFormContext, Controller} from 'react-hook-form';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {Input} from '~/components/ui/input';
import {Label} from '~/components/ui/label';
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group';

const ApplyTypeField = () => {
    const [type, setType] = useState<string | null>(null);
    const {register, control, watch, setValue} = useFormContext();
    const applyType = watch('applyType.type');
    useEffect(() => {
        if (type) {
            setValue('applyType.type', type);
        }
    }, [type]);

    return (
        <div>
            <RadioGroup
                onValueChange={(val) => {
                    setType(val);
                }}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" />
                        <Label>Email</Label>
                    </div>
                    {applyType === 'email' && (
                        <FormField
                            control={control}
                            name="applyType.value"
                            defaultValue=""
                            render={({fieldState: {error}}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'email'}
                                            placeholder={'Enter email address'}
                                            {...register('applyType.value')}
                                        />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="url" />
                        <Label>URL</Label>
                    </div>
                    {applyType === 'url' && (
                        <FormField
                            control={control}
                            name="applyType.value"
                            defaultValue=""
                            render={({fieldState: {error}}) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'url'}
                                            placeholder={'Enter URL'}
                                            {...register('applyType.value')}
                                        />
                                    </FormControl>
                                    <FormMessage>{error?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                    )}
                </div>
            </RadioGroup>
        </div>
    );
};

export default ApplyTypeField;
