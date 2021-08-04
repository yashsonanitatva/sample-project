import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import useUid from '@lib/hooks/useUid';

import './NavBar.i18n';

import { NavBarContainer, NavBarWapper } from './NavBar.styles';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar: FunctionComponent = () => {
	const { t } = useTranslation('NavBar', { useSuspense: false });

	const uid = useUid('navigation', 'nav-bar');

	return (
		<NavBarWapper>
			<NavBarContainer data-testid={uid}>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">{t('sampleProject')}</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link>
									<Link href="/home">
										{t('home')}
									</Link>
								</Nav.Link>
								<NavDropdown title="Dropdown" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">{t('action')}</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">{t('actionLink')}</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">{t('something')}</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">{t('separatedLink')}</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</NavBarContainer>
		</NavBarWapper>
	);
};

export default NavBar;
