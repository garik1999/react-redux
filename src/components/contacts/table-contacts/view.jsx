import "./style.scss";
import React  from "react";
import { Table } from "antd";
import { SearchForm } from "../search-form";
import { Statistics } from "../statistics";

const View = (props) => {
	const { data, stat, fetching, form, onFormChange, columns} = props

	return (
		<Table
			columns={columns}
			dataSource={data}
			loading={fetching}
			pagination={{
				onChange: (page, size) => {
					props.dispatchPage(page, size);
				},
				current: props.current,
				pageSize: props.pageSize,
				size: "small",
			}}
			size="small"
			scroll={{
				x: 1280,
			}}
			title={() => {
				return <SearchForm form={form} onFormChange={onFormChange} />;
			}}
			footer={() => {
				return <Statistics data={stat} />;
			}}
		/>
	);
};

export { View };
