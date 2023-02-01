import React, {memo, useState} from 'react';

import styles from './Conter.module.scss';

export const Counter = memo(() => {
    console.log("Here");

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <span>{count}</span>
            <button className={styles.button} onClick={inc}>Increment</button>
        </div>
    );
});

export default Counter;