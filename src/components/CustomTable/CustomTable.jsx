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
    fontFamily: "Anek Telugu",
});

const CustomTable = ({ data, columns }) => {
    return (
        <Container>
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