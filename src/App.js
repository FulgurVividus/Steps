// we use a component called App as the root component of the application
// it's like a parent component of all components

// this data doesn't depend on anything inside of the component, so placed it outside
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // says in which step we are
  const step = 1;

  // inside of component, we can define any function we want
  const handlePrevious = function () {
    alert(`Previous`);
  };

  const handleNext = function () {
    alert(`Next`);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
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
  );
}
