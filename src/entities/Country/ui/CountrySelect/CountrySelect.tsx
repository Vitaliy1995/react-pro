import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (val: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: 'Россия' },
    { value: Country.Belarus, content: 'Беларусь' },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => (
    <ListBox
        className={classNames('', {}, [className])}
        label="Укажите город"
        items={options}
        value={value}
        // @ts-ignore
        onChange={onChange}
        readonly={readonly}
    />
));
