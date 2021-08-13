import {useMemo} from 'react';

import {createTestId} from '@lib/createTestId';

/**
 * Generates a unique enough string to be used by HTML elements as an id and test id, can also be used in analytics events.
 */
const useUid = (...parameters: Parameters<typeof createTestId>) =>
  useMemo(() => createTestId(...parameters), [parameters]);

export default useUid;
