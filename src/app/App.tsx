import React, { Suspense, useEffect } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { Navbar } from 'src/widgets/Navbar';
import { Sidebar } from 'src/widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    const isInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>

            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
