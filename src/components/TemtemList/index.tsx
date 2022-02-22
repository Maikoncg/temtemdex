import { TemTemApiTem, TemTemType } from '@maael/temtem-types';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TemtemApi from "../../services/Axios";
import SortByTypeField from '../SortByTypeField';
import SortByNameField from '../SortByNameField';
import TemtemCard from "../TemtemCard";
import ".//styles.css";

const TemtemList = () => {
  let [data, setData] = useState<TemTemApiTem[]>([]);
  let [sortedType, setSortedType] = useState<TemTemType>();
  let [sortedName, setSortedName] = useState();

  const getTemtemList = () => {
    TemtemApi.get(`/temtems`)
      .then((response) => setData(response.data))
      .catch((err) => console.log("Error:", err));
  }

  const getSortedTemtem = () => {
    return data.map(temtemList => temtemList).filter(temtem => {
      console.log(sortedType);
      const name = temtem.name.toLowerCase().includes(sortedName!);
      const type = temtem.types.includes(sortedType!);
      if (sortedName && sortedType && type) {
        return name && type;
      } else if (sortedName && sortedType && !type) {
        return 0;
      } else if (name && !sortedType) {
        return name && !sortedType;
      } else if (!sortedName && type) {
        return !sortedName && type;
      } else {
        return !sortedName && !sortedType;
      }
    });
  }
  
  useEffect(() => {
    getTemtemList();
  }, []);

  return (
    <Container fluid className="TemTemList temtem-list-container mt-4">
      <Row className="justify-content-md-center mb-4">
        <Col md="3">
          <img className="temtem-logo" alt="temtem-logo" src={require("../../assets/images/temtem-logo.png")} />
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-4">
        <Col md="2">
          <SortByNameField setSortedName={setSortedName} />
        </Col>
        <Col md="2">
          <SortByTypeField setSortedType={setSortedType} />
        </Col>
      </Row>
      <Row>
        {(getSortedTemtem())?.map((temtem, index) => (
          <Col key={index} className="d-flex justify-content-md-center mb-5" md={3}>
            <TemtemCard key={index} temtem={temtem} />
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default TemtemList;