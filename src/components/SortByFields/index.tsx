import { Dropdown, DropdownButton } from "react-bootstrap";
import TemtemApi from "../../services/Axios";
import { TemTemApiType } from "@maael/temtem-types";
import { useEffect, useState } from "react";
import ".//styles.css";

type Props = {
  setSortedType: Function,
};

const SortByFields: React.FC<Props> = ({ setSortedType }) => {
  let [data, setData] = useState<TemTemApiType[]>([]);
  const api = "https://temtem-api.mael.tech";

  const getTemtemTypes = () => {
    TemtemApi.get(`/types`)
      .then((response) => setData(response.data))
      .catch((err) => console.log("Error:", err));
  }

  useEffect(() => {
    getTemtemTypes();
  }, []);

  const [selected, setSelected] = useState('Sort by type ');
  const handleSelect = (event: any) => {
    setSelected(event);
    setSortedType(event);
  };

  return (
    <Dropdown>
      <DropdownButton onSelect={handleSelect} className="dropdown-types" variant="light" title={`${selected}`}> 
        {data.map((type) => (
          <Dropdown.Item key={type.name} eventKey={type.name}> 
            <img width="25" height="25" alt={type.name} src={`${api}${type.icon}`} /> {type.name} 
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  )
}

export default SortByFields;