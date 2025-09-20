import React from 'react'
import { Box, useTheme} from "@mui/material";
import { useGetCustomersQuery } from 'state/api';
import Header from "components/Header";
import {DataGrid} from "@mui/x-data-grid";

const Customers = () => {
    const theme = useTheme();
    const {data, isLoading } = useGetCustomersQuery();
    console.log("data", data);

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.5,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "",
            headerName: "ID",
            flex: 1,
        }
    ]

    return(
        <Box m="1.5rem 2.5rem">
            <Header title="CUSTOMERS" subtitle="List of Customers" />
            <Box>
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) =>}
                    rows={data || []}
                    columns={columns}
                />
            </Box>
        </Box>
    )
};

export default Customers