import { styled } from "@stitches/react";



const TableHeaderCell = styled("th", {
    backgroundColor: "#3c8dbc",
    padding: 12,
    fontWeight: 500,
    textAlign: "center",
    fontSize: 14,
    color: "#ffff",
    "&:first-child": {
        borderTopLeftRadius: 0,
    },
    "&:last-child": {
        borderTopRightRadius: 0,
    },
});

export function TableHeader({ columns }){
    return (
        <tr>
            {columns.map((column, columnIndex) => (
                <TableHeaderCell
                    key={`table-head-cell-${columnIndex}`}
                    style={{ width: column.width }}
                >
                    {column.title}
                </TableHeaderCell>
            ))}
        </tr>
    );
}