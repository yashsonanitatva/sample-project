import React, { useEffect } from "react";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Head from "next/Head";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import "./Home.i18n";

import { Content, H2, HeaderWrapper, EditWrapper, ButtonAction } from "./Home.styles";
import { getUserList } from "src/services/home.service";
import { setUsers } from "@state/actions/user.action";
import { IState } from "@state/store.model";
import DataTable from "@components/DataTable";
import { Button } from "@components/Button";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: IState) => state.user.list);
  const route = useRouter();

  const { t } = useTranslation("Home", { useSuspense: false });

  useEffect(() => {
    getUserList().then((res) => {
      dispatch(setUsers(res.data));
    });
  }, []);

	const handleEdit = (_id) => {
		
	}

	const handleDelete = (_id: any) => {
		const users = userList.filter((user: any) => {
			return user.id !== _id;
		});
		dispatch(setUsers(users));
	}

	return (
		<Content>
			<Head>
				<title>{t("title")}</title>
			</Head>
			<HeaderWrapper>
				<H2>Users</H2>
				<Button
					name="Add User"
					variant="pill"
					onClick={() => route.push('home/add')}
				>
					Add User
				</Button>
			</HeaderWrapper>
			<DataTable
				columns={[
					{
						name: 'Name',
						accessor: 'name'
					},
					{
						name: 'Username',
						accessor: 'name'
					},
					{
						name: 'Email',
						accessor: 'email'
					},
					{
						name: 'Phone',
						accessor: 'phone'
					},
					{
						name: '',
						accessor: 'edit',
						// eslint-disable-next-line react/display-name
						render: (row: any) => (
							<EditWrapper>
								<ButtonAction onClick={() => handleEdit(row)}>Edit</ButtonAction>
								<ButtonAction onClick={() => handleDelete(row.id)}>Del</ButtonAction>
							</EditWrapper>
						)
					},
				]}
				data={userList}
			/>
		</Content>
	);
};

export default Home;
