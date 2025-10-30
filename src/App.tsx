import { useState } from "react";
import "./App.css";
import Account from "./component/account";
import Personal from "./component/personal";
import Confirmation from "./component/confirmation";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Personal />;
      case 1:
        return <Account />;
      case 2:
        return <Confirmation />;
      default:
        return <p>complete</p>;
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex w-[1020px] m-20">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li
            className={`flex md:w-full items-center ${
              currentStep === 0 ? "text-blue-600 dark:text-blue-500" : ""
            } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Personal{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li
            className={`flex md:w-full items-center ${
              currentStep === 1 ? "text-blue-600 dark:text-blue-500" : ""
            } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <span className="me-2">2</span>
              Account{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
          <li
            className={`flex items-center ${
              currentStep === 2 ? "text-blue-600 dark:text-blue-500" : ""
            }`}
          >
            <span className="me-2">3</span>
            Confirmation
          </li>
        </ol>
      </div>
      {renderStep()}
      <div className="flex items-center">
        <button
          disabled={currentStep === 0}
          onClick={handlePrev}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Prev
        </button>
        <button
          disabled={currentStep > 2}
          onClick={handleNext}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
