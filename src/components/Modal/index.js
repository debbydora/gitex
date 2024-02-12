"use client"
const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <div className="w-full flex items-center justify-center ">
      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            ></div>
            <span className=" " aria-hidden="true">
              &#8203;
            </span>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;


