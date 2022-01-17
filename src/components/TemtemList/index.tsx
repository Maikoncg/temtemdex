import { TemTemApiTem, TemTemType } from '@maael/temtem-types';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TemtemApi from "../../services/Axios";
import SortByFields from '../SortByFields';
import TemtemCard from "../TemtemCard";
import ".//styles.css";

const TemtemList = () => {
  let [data, setData] = useState<TemTemApiTem[]>([]);
  let [sortedType, setSortedType] = useState<TemTemType>();

  const getTemtemList = () => {
    TemtemApi.get(`/temtems`)
      .then((response) => setData(response.data))
      .catch((err) => console.log("Error:", err));
  }

  const getSortedType = () => {
    return data.map(temtemList => temtemList).filter(temtem => !sortedType || temtem.types.includes(sortedType!));
  }
  
  useEffect(() => {
    getTemtemList();
  }, []);

  return (
    <Container fluid className="TemTemList temtem-list-container mt-4">
      <Row className="justify-content-md-center mb-4">
        <Col md="2">
          <img className="temtem-logo" alt="temtem-logo" src={require("../../assets/images/temtem-logo.png")} />
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-4">
        <Col md="2">
          <SortByFields setSortedType={setSortedType} />
        </Col>
        <Col md="1">
          {/* <SortByFields setSortedType={getSortedType} /> */}
        </Col>
      </Row>
      <Row>
        {(getSortedType())?.map((temtem, index) => (
          <Col key={index} className="d-flex justify-content-md-center mb-5" md={3}>
            <TemtemCard key={index} temtem={temtem} />
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default TemtemList;