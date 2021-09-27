import "./style.scss";
import React, { useState, useEffect } from "react";
import {
	Form,
	Typography,
	Avatar,
	Tag
} from "antd";
import { sumStatistic } from "../../../utils";
import { TableContacts } from "../table-contacts";
import { ListContacts } from "../list-contacts";
import { NavLink } from "react-router-dom";
import { NATIONALITIES } from "../../../constants/nationalities";

const { Paragraph } = Typography;

let array;

const columns = [
	{
		align: "center",
		title: "Avatar",
		dataIndex: "picture",
		fixed: "left",
		key: "avatar",
		width: 80,
		render: (picture, record) => {
			return (
				<NavLink to={`contacts/${array.indexOf(record)}`}
						 key={record.login.username}>
					<Avatar
						src={picture.thumbnail}
						size="small"
					/>
				</NavLink>
			);
		},
	},
	{
		title: "Full name",
		dataIndex: "name",
		key: "fullName",
		render: (name, record) => {
			return (
				<NavLink to={`contacts/${array.indexOf(record)}`}
						 key={record.login.username}>
					<span>
						{`${name.title}. ${name.first} ${name.last} `}
					</span>
				</NavLink>
			);
		},
		sorter: (a, b) => {
			let firstPerson = `${a.name.title}. ${a.name.first} ${a.name.last}`.toLowerCase();
			let secondPerson = `${b.name.title}. ${b.name.first} ${b.name.last}`.toLowerCase();
			if (firstPerson < secondPerson) return -1;
			if (firstPerson > secondPerson) return 1;
			return 0;
		},
	},
	{
		title: "Birthday",
		dataIndex: "dob",
		key: "birthday",
		width: 250,
		render: (dob, record) => {
			return (
				<div key={record.login.username}>
					<span>
						{new Date(Date.parse(dob.date)).toLocaleString(
							"en-US",
							{
								weekday: "long",
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
								second: "2-digit",
							}
						)}
					</span>
					<br />
					<span>{`${dob.age} years`}</span>
				</div>
			);
		},
	},
	{
		title: "Email",
		dataIndex: "email",
		key: "email",
		render: (email, record) => {
			return (
				<Paragraph
					key={record.login.username}
					className={"copyable"}
					copyable={{ text: email }}
				>
					<Paragraph ellipsis>
						<a href={`mailto:${email}`}>{email}</a>{" "}
					</Paragraph>
				</Paragraph>
			);
		},
	},
	{
		title: "Phone",
		dataIndex: "phone",
		key: "phone",
		width: "auto",
		render: (phone, record) => {
			return (
				<Paragraph
					key={record.login.username}
					className={"copyable"}
					copyable={{ text: phone }}
				>
					<a href={`tel:${phone}`}>{phone}</a>
				</Paragraph>
			);
		},
	},
	{
		title: "Location",
		dataIndex: "location",
		key: "location",
		width: 250,
		render: (location, record) => {
			return (
				<Paragraph
					key={record.login.username}
					className={"copyable"}
					copyable={{
						text: `[${location.country}] ${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`,
					}}
				>
					<span>
						<span>{`/${location.country}/`}</span>
						<br />
						<span>{`${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`}</span>
					</span>
				</Paragraph>
			);
		},
	},
	{
		title: "Nationality",
		dataIndex: "nat",
		key: "nationality",
		align: "right",
		render: (nat, record) => {
			return (
				<Tag key={record.login.username} color={NATIONALITIES[nat].color}>
					{NATIONALITIES[nat].name}
				</Tag>
			);
		},
	},
];

const View = (props) => {
	const [form] = Form.useForm();
	const [fullName, setFullname] = useState();
	const [gender, setGender] = useState();
	const [nat, setNat] = useState();
	const [creator, setCreator] = useState(false);
	const [data, setData] = useState(props.dataSource);
	const [stat, setStat] = useState(sumStatistic(props.dataSource));

	array = props.dataSource;

	const onFormChange = () => {
		let values = form.getFieldsValue();
		setFullname(values.fullName);
		setGender(values.gender);

		if (Array.isArray(values.nationalities)) {
			setNat(
				values.nationalities.length === 0
					? undefined
					: values.nationalities
			);
		} else {
			setNat(values.nationalities);
		}

		setCreator(values.creator);
	};

	useEffect(() => {
		onFormChange();
		if (!fullName && !gender && !nat) {
			setData(props.dataSource);
			setStat(sumStatistic(props.dataSource));
		} else {
			let filteredData = props.dataSource.filter((contact) => {
				if (!fullName) {
					return true;
				} else {
					let name = `${contact.name.title}. ${contact.name.first} ${contact.name.last} `.toLowerCase();
					if (name.indexOf(fullName.toLowerCase()) !== -1) {
						return true;
					}
				}
				return false;
			});
			filteredData = filteredData.filter((contact) => {
				if (!gender) {
					return true;
				} else {
					if (contact.gender === gender) {
						return true;
					}
				}
				return false;
			});
			filteredData = filteredData.filter((contact) => {
				if (!nat) {
					return true;
				} else {
					if (nat.includes(contact.nat)) {
						return true;
					}
				}
				return false;
			});

			setStat(sumStatistic(filteredData));
			setData(filteredData);
		}
	}, [props.fetching, fullName, gender, nat, creator]);

	if (props.view === "tiled") {
		return (
			<ListContacts stat={stat} data={data} form={form} onFormChange={onFormChange} />
		)
	}

	return (
		<TableContacts columns={columns} stat={stat} data={data} form={form} onFormChange={onFormChange} />
	)
};

export { View };
