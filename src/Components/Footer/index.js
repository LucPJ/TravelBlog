import React, {useState, useEffect} from "react";
import { client } from "../../Helper/ApiConstants";
import { v4 as uuidv4 } from "uuid";


export default function Footer() {
    const [navData, setNavData] = useState();
    const [footerNavItem, setFooterNavItem] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    client
        .getEntries({content_type: "footerNavItem"})
        .then((response) => setNavData(response.items))
        .catch((err) => console.log(err));
    }, []);

    console.log(footerNavItem)
  
    useEffect(() => {
        if (navData) {
          setFooterNavItem(
            navData.map((item) => {
              if (item.fields.icon) {
                return (
                  <li key={uuidv4()} className="logo">
                      <img
                        src={item.fields.footerLogo.fields.file.url}
                        alt="Logo"
                      />
                  </li>
                );
              } 
            })
          );
    
          setIsLoading(false);
        }
      }, [navData]);

    if(isLoading) {
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