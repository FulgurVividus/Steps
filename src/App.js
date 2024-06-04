import { useState } from "react";

// this data doesn't depend on anything inside of the component, so placed it outside
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// we use a component called App as the root component of the application
// it's like a parent component of all components
export default function App() {
  // 1. create a state variable
  // 2. use the state in JSX
  // 3. update the state in the event handling (example: handlePrevious & handleNext)
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // inside of component, we can define any functions we want
  const handlePrevious = function () {
    if (step > 1) {
      // updating state based on the current state
      setStep((curStep) => curStep - 1);
    }
  };

  const handleNext = function () {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          {/* onEvent={() => ...} OR onEvent={function} is handling events in React way */}
          {/* in () it's not a function call, it IS a really function */}
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious} // we just passing a value into the function
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

//! SOME NOTES

// 1. useState
// -> is a function and takes an argument (default value of the state variable)
// -> returns an array
// -> const [state variable (1st value), setNameOfStateVariable] = useState(argument)
// setNameOfStateVariable is a function for updating the state variable
// -> useState is ony allowed to call on the top-level of the function

// 2. any function in React that starts from 'use' is called 'hook'
