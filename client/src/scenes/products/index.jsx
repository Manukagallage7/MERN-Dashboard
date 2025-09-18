import React from "react";
import {useState} from "react";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header"
import {Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, UseTheme, useMediaQuery, useTheme} from "@mui/material";
import { Category } from "@mui/icons-material";

const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
}) => {
    theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
            <Card
                sx={{
                    backgroundImage: "none",
                    backgroundColor: themeSettings.palette.background.alt,
                    borderRadius: "0.55rem"
                }}
            >
                <CardContent>
                    <Typography sx={{fontSize: 14}} color={theme.palette.secondary[700]} gutterBottom>
                        {category}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{mb: "1.5rem"}} color={theme.palette.secondary[400]}>
                        ${Number(price).toFixed(2)}
                    </Typography>
                    <Rating value={rating} readOnly />

                    <Typography>

                    </Typography>
                </CardContent>
                <CardContent>
                    <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                    >
                        see More
                    </Button>
                </CardContent>
                <Collapse
                    in={isExpanded}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                        color: theme.palette
                    }}
                >
                </Collapse>
            </Card>
    )
}

const Products = ()=>  {
    const {data , isLoading} = useGetProductsQuery();
    const isNonMobile =  useMediaQuery("min-width: 100px");
    console.log("data", data)

    return (
            <Box m="1.5rem 2.5rem">
                <Header title="PRODUCTS" subtitle="See your list of products." />
                {data || !isLoading ? (
                <Box mt="20px" display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" justifyContent="space-between" rowGap="1.33%"
                    sx={{"& > div": {gridColumn: isNonMobile ? undefined: "span 4"}}}>
                        {data.map() =>(

                        )}
                </Box>
                ):( 
                    <>Loading...</>
                )}
            </Box>
        )
}

export default Products;