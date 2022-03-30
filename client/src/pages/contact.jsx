import { useState, useEffect } from "react"

export default function Contact() {
    const [contactData, setContactData] = useState();

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/company")
            .then(res => res.json())
            .then(data => setContactData(data))
    }, [])

    return (
        <>
            <div className="contact">Contact Us</div>
            {(typeof contactData === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>Where are we ?</h2>
                    <p>Address : {contactData.headquarters.address}</p>
                    <p>City : {contactData.headquarters.city}</p>
                    <p>State : {contactData.headquarters.state}</p>

                    <h2>Socials links</h2>
                    <p>Website : <a href={contactData.links.website} target="_blank" rel="noreferrer" >{contactData.links.website}</a></p>
                    <p>Flickr : <a href={contactData.links.flickr} target="_blank" rel="noreferrer">{contactData.links.flickr}</a></p>
                    <p>Twitter : <a href={contactData.links.twitter} target="_blank" rel="noreferrer" >{contactData.links.twitter}</a></p>
                    <p>Elon's twitter : <a href={contactData.links.elon_twitter} target="_blank" rel="noreferrer">{contactData.links.elon_twitter}</a></p>
                </div>
            )}
        </>
    )
}