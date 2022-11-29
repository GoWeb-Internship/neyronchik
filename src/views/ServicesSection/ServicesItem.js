import React from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const ServicesItem = ({ data }) => {
  //   console.log(data);
  const { language } = useI18next();
  const { t } = useTranslation();
  const { time, currency } = t('servicesValues', {
    returnObjects: true,
  });

  return (
    <ul>
      {data.map(list => (
        <li key={list.en_service_description}>
          <p>{list[`${language}_service_description`]}</p>
          <span>{list.service_duration}</span>
          <span>{time}</span>
          <p>{list.service_price}</p>
          <span>{currency}</span>
        </li>
      ))}
    </ul>
  );
};

export default ServicesItem;
