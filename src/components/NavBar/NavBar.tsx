import React, { FunctionComponent } from 'react';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

import useUid from '@lib/hooks/useUid';

import './NavBar.i18n';

import { NavBarContainer, NavBarWapper, NavLink, Title } from './NavBar.styles';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar: FunctionComponent = () => {
	const { t } = useTranslation('NavBar', { useSuspense: false });

	const uid = useUid('navigation', 'nav-bar');

	return (
		<NavBarWapper>
			<NavBarContainer data-testid={uid} expand="lg">
				<Container>
					<Link href="/home" passHref>
						<Title>
							{t('sampleProject')}
						</Title>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link href="/home" passHref>
								<NavLink>
									{t('home')}
								</NavLink>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</NavBarContainer>
		</NavBarWapper>
	);
};

export default NavBar;
