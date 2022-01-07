import { TemTemApiTem } from '@maael/temtem-types';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import api from "../../services/Axios";
import TemtemCard from "../TemtemCard";
import ".//styles.css";

const TemtemList = () => {
  let [data, setData] = useState<TemTemApiTem[]>([]);

  const getTemtemList = () => {
    api.get(`/temtems`)
      .then((response) => setData(response.data))
      .catch((err) => console.log("Error:", err));
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
      <Row>
        <Col md="2">
          <Form.Select aria-label="Default select example">
            <option>Sort by type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md="3">
        </Col>
      </Row>
      <Row>
        {data.map((temtem, index) => (
          <Col key={index} className="d-flex justify-content-md-center mb-5" md={3}>
            <TemtemCard key={index} temtem={temtem} />
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default TemtemList;