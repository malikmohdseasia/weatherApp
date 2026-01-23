const LogoutModal = ({ showModal, setShowModal, onConfirm, dark }: any) => {
  if (!showModal) return null;

  return (
    <div className={`fixed inset-0  flex items-center justify-center z-50
   `}>
      <div className={`bg-white rounded-lg w-96 p-6 
         ${!dark ? "bg-linear-to-r from-[#444444] to-black" : "bg-[linear-gradient(90deg,#D9D9D9_0%,#292929_100%)]"}
        `}>
        <h2 className={`text-lg font-semibold text-gray-800 font-poppins ${!dark?'text-white':''}`}>
          Confirm Logout
        </h2>

        <p className={`text-sm text-gray-600 mt-3 font-poppins ${!dark?'text-white':''}`}>
          Are you sure you want to logout?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={setShowModal}
            className={`px-4 py-2 rounded-md border text-gray-600 hover:bg-linear-to-r from-[#444444] to-black cursor-pointer font-poppins ${!dark?'text-white':''}`}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 cursor-pointer font-poppins"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;