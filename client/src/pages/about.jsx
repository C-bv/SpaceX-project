import { useState, useEffect } from "react";

export default function About() {
    const [aboutData, setAboutData] = useState();

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/company")
            .then(res => res.json())
            .then(data => setAboutData(data))
    }, [])

    return (
        <>
            <div className="about">About the compagny</div>
            {(typeof aboutData === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>The compagny</h1>
                    <h2>{aboutData.name}</h2>
                    <p>{aboutData.summary}</p>
                    <p>CEO : {aboutData.founder}</p>
                    <h3>{aboutData.name} in numbers</h3>
                    <p>Founded in : {aboutData.founded}</p>
                    <p>Employees : {aboutData.employees}</p>
                    <p>Valuation : {aboutData.valuation} $</p>
                    <p>Launch sites : {aboutData.launch_sites}</p>
                    <p>Test sites : {aboutData.test_sites}</p>
                    <p>Vehicles : {aboutData.vehicles}</p>
                </div>
            )}
        </>
    );
};