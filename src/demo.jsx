import { useState } from "react";
import Control, { code as ControlCode } from "./components/Control";
import CheckBoxes, { code as CheckboxCode } from "./components/CheckBoxes";
import Todo, { code as TodoCode } from "./components/Todo";
import Clock, { code as ClockCode } from "./components/Clock";
import Counter,{ code as CounterCode } from "./components/Counter";
import Effects,{ code as EffectCode } from "./components/Effect";
import Event,{ code as EventCode } from "./components/Event";
import Loop,{ code as LoopCode } from "./components/Loop";
import NestingLooping,{ code as NestLoopCode } from "./components/NestingLooping";
import Props,{ code as PropCode } from "./components/Props";
import RadioBxes,{ code as RadioCode } from "./components/Radio";
import ReuseComponent,{ code as ReuseCode } from "./components/ReuseComponent";
import RenderState,{ code as StateCode } from "./components/State";
import User from "./components/User";
import Login, { Profile, UserKey } from "./components/UserComponent";
import WithJsx,{ code as JsxCode } from "./components/WithJsx";
import WithoutJsx,{ code as WithourJsxCode } from "./components/WithoutJsx";

function Demo() {
  const [selectedComponent, setSelectedComponent] = useState("Control");

  const components = [
    { name: "Control", component: <Control />, code: ControlCode },
    { name: "CheckBoxes", component: <CheckBoxes />, code: CheckboxCode },
    { name: "Todo", component: <Todo />, code:TodoCode },
    { name: "Clock", component: <Clock />, code: ClockCode },
    { name: "Counter", component: <Counter />, code: CounterCode },
    { name: "Effect", component: <Effects />, code: EffectCode },
    { name: "Event", component: <Event />, code: EventCode },
    { name: "Loop", component: <Loop />, code: LoopCode },
    { name: "NestingLoop", component: <NestingLooping />, code: NestLoopCode },
    {
      name: "Props",
      component: <Props color="blue">This is the first content</Props>,
      code: PropCode,
    },
    { name: "Radio", component: <RadioBxes />, code: RadioCode},
    { name: "ReuseComponent", component: <ReuseComponent />, code: ReuseCode},
    { name: "State", component: <RenderState />, code: StateCode },
    { name: "User", component: <User name="Anjana" age={30} />, code: "// Code for User component" },
    { name: "Login", component: <Login />, code: "// Code for Login component" },
    { name: "Profile", component: <Profile />, code: "// Code for Profile component" },
    { name: "WithJsx", component: <WithJsx />, code: JsxCode},
    { name: "WithoutJsx", component: <WithoutJsx />, code: WithourJsxCode },
  ];

  const selected = components.find((component) => component.name === selectedComponent);

  return (
    <div className="app-container" style={{ fontFamily: "Arial, sans-serif" }}>
      <h1>React Component Demos</h1>

      {/* User Key Display */}
      <div className="user-key-display" style={{ marginBottom: "20px" }}>
        {UserKey === "&%#^$&%^*^(^(" ? (
          <h2>Special Key Detected: {UserKey}</h2>
        ) : (
          <h2>User Key: {UserKey}</h2>
        )}
      </div>

      {/* Component Selection Buttons */}
      <div className="component-list" style={{ marginBottom: "20px" }}>
        {components.map((component) => (
          <button
            key={component.name}
            onClick={() => setSelectedComponent(component.name)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedComponent === component.name ? "#4CAF50" : "#f0f0f0",
              color: selectedComponent === component.name ? "white" : "black",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {component.name}
          </button>
        ))}
      </div>

      {/* Rendered Output and Code */}
      {selected && (
        <div className="component-demo" style={{ display: "flex", gap: "20px" }}>
          {/* Code Section */}
          <div
            className="demo-code"
            style={{
              color:"#000",
              textAlign:"left",
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f0f0f0",
              whiteSpace: "pre-wrap",
              fontFamily: "Courier New, monospace",
            }}
          >
            <h2>{selectedComponent} Code</h2>
            <pre>{selected.code || "Code not available for this component."}</pre>
          </div>

          {/* Output Section */}
          <div
            className="demo-output"
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>{selectedComponent} Output</h2>
            {selected.component}
          </div>

        </div>
      )}
    </div>
  );
}

export default Demo;
