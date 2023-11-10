import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { HomeTwoTone, FileMarkdownTwoTone, PictureTwoTone, HeartTwoTone, IdcardTwoTone, MessageTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import './navigationMenu.css';

const { Header } = Layout;

const NavigationMenu = (props) => {

	const navigate = useNavigate();
	const [selectedKey, setSelectedKey] = useState('0');

	const menuLabels = ['Home', 'Blog', 'Gallery', 'Growth Experience', 'About Me', 'Contact Me']
	const menuIcons = [<HomeTwoTone />, <FileMarkdownTwoTone />, <PictureTwoTone />, <HeartTwoTone />, <IdcardTwoTone />, <MessageTwoTone />]
	const items = menuLabels.map((item, index) => {
		return {
			label: item,
			key: index.toString(),
			icon: menuIcons[index],
		}
	});



	const handleMenuItemClick = (e) => {
		const key = e.key;
		setSelectedKey(key);
		if (key === '0') {
			navigate('/MainPage');
		}
		else if (key === '1') {
			navigate('/Blog')
		}
		else if (key === '2') {
			navigate('/Gallery');
		}
		else if (key === '3') {
			// navigate('/Timeline');
		}
		else if (key === '4') {
			// navigate('/AboutMe');
		}
		else if (key === '5') {
			// navigate('/Contact');
		}
	}

	return (
		<div className="navigation-wrapper">
			<Layout>
				<Header style={{ backgroundColor: "transparent", display: "contents", justifyContent: "center" }}>
					<Menu mode={"horizontal"} items={items} onClick={handleMenuItemClick} selectedKeys={selectedKey} />
				</Header>
			</Layout>
		</div>
	)
}

export default NavigationMenu;