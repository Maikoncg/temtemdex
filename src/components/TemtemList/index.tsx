import { TemTemApiTem } from '@maael/temtem-types';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <Container fluid className="temtem-list">
      <Row>
        {data.map((temtem, index) => (
          <Col md={4}>
            <TemtemCard key={index} temtem={temtem} />
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default TemtemList;