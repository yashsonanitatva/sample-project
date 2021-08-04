import React from 'react';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

import './Home.i18n';

import { Content } from './Home.styles';

const Home: NextPage = () => {
	const { t } = useTranslation('Home', { useSuspense: false });

	return (
		<Content>
			<h1>{t('welcome')}</h1>
		</Content>
	);
};

export default Home;
