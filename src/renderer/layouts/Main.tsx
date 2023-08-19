import { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { OffcanvasContext, PaginationContext } from 'renderer/Context';
import Intro from 'renderer/components/Intro';
import Navbar from 'renderer/components/Navbar';
import Offcanvas from 'renderer/components/Offcanvas';
import Products from 'renderer/components/Products';

const Main = () => {
  const [pageId, setPageId] = useState(1);
  const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(true);

  const handlePageChanged = (id: number) => {
    setPageId(id);
  };

  const handleOffcanvasShowing = (id: number) => {
    setIsOpenOffcanvas(true);
  };

  const handleOffcanvasClosed = () => {
    setIsOpenOffcanvas(false);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sekoper</title>
      </Helmet>
      <main className="bg-black w-screen h-screen overflow-x-hidden overflow-y-hidden relative">
        <PaginationContext.Provider
          value={{
            pageId,
            onChange: handlePageChanged,
          }}
        >
          <OffcanvasContext.Provider
            value={{
              isOpen: isOpenOffcanvas,
              onOpen: handleOffcanvasShowing,
              onClose: handleOffcanvasClosed,
            }}
          >
            {isOpenOffcanvas && <Offcanvas />}
            <Navbar />
            {pageId === 0 && <Intro />}
            {pageId === 1 && <Products />}
          </OffcanvasContext.Provider>
        </PaginationContext.Provider>
      </main>
    </HelmetProvider>
  );
};

export default Main;
