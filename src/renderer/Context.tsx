import { createContext } from 'react';

const PaginationContext = createContext({
  pageId: 0,
  onChange: (id: number) => {},
});

const OffcanvasContext = createContext({
  isOpen: false,
  onOpen: (id: number) => {},
  onClose: () => {},
});

export { PaginationContext, OffcanvasContext };
