import "./style.scss";
import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const View = ({ input }) => {
	return (
		<Form.Item
			name="password"
			className={"form-group"}
			help={"Type any valid password."}
			rules={[
				{
					required: true,
					message: "The password field is required.",
				},
				{
					min: 8,
					message: "The password must be at least 8 characters.",
				},
				{
					pattern: /^[A-Za-z0-9.-_]+$/i,
					message: "The password format is invalid.",
				},
			]}
			hasFeedback
		>
			<Input.Password
				{...input}
				prefix={<LockOutlined />}
				size="large"
				type="password"
				placeholder="Password"
			/>
		</Form.Item>
	);
};

export { View };
