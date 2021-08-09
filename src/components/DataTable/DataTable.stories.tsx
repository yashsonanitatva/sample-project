import { Meta } from "@storybook/react/types-6-0";

import { templateForComponent } from "@lib/templateHelper";

import DataTable from "./DataTable";
import { number, string } from "yargs";

const meta: Meta = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;

const template = templateForComponent(DataTable, {
  layout: "padded",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/…",
  },
  sharedProps: {},
});

interface dataType {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
}

const fillData: dataType[] = [
  {
    id: 1,
    first_name: "Yash",
    last_name: "Patel",
    user_name: "yash.patel",
  },
  {
    id: 2,
    first_name: "Raj",
    last_name: "Patel",
    user_name: "raj.patel",
  },
  {
    id: 3,
    first_name: "Vijay",
    last_name: "Patel",
    user_name: "vijay.patel",
  },
];

export const Default = template({
  columns: [
    {
      name: "No",
      accessor: "id",
    },
    {
      name: "First Name",
      accessor: "first_name",
    },
    {
      name: "Last Name",
      accessor: "last_name",
    },
    {
      name: "Username",
      accessor: "user_name",
    },
  ],
  data: fillData,
});
