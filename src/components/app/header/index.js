import './style.scss';
import React from 'react';
import { Col, Row, Button } from 'antd';
import { Logo } from '../logo';
import { NavBar } from '../navbar';

const Header = () => {
	return (
		<div className={'header'}>
			<Row type={'flex'} gutter={36} align={'middle'}>
				<Col>
					<Logo />
				</Col>
				<Col className={'_flex-grow'}>
					<Row type={'flex'} gutter={16} align={'middle'}>
						<Col className={'_flex-grow'}>
							<NavBar />
						</Col>
						<Col>
							<Button>Login</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export { Header };
