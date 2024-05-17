import styles from '../styles/landing.styles.css';
import heroStyles from '../styles/hero.styles.css';
import MainLogo from '../components/logoSVG.component';
import Plx from 'react-plx';
import MainMenu , {links as menuLinks} from '../components/mainMenu.component';
import ScrollAnimation from 'react-animate-on-scroll';
import Background from '../components/background.component';
import Hero from '../components/hero.component';

//https://codesandbox.io/s/plx-framer-motion-demo-flyux?file=/src/intro.js

export const meta = () => {
  return [
    {title: "Evolving Graphic Design | Stephen Kloepfer | Branding & Design"} ,
    {name: "copyright", content: "Copyright &amp;copy; 2023 Stephen Kloepfer, All rights reserved."},
    {name: "description", content: "In today's evolving market, it is imperative your design evolves alongside. Stephen Kloepfer is here to help with all your branding and graphic design needs."},    
   {name: "og:title", content: "Stephen Kloepfer | Branding and Design"},
   {name: "og:description", content: "Stephen Kloepfer specializes in evolving graphic design to compete in today's fast-paced market."},
   {name: "og:image", content: "/social_preview.png"},
  ];
};

export const links = () => [
  {rel: "stylesheet", href: styles},
  {rel: "stylesheet", href: heroStyles},
  ...menuLinks(),
];

const headingData = [
  {
    start: "self",
    duration: "30vh",
    easing: 'ease',
    properties: [
      {
        startValue: 0,
        endValue: -29,
        unit: "vh",
        property: "translateY",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
  {
    start: 'self',
    startOffset: "-2vh",
    duration: "110vh",
    easing: 'ease',
    properties: [
      {
        startValue: -30,
        endValue: -100,
        unit: "vh",
        property: "translateY",
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  }
];

const logoData = [
  {
    start: "self",
    startOffset: "-80vh",
    duration: "50vh",
    easing: 'ease',
    properties: [
      {
        startValue: 0,
        endValue: 100,
        unit: "vh",
        property: "translateY",
      }
    ]
  }
]

export default function Index() {

  return (
    <div className='main'>     
    <MainLogo className='logo' color='#018aaa' logoID='logo1' />
    <Hero />
      <div className='scroller'>
       <div className='spacer' />
        <ScrollAnimation animateIn='slideInUp'>
          <MainMenu scrolling={true} />
        </ScrollAnimation>

      </div>
      
    </div>
  );
}
