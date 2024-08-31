import "./App.css";

export default function App() {
  return <Calculator />;
}

function Calculator() {
  return (
    <div className="CalculatorContainer">
      <div className="InputSlots">
        <FirstSlot />
        <OperatorSlot />
        <SecondSlot />
      </div>

      <div className="ResultSlot">
        <ResultSlot />
      </div>
      <div className="InputButtons">
        {[...Array(10)].map((x, i) => (
          <Button value={i} col={i === 0 ? 1 : ""} row={i === 0 ? 4 : ""} />
        ))}
        <Evaluate />
        <Clear />
      </div>
    </div>
  );
}

function FirstSlot() {
  return <input type="text" id="firstSlot"></input>;
}

function SecondSlot() {
  return <input type="text" id="secondSlot"></input>;
}

function OperatorSlot() {
  return (
    <select id="operatorSlot">
      <option label="-" value="-"></option>
      <option label="+" value="+"></option>
      <option label="*" value="*"></option>
      <option label="/" value="/"></option>
    </select>
  );
}

function ResultSlot() {
  return <input type="text" id="resultSlot" readOnly></input>;
}

function Button(props) {
  function changeValue(newValue) {
    if (document.getElementById("firstSlot").value === "") {
      document.getElementById("firstSlot").value = newValue;
    } else if (document.getElementById("secondSlot").value === "") {
      document.getElementById("secondSlot").value = newValue;
    }
  }
  return (
    <button
      onClick={() => changeValue(props.value)}
      style={{ gridRow: props.row, gridColumn: props.col }}
    >
      {props.value}{" "}
    </button>
  );
}

function Evaluate() {
  function Calculation() {
    var firstNum = parseFloat(document.getElementById("firstSlot").value);
    var secondNum = parseFloat(document.getElementById("secondSlot").value);
    switch (document.getElementById("operatorSlot").value) {
      case "-":
        return firstNum - secondNum;

      case "+":
        return firstNum + secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      default:
        break;
    }
  }
  return (
    <button
      onClick={() => {
        document.getElementById("resultSlot").value = Calculation();
      }}
    >
      =
    </button>
  );
}

function Clear() {
  function clear() {
    document.getElementById("firstSlot").value = "";
    document.getElementById("secondSlot").value = "";
    document.getElementById("resultSlot").value = "";
  }
  return <button onClick={clear}>C</button>;
}
