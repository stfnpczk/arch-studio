import { useCallback, useEffect, useRef } from "react";

export default function Modal({ open, onClose, children }) {
  const modalRef = useRef(null);

  const onClick = useCallback(
    ({ target }) => {
      const { current: el } = modalRef;
      if (target === el) {
        onClose();
      }
    },
    [onClose],
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) {
      el.showModal();
    }
  }, [open]);

  return (
    <dialog
      className={`${!open ? "closing" : ""} relative m-0 mx-auto w-screen max-w-[525px] overflow-hidden p-0`}
      ref={modalRef}
      onClose={onClose}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div className="z-20 mx-auto h-[354px] w-screen max-w-[525px] bg-veryLightGrey">
        {children}
      </div>
    </dialog>
  );
}
