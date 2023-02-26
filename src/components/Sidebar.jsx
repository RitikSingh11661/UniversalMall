import { Box, Center, Checkbox, Divider, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


export const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("brand")
    const initialOrder = searchParams.get("order")
    const initialPage = searchParams.getAll("page")
    const [brand, setBrand] = useState(initialState || [])
    const [order, setOrder] = useState(initialOrder || "");
    // console.log(initialState);
    const handleChange = (e) => {
        let newBrand = [...brand];
        let value = e.target.value;

        if (newBrand.includes(value)) {
            newBrand.splice(newBrand.indexOf(value), 1);
        } else {
            newBrand.push(value);
        }

        setBrand(newBrand);
        // console.log(brand)
    }

    useEffect(() => {
        let params = {
            brand,
        }

        order && (params.order = order);

        setSearchParams(params)
    }, [brand, order])

    const handleSort = (e) => {
        // console.log(e.target.value)
        setOrder(e.target.value)
    }

    return (
        <Box p={5} border="1px solid black" borderRadius={30} bgColor={"#f6f3f9"}  >
            <Center h={"50px"} fontSize="lg">
                Sort by Price
            </Center>
            <Stack
                p={0}
                direction={{
                    base: "row",
                    sm: "row",
                    md: "row",
                    lg: "column",
                }}
            >

                <div onChange={handleSort} style={{ margin: "left" }}>
                    <Grid
                        templateColumns={{
                            base: "repeat(2, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(1, 1fr)",
                        }}
                    >
                        <div>
                            <input type="radio" name='order' value={"asc"} checked={order === "asc"}></input>
                            <label>Low to High</label>
                        </div>
                        <div>
                            <input type="radio" name='order' value={"desc"} checked={order === "desc"}></input>
                            <label>High to Low</label>
                        </div>
                    </Grid>
                </div>

            </Stack>
            <Divider p={1} />
            <Stack
                p={2}
                direction={{
                    base: "row",
                    sm: "row",
                    md: "row",
                    lg: "column",
                }}
            >

                <Center h={"50px"} fontSize="lg">
                    Filter By

                </Center>
                <Text as={"b"}>Brand</Text>
                <Stack pl={5} ml={10} mt={1} spacing={1}
                    direction={{
                        base: "row",
                        sm: "row",
                        md: "row",
                        lg: "column",
                    }}>
                    <Grid
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(1, 1fr)",
                        }}>
                        <Checkbox
                            value="MANSIYAORANGE" onChange={handleChange} isChecked={brand.includes("MANSIYAORANGE")}
                        >
                            MANSIYAORANGE
                        </Checkbox>
                        <Checkbox
                            value="Vighnaharta" onChange={handleChange} isChecked={brand.includes("Vighnaharta")}
                        >
                            Vighnaharta
                        </Checkbox>
                        <Checkbox
                            value="Lucky Jewellery" onChange={handleChange} isChecked={brand.includes("Lucky Jewellery")}
                        >
                            Lucky Jewellery
                        </Checkbox>
                        <Checkbox
                            value="HAPPY STONING" onChange={handleChange} isChecked={brand.includes("HAPPY STONING")}
                        >
                            HAPPY STONING
                        </Checkbox>
                        <Checkbox
                            value="Miss Chase" onChange={handleChange} isChecked={brand.includes("Miss Chase")}
                        >
                            Miss Chase
                        </Checkbox>
                        <Checkbox
                            value="Elendra jeans" onChange={handleChange} isChecked={brand.includes("Elendra jeans")}
                        >
                            Elendra jeans
                        </Checkbox>
                        <Checkbox
                            value="EditLook" onChange={handleChange} isChecked={brand.includes("EditLook")}
                        >
                            EditLook
                        </Checkbox>

                        <Checkbox
                            value="GRADELY" onChange={handleChange} isChecked={brand.includes("GRADELY")}
                        >
                            GRADELY
                        </Checkbox>

                        <Checkbox
                            value="Spykar" onChange={handleChange} isChecked={brand.includes("Spykar")}
                        >
                            Spykar
                        </Checkbox>
                    </Grid>
                </Stack>

                <br></br>
            </Stack>
        </Box>

    )
}