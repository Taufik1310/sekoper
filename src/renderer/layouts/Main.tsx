import { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import PaginationContext from 'renderer/Context';
import Intro from 'renderer/components/Intro';
import Navbar from 'renderer/components/Navbar';
import Products from 'renderer/components/Products';

const Main = () => {
  const [pageId, setPageId] = useState(1);

  const handlePageChanged = (id: number) => {
    setPageId(id);
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
          <Navbar />
          {pageId === 0 && <Intro />}
          {pageId === 1 && <Products />}
        </PaginationContext.Provider>
      </main>
    </HelmetProvider>
  );
};

export default Main;
