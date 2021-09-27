import "./style.scss";
import React  from "react";
import { List, Col } from "antd";
import { SearchForm } from "../search-form";
import { Statistics } from "../statistics";
import { CardContact } from "../card-contacts";

const View = (props) => {
	const { data, stat, fetching, form, onFormChange, current, pageSize} = props

	return (
		<List
			grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 6, gutter: 16 }}
			dataSource={data}
			loading={fetching}
			header={
				<div className="search-box">
					<SearchForm form={form} onFormChange={onFormChange} />
				</div>
			}
			renderItem={(item) => {
				return (
					<Col>
						<CardContact
							user={item}
							id={props.dataSource.indexOf(item)}
						/>
					</Col>
				);
			}}
			footer={
				<div className="statistic-box">
					<Statistics data={stat} />
				</div>
			}
			pagination={{
				onChange: (page, size) => {
					props.dispatchPage(page, size);
				},
				current,
				pageSize,
				defaultPageSize: 6,
				size: "small",
				showSizeChanger: true,
				pageSizeOptions: [6, 12, 18, 24],
			}}
		/>
	);
};

export { View };
