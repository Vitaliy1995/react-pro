import React, {memo} from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('about');

    return (
        <span>{t("О сайте")}</span>
    );
};

export default AboutPage;