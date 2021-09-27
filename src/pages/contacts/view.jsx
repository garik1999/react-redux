import "./style.scss";
import React, { useEffect, useState, useRef } from "react";
import { PageHeader, Typography } from "antd";
import { BtnGroup } from "components";
import { ContactsItems } from "../../components/contacts/contacts-items";

const View = (props) => {
	const [view, setView] = useState(localStorage.getItem("view"));
	const [update, setUpdate] = useState(false);

	const mounted = useRef();
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
		} else if (mounted.current && update) {
			props.updateContacts(props.seed.info.seed, props.seed.info.results);
			setUpdate(false);
		}
	}, [view, update]);

	const changeView = () => {
		setView(localStorage.getItem("view"));
	};

	const updateData = () => {
		setUpdate(true);
	};

	return (
		<div className={"page page--Contact"}>
			<PageHeader
				// className={"centered"}
				onBack={false}
				style={{ padding: "0" }}
				title={<Typography.Title level={1}>Contacts</Typography.Title>}
				extra={<BtnGroup onChange={changeView} updateData={updateData} />}
			>
			</PageHeader>
			<ContactsItems view={view} />
		</div>
	);
};

export { View };
