import {Col, Container, Row, Table} from "react-bootstrap";
import './table.style.css'
import ActionTableButton from "../ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


import { styled } from "@stitches/react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

const TableWrapper = styled("table", {
    borderCollapse: "collapse",
    border: "none",
    fontFamily: 'iran-sans',
    width:'100%',
});

const CustomTable = ({ data, columns }) => {
    return (
        <Container className={'d-flex justify-content-center my-5'}>
            <TableWrapper>
                <thead>
                <TableHeader columns={columns} />
                </thead>
                <tbody>
                <TableRow data={data} columns={columns} />
                </tbody>
            </TableWrapper>
        </Container>
    )
}


export default CustomTable;