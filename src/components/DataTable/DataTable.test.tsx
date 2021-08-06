import { render } from '@test/utils';

import DataTable from './DataTable';

test('DataTable should render', () => {
	const { getByTestId, container } = render(
		<DataTable
			columns={[{
				name: 'test',
				accessor: 'name'
			}]}
			data={[
				{
					id: '1',
					name: 'hello'
				}
			]}
		/>
	);

	const dataTableNode = getByTestId('data-table');

	expect(dataTableNode).toBeVisible();
	expect(dataTableNode.textContent).toBe('Hello');

	expect(container).toMatchSnapshot();
});

// Add your tests
