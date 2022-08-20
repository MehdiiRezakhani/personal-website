import React from 'react';
//style
import styles from './Projects.module.scss'
//media
import CryptoPic from './Media/CryptoPic.jpg';
import OnlineShopPic from './Media/Online_shop.jfif';
import DorminacoPic from './Media/Dormincao.png';
import MobileAppsPic from './Media/Mobile-apps.jpg';
import SahadProject_Pic from './Media/SahadProject_Pic.png';
import CDAP_Pic from './Media/CDAPProject_Pic.png'
const Projects = () => {
    const Project = [{name:"Crypto Project", link:"https://project1.mehdirezakhani.ir/", image:CryptoPic, description:"This project shows the current price, 24 hours change, market cap and … of crypto. API from https://www.coingecko.com  is used by Axios. I used ReactJs, React-Router-Dom and CSS in this project.", source:"https://github.com/MehdiiRezakhani/crypto-view"},
    {name:"Online-Shop", link:"https://project2.mehdirezakhani.ir/", image:OnlineShopPic, description:"This project is A Single-Page-Application. API from https://fakestoreapi.com/ is used by Axios. I used ReactJS, React-Router-Dom, and CSS in this project.", source:"https://github.com/MehdiiRezakhani/Online-shop"},
    {name:"Dorminaco.ir", link:"https://Dorminaco.ir", image:DorminacoPic, description:"Developed interactive JavaScript applications. Wrote HTML code to structure pages. Developed custom web component. Wrote code to fetch data from remote API."},
    {name:"Mobile Apps", link:"https://cafebazaar.ir/developer/mehdi-253", image:MobileAppsPic, description:"Production and development of educational application. Application development is my favorite job and I have some experience in Android  programming. I have published several Android apps in Cafe Bazaar."},
    {name:"SahadCollection", link:"https://sahadcollection.ir/", image:SahadProject_Pic, description:"WordPress has been used as a CMS to create this landing page and Elementor plugin has been used as a  page builder. There is some HTML and CSS code as well."},
    {name:"CDAP", link:"http://cdap.digid.ca/", image:CDAP_Pic, description:"WordPress has been used as a CMS to create this landing page and Elementor plugin has been used as a  page builder. There is some HTML and CSS code as well."}
    
    ]; 
    return (
        <div className={styles.MyProjects}>
        <span className={styles.HeadingShadow}>MY PROJECT</span>
        <h3>Latest Project</h3>
        <div className={styles.ProjectsSection}>
            {Project.length ? Project.map(item => 
                <div className={styles.ProjectBox} key={item.name}> 
                    <div>
                        <div>
                            <img src={item.image} alt={item.name}/>
                        </div>
                        <h4>{item.name}</h4>
                        <a href={item.link} target="_blank" rel="noreferrer">View</a>
                    </div>
                    <div className={styles.Description}>
                        {item.description ? 
                            <p>{item.description} {item.source ? 
                                <a href={item.source} target="_blank" rel="noreferrer">Source</a> : null}
                            </p>
                            :   <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat
                                </p> 
                        }
                    </div>
                </div>) 
            : null} 
        </div>
        <div className={styles.ProjectOfferBox}>
                <div>
                    <p>Have any project in mind?</p>
                    <span>I'm available for freelancing</span>
                </div>
                <a href="https://wa.me/+989210393561" target="_blank" rel="noreferrer">Tell Me</a>
        </div>
    </div>
    );
};

export default Projects;