import { useState } from "react";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section>
        <h2>Click Outside</h2>
        <button onClick={handleOpenModal}>Open Modal</button>
      </section>
      {isOpen && (
        <div>
          <button onClick={handleCloseModal}>X</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </div>
      )}
    </>
  );
}
