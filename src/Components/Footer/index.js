import React, {useState, useEffect} from "react";
import { client } from "../../Helper/ApiConstants";

export default function Footer() {
    const [footerNavItem, setFooterNavItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    client
        .getEntries({content_type: "footerNavItem"})
        .then((response) => {
            setFooterNavItem(response)
            setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);

    console.log(footerNavItem)

    if(isLoading){
        return <div>is loading...</div>
    }
     
/*     const footerItems = footerNavItem.map((item) => {
        return(
            <div>
                <img src={item[0].fields.footerLogo.fields.file.url}/>
            </div> 
        )
    })
 */
 


    return (
        <div>
            {footerNavItem}
            Footer
        </div>
    );
}