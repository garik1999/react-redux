import "./style.scss";
import React from "react";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const View = ({ input }) => {
	return (
		<Form.Item
			name="Email"
			className={"form-group"}
			required
			help={"Type any valid email."}
			rules={[
				{
					required: true,
					message: "The email field is required.",
				},
				{
					type: "email",
					message: "The email format is invalid.",
				},
			]}
			hasFeedback
		>
			<Input {...input} prefix={<UserOutlined />} size="large" placeholder="Email" />
		</Form.Item>
	);
};

export { View };
