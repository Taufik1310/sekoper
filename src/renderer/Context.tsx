import { createContext } from 'react';

const PaginationContext = createContext({
  pageId: 0,
  onChange: (id: number) => {},
});

export default PaginationContext;
