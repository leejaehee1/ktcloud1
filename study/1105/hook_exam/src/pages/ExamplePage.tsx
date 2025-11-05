import InputFocusExample from "../components/InputFocusExample";
import ParentComponent from "../components/UseImperativeHandle";
import UseIdExample from "../components/UseIdExample";

export default function ExamplePage() {
  return (
    <div>
      <h1>ExamplePage</h1>
      <InputFocusExample />
      <ParentComponent />
      <UseIdExample />
    </div>
  );
}
