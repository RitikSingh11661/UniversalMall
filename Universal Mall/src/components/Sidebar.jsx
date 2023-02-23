import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialState = searchParams.getAll("category")
    const initialOrder = searchParams.get("order")
    const [category, setCategory] = useState(initialState || [])
    const [order, setOrder] = useState(initialOrder || "");
    // console.log(initialState);
    const handleChange = (e) => {
        let newCategory = [...category];
        let value = e.target.value;

        if (newCategory.includes(value)) {
            newCategory.splice(newCategory.indexOf(value), 1);
        } else {
            newCategory.push(value);
        }

        setCategory(newCategory);
        // console.log(category)
    }

    useEffect(() => {
        let params = {
            category,
        }

        order && (params.order = order);

        setSearchParams(params)
    }, [category, order])

    const handleSort = (e) => {
        // console.log(e.target.value)
        setOrder(e.target.value)
    }

    return (
        <div>
            <h3>Filter by</h3>
            <div>
                <input type="checkbox" value="MANSIYAORANGE" onChange={handleChange} checked={category.includes("MANSIYAORANGE")}></input>
                <label>MANSIYAORANGE</label>
            </div>
            <div>
                <input type="checkbox" value="Vighnaharta" onChange={handleChange} checked={category.includes("Vighnaharta")}></input>
                <label>Vighnaharta</label>
            </div>
            <div>
                <input type="checkbox" value="Mahi" onChange={handleChange} checked={category.includes("Mahi")}></input>
                <label>Mahi</label>
            </div>
            <div>
                <input type="checkbox" value="Lucky Jewellery" onChange={handleChange} checked={category.includes("Lucky Jewellery")}></input>
                <label>Lucky Jewellery</label>
            </div>
            <div>
                <input type="checkbox" value="HAPPY STONING" onChange={handleChange} checked={category.includes("HAPPY STONING")}></input>
                <label>HAPPY STONING</label>
            </div>
            <div>
                <input type="checkbox" value="DRRAGON" onChange={handleChange} checked={category.includes("DRRAGON")}></input>
                <label>DRRAGON</label>
            </div>
            <br></br>
            <h3>Sort by Price</h3>
            <div onChange={handleSort}>
                <input type="radio" name='order' value={"asc"} checked={order === "asc"}></input>
                <label>Ascending</label>
                <input type="radio" name='order' value={"desc"} checked={order === "desc"}></input>
                <label>Descending</label>
            </div>
        </div>
    )
}