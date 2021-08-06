interface IColumn {
	/**
	 * Column name which you want to display on table header
	 */
	name: string;
	/**
	 * Access key name 
	 */
	accessor: string;
}

export interface DataTableProps<T> {
	/**
	 * Table body
	 **/
	data: T;
	/**
	 * Column name
	 **/
	 columns: IColumn[];
}
