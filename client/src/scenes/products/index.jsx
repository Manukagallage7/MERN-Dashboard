import React from "react";
import {useState} from "react";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header"
import {BOx, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, UseTheme, useMediaQuery} from "@mui/material";


const Products = ()=>  {
    const {data , isLoading} = useGetProductsQuery();
    const isNonMobile = 
    console.log("data", data)

    return (
            <box>
                <Header title="PRODUCTS" subtitle="See your list of products." />
            </box>
        )
}

export default Products;