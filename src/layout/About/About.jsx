import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import CustomTable from "../../components/CustomTable/CustomTable";
import CustomModal from "../../components/CustomModal/CustomModal";


const About = () => {
  return(
      <Container>
          <Row>
              <Col>
                  <Breadcrumb>
                      <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                          {'داشبورد'}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>
                          {'درباره ما'}
                      </Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
          <Row className={'main_block'}>
              <Col>
                  <Row className={'mb-3'}>
                      <Col lg={1}>
                          <p className={'mt-1'}>
                              {'درباره ما'}
                          </p>
                      </Col>
                      <Col>
                          <CustomModal btnTitle={'ایجاد جدول'} modalTitle={'جدول جدید'}/>
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

export default About;