import React from "react";
import { Form, Button, Row, Col } from "antd";
import { Field } from "redux-form";
import { CloseOutlined } from "@ant-design/icons";
import { EmailField } from "../email-input";
import { PassField } from "../password-input";

const View = (props) => {
	return (
		<Form onFinish={props.onFinish}>
			<Field name="email" component={EmailField} />
			<Field name="password" component={PassField} />
			<Row type={'flex'} gutter={4} align={'middle'}>
				<Col className={'_flex-grow'}>
					<Button
						type="primary"
						size="large"
						block
						htmlType="submit"
					>
						Sign In
					</Button>
				</Col>
				<Col className={'_flex-noshrink'}>
					<Button
						type="text"
						htmlType="button"
						danger={true}
						style={{ width: "100%" }}
						icon={<CloseOutlined />}
						onClick={props.handleCancel}
					>
						Cancel
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export { View };
