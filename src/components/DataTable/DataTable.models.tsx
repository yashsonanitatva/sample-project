interface IColumn {
  /**
   * Column name which you want to display on table header
   */
  name: string;
  /**
   * Access key name
   */
  accessor: string;
  /**
   * Render the content you want
   */
  render?: (row: any) => JSX.Element;
}

export interface DataTableProps<T> {
  /**
   * Table body
   **/
  data: T[];
  /**
   * Column name
   **/
  columns: IColumn[];
}
