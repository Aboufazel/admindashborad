import {Breadcrumb, Col, Container, InputGroup, Row} from "react-bootstrap";
import '../main.style.css'
import FilterBox from "../../components/FilterBox/FilterBox";
import CustomTable from "../../components/CustomTable/CustomTable";

const Category = () => {
  return(
      <Container>
          <Row>
              <Col>
                  <Breadcrumb>
                      <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                          {'داشبورد'}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>
                          {'دسته بندی مقالات'}
                      </Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
          <Row className={'main_block'}>
              <Col>
                  <Row>
                      <Col>
                          <p>
                              {'دسته بندی مقالات'}
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


export default Category;