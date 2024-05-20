import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <button
        className="fixed inset-0 bg-gray-800 bg-opacity-75"
        onClick={onClose}
      ></button>
      <div className="bg-white p-6 w-96 rounded-lg shadow-lg z-10">
        {children}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
