import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonPress = () => {
    setAlertVisible(true);
  };

  const handleButtonClose = () => {
    setAlertVisible(false);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {/* items, heading are passed to ListGroup component as props and rendered in component*/}
      {/* onSelectItem is handleSelectItem(item:string) passed as a prop to ListGroup, where item will be passed in as an argument and logged to */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && <Alert buttonClose={handleButtonClose}></Alert>}
      <Button buttonPress={handleButtonPress} color="btn-danger" />
    </div>
  );
}

export default App;
