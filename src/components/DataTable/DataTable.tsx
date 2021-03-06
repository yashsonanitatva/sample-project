import React, {useContext} from 'react';
import {Table} from 'react-bootstrap';
import {ThemeContext} from 'styled-components';

import useUid from '@lib/hooks/useUid';

import {DataTableContainer} from './DataTable.styles';
import {DataTableProps} from './DataTable.models';

function DataTable<T>({data, columns}: DataTableProps<T>) {
  const themeContext = useContext(ThemeContext);

  const uid = useUid('table', 'data-table');

  return (
    <DataTableContainer data-testid={uid}>
      <Table striped bordered hover variant={themeContext.currentTheme}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.name}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index) => (
            <tr key={index}>
              {columns.map((column) => {
                const keys = column.accessor;
                return (
                  <td key={column.accessor}>
                    {column.render ? column.render(item) : item[keys]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </DataTableContainer>
  );
}

export default DataTable;
