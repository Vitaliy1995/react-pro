import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (val: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => (
    <Select
        className={classNames('', {}, [className])}
        label="Укажите валюту"
        options={options}
        value={value}
        // @ts-ignore
        onChange={onChange}
        readonly={readonly}
    />
));
