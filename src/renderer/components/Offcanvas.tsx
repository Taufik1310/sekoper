import { useContext, useEffect, useState } from 'react';
import { OffcanvasContext } from 'renderer/Context';

const Offcanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { onClose } = useContext(OffcanvasContext);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div
      className={`absolute end-0 z-50 w-1/2 h-screen bg-blue-50 transition-all duration-1000 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'
      }`}
    >
      <button type="button" onClick={() => onClose()}>
        Kembali
      </button>
    </div>
  );
};

export default Offcanvas;
