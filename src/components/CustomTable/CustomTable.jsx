import {Col, Container, Row, Table} from "react-bootstrap";
import './table.style.css'

const CustomTable = () => {
    return (
        <Container>
            <Row className={'mt-3'}>
                <Col>
                  <Table className={'table_block'}>
                      <thead>
                      <tr>
                          <td className={'w-25'}>
                              {'ردیف'}
                          </td>
                          <td >
                              {'عنوان'}
                          </td>
                          <td className={'w-25'}>
                              {'عملیات'}
                          </td>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                      </tr>
                      </tbody>
                  </Table>
                </Col>
            </Row>
        </Container>
    )
}


export default CustomTable;