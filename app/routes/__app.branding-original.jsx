import { useEffect, useState } from 'react';
import PageHeader, { links as headerStyles } from '../components/pagesHeader.component';
import styles from '../styles/global.styles.css'
import MainMenu, {links as menuLinks} from '../components/mainMenu.component';
import pageStyles from '../styles/page.styles.css';

import brandingInfo from '../../brandingInfo.json';
import { useLoaderData, useNavigate } from '@remix-run/react';
import Modal, {links as modalStyles} from '../components/modal.component';

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: "stylesheet", href: pageStyles},
  ...menuLinks(),
  ...headerStyles(),
  ...modalStyles(),
];

export const meta = () => {
  return [
    {title: "Brand Identity Services | Stephen Kloepfer Branding & Design?"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition."},    
   {name: "og:title", content: "Stephen Kloepfer Branding Services"},
   {name: "og:description", content: "I specialize in creating eye-catching and competitve brand identities to help you stand out amongst the competition."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

const Branding = () => {

    const [triggered, setTriggered] = useState(false);
    const [loaded, hasloaded] = useState(false);
    const [activeBrand, setActiveBrand] = useState();
    const [brandIsActive, setBrandBool] = useState(false);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const navigate = useNavigate();

    const triggerSlide = async() => {
        await delay(250);
        hasloaded(true);
        setTriggered(true);
    }

    const data_from_child = async(data) => {
      if(data != '' && data != undefined) {
        closeSlide();
        await delay(500);
        navigate('/' + data);
      }
    }

    const closeSlide = () => {      
      setTriggered(false); 
    }    

    const brandData = useLoaderData();

    useEffect(() => {
        if(!loaded){triggerSlide();}
    })

    const [hoveredItem, setHovered] = useState('');

    function changeHover(newItem){
      setHovered(newItem.name);
    }

    function unsetHover() {
      setHovered('');
    }

    function selectBrand(brand){
      setActiveBrand(brand);
      setBrandBool(true);
    }

    const onClose = () => {
      setActiveBrand('');
      setBrandBool(false);
    }

    const onReopen = () => {
      console.log('fire');
      hasloaded(false);
    }

  return (
    <div className='main'>
      <MainMenu 
        page='branding'
        onReopen={onReopen}
      />
      <div className={triggered ? `slider backgroundGreen activeSlide` : `slider inactiveSlide`} >
      <button onClick={closeSlide} className={triggered? 'button' : 'button hiddenButton'} >x</button>
        <PageHeader background='#1A746F' setter={data_from_child} onClose={closeSlide} active='branding' />        
        <div>
          <h1 className='heading'>Brand Identity</h1>
          <div className='submenuBox'>          
            
            <div className='submenuList'>
            {
              brandData.branding.map((brand) => (
                <div key={brand.name} className="bounding" onMouseEnter={() => changeHover(brand)} onMouseLeave={unsetHover}>
                    <img src="/images/icon_SK.svg" alt="highlight" className={
                        hoveredItem === brand.name ? `highlightImage` : `highlightImage offImage`
                    } />
                        <a><h2 
                          className={hoveredItem === brand.name ? `menuItem active` : `menuItem` }
                          onClick={() => selectBrand(brand)}
                        >
                          {brand.name}
                        </h2></a>
                </div>
              ))
            }
            
            </div>
                        
        </div>
                    
      </div>
      
    </div>
    <Modal 
      onClose={onClose} 
      className={brandIsActive ? 'openModal' : 'closeModal'} 
      color='black'
      data={activeBrand}
    />
    
    </div>
  );
}

export default Branding;

export async function loader() {
  return brandingInfo;
}