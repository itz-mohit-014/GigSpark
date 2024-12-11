import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentStep } from "../../slices/formSteps";
import { useDispatch } from "react-redux";

const PublishGigPopup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
    onUpdate();
  };

  const onUpdate = () => {
    dispatch(setCurrentStep(1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">Publish Your Gig</h2>
        <p className="text-gray-600 mb-6">
          Do you want to publish the gig, update the details, or cancel the
          publishing process?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onUpdate}
            type="button"
            className="px-4 py-2 text-sm text-blue-700 bg-blue-100 rounded hover:bg-blue-200 focus:outline-none"
          >
            Update Data
          </button>

          <button
            type="submit"
            className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none"
          >
            Publish Gig
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishGigPopup;
