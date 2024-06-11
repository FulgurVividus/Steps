import { useState } from "react";

// this data doesn't depend on anything inside of the component, so placed it outside
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// we use a component called App as the root component of the application
// it's like a parent component of all components
export default function AppV2() {
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

          {/* example of children prop */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// StepMessage component
function StepMessage({ step, children }) {
  return (
    <>
      <div className="message">
        <h3>Step {step} </h3>
        {children}
      </div>
    </>
  );
}

// Button component
// Children prop
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

//! SOME NOTES

// 1. children prop - is a prop that each React component automatically receives.
// and the value of the children prop is EXACTLY what is between the opening and closing tags of the component
// 2. children - is predefined word in React
