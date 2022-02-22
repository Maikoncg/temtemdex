import { Form } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

type Props = {
  setSortedName: Function,
};

const SortByFields: React.FC<Props> = ({ setSortedName }) => {
  let [name, setName] = useState('');

  const handleName = (event: { target: { value: string }}) => {
    setName(event.target.value);
    setSortedName(event.target.value.toLowerCase());
  }

  return (
    <Form.Group>
      <Form.Control
        value={name}
        onChange={handleName}
        type="text"
        placeholder="Filter by Name"
        id="field-name"
      />
    </Form.Group>
  )
}

export default SortByFields;