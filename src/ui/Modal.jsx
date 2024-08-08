function Modal({ children, open, onClose }) {
  return (
    <div onClick={onClose} className={` ${!open && " hidden"} px-4 fixed  inset-0  transition-colors   visible  bg-black/30   h-full w-full  flex justify-center items-center `}>
      {children}
    </div>
  );
}

export default Modal;
