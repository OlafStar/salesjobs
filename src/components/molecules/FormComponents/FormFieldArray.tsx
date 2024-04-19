import {MinusIcon} from '@radix-ui/react-icons';
import {useEffect} from 'react';
import {
    FieldArrayPath,
    FieldPath,
    FieldValues,
    Path,
    useFieldArray,
} from 'react-hook-form';

import {Button} from '~/components/ui/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {Input} from '~/components/ui/input';
import {cn} from '~/lib/utils';

import {ControllerArrayProps} from '~/types/formFieldTypes';

const FormFieldArray = <
    TFieldValues extends FieldValues = FieldValues,
    TFieldArrayName extends
        FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>({
    control,
    name,
    defaultValue,
}: ControllerArrayProps<TFieldValues, TFieldArrayName>) => {
    const {
        fields: fields,
        append: append,
        remove: remove,
    } = useFieldArray({
        control: control,
        name: name,
    });

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                {fields.map((field, index) => {
                    return (
                        <div className="flex gap-4" key={`${field.id}-${index}`}>
                            {Object.keys(defaultValue).map((key) => {
                                const value = defaultValue[key];
                                const inputType =
                                    typeof value === 'number' ? 'number' : 'text';

                                return (
                                    <FormField
                                        key={key}
                                        control={control}
                                        name={
                                            `${name}.${index}.${key}` as Path<TFieldValues>
                                        }
                                        render={({field}) => (
                                            <FormItem>
                                                {index === 0 && (
                                                    <FormLabel>{key}</FormLabel>
                                                )}
                                                <FormControl>
                                                    <Input
                                                        type={inputType}
                                                        {...field}
                                                        onChange={(event) => {
                                                            if (
                                                                event.target
                                                                    .value === ''
                                                            ) {
                                                                return field.onChange(
                                                                    event.target
                                                                        .value,
                                                                );
                                                            }
                                                            return field.onChange(
                                                                inputType ===
                                                                    'number'
                                                                    ? +event.target
                                                                          .value
                                                                    : event.target
                                                                          .value,
                                                            );
                                                        }}
                                                        onWheel={(e) =>
                                                            //@ts-expect-error
                                                            e.target.blur()
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                );
                            })}

                            <Button
                                variant="destructive"
                                type="button"
                                className={index === 0 ? 'opacity-0' : ''}
                                onClick={() => {
                                    if (index !== 0) {
                                        remove(index);
                                    }
                                    return;
                                }}
                            >
                                <MinusIcon />
                            </Button>
                        </div>
                    );
                })}
            </div>
            <Button
                type="button"
                variant="outline"
                onClick={() => append(defaultValue)}
            >
                {'Add'}
            </Button>
            <FormField
                control={control}
                name={`${name}` as FieldPath<TFieldValues>}
                render={() => (
                    <FormItem>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default FormFieldArray;
