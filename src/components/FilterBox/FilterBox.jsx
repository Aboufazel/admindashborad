import {Col, Container, Row} from "react-bootstrap";
import './filter.style.css'

const FilterBox = () => {
  return(
      <Container>
        <Row>
          <Row>
            <Col className={'selection_block'}>
              <div>
                {'تعداد ردیف ها:'}
              </div>
              <div>
                <select>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </div>
            </Col>
            <Col className={'selection_block'}>
              <div>
                {'جستوجو:'}
              </div>
              <div>
                <input/>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
  )
}

export default FilterBox;