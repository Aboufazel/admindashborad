import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import CustomTable from "../../components/CustomTable/CustomTable";


const Product = () => {
  return(
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                {'داشبورد'}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {'محصولات'}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className={'main_block'}>
          <Col>
            <Row>
              <Col>
                <p>
                  {'محصولات'}
                </p>
              </Col>
            </Row>
            <Row>
              <FilterBox/>
            </Row>
            <Row>
              <Col>
                <CustomTable/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default Product;