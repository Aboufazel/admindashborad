import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";


const AccountTotal = () => {
  return(
      <Container>
          <Row>
              <Col>
                  <Breadcrumb>
                      <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                          {'داشبورد'}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>
                          {'حساب معین'}
                      </Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
          <Row className={'main_block'}>
              <Col>
                  <Row className={'mb-3'}>
                      <Col lg={1}>
                          <p className={'mt-1'}>
                              {'حساب معین'}
                          </p>
                      </Col>
                      <Col>

                      </Col>
                  </Row>
                  <Row>
                      <FilterBox/>
                  </Row>
              </Col>
          </Row>
      </Container>
  )
}

export default AccountTotal;