import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";

export default function Booking() {
    const [itemData, setItemData] = useState();

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then(res => res.json())
            .then(data => setItemData(data))
    }, [])

    return (
        <>
            {(typeof itemData === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                itemData.map((item) => (
                    <ItemCard item={item} key={item.name} />
                ))
            )}
        </>
    );
};