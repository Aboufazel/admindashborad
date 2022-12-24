import {Col, Container, Row, Table} from "react-bootstrap";
import './table.style.css'
import ActionTableButton from "../ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

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
                            <td>
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
                            <td>
                                <Row className={'d-flex gap-2'}>
                                    <ActionTableButton icon={faTrash}
                                                       bgColor={'--color-danger '}
                                                       color={'--text-color-white'}/>
                                    <ActionTableButton icon={faEdit}
                                                       bgColor={'--color-warning'}
                                                       color={'--text-color-white'}/>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>
                                <Row className={'d-flex gap-2'}>
                                    <ActionTableButton icon={faTrash}
                                                       bgColor={'--color-danger '}
                                                       color={'--text-color-white'}/>
                                    <ActionTableButton icon={faEdit}
                                                       bgColor={'--color-warning'}
                                                       color={'--text-color-white'}/>
                                </Row>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}


export default CustomTable;