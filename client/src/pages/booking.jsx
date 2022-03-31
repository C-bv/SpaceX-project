import { useState, useEffect } from "react";
import RocketCard from "../components/RocketCard";
import DragonCard from "../components/DragonCard";
import PadCard from "../components/PadCard";

export default function Booking({ category }) {
    const [itemData, setItemData] = useState();

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/${category}`)
            .then(res => res.json())
            .then(data => setItemData(data))
            {console.log(itemData)}
    }, [category])

    return (
        <>
            {(typeof itemData === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                category === 'rockets' ? (
                    itemData.map((rocket) => (
                        <RocketCard rocket={rocket} key={rocket.name} />
                    ))
                ) : category === 'dragons' ? (
                    itemData.map((dragon) => (
                        <DragonCard dragon={dragon} key={dragon.name} />
                    ))
                ) : category === 'launchpads' ? (
                    itemData.map((pad) => (
                        <PadCard pad={pad} key={pad.name} />
                    ))
                ) : category === 'ships' ? (
                    <div>Ships</div>
                ): null
            )}
        </>
    );
};