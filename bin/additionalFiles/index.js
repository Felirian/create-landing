export const additionalFiles = [
  {
    filename: 'src/components/Shared/Header.js',
    content: `import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderWr>
    <h1>Header</h1>
  </HeaderWr>
);

const HeaderWr = styled.header\`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
\`;

export default Header;`
  },
  {
    filename: 'src/components/Shared/Footer.js',
    content: `import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWr>
    <p>&copy; Landing page created by Felirian</p>
  </FooterWr>
);

const FooterWr = styled.footer\`
  background: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  width: 100%;
  bottom: 0;
\`;


export default Footer;`
  },
  {
    filename: 'src/components/Shared/SvgSelector.js',
    content: `const SvgSelector = ({ svg }) => {
  switch (svg) {
    case 'logo':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="337" height="40" viewBox="0 0 337 40" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.09 19.23L0 30.15L3.43 33.14L18.79 22.9L23.46 36.72L28.58 34.14L23.18 21.2L41.24 16.36V11.97L24.03 16.53L32.74 0L27.45 0.32L19.35 16.08L7.98 7.41L4.72 10.96L16.09 19.23Z"
                fill="#A70709"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M67.1095 38.8001V28.2501H71.1795C81.6695 28.2501 85.7995 24.9601 85.7995 15.1501C85.7995 6.12007 82.2995 2.57007 71.1795 2.57007H58.0195V38.8001H67.1095ZM67.1095 21.0001V9.67007H69.9295C74.7295 9.67007 76.5095 10.9801 76.5095 15.3601C76.5095 19.7401 74.8395 21.0001 69.9295 21.0001H67.1095ZM107.26 39.3301C117.23 39.3301 123.03 35.7801 123.03 26.6401V2.57007H114V25.8501C114 28.9301 112.85 31.5401 107.27 31.5401C101.69 31.5401 100.69 29.2401 100.69 25.8501V2.57007H91.6095V26.6401C91.6095 36.5101 97.3495 39.3301 107.27 39.3301H107.26ZM130.39 38.8101H144.33C155.24 38.8101 158.27 34.8901 158.27 28.3201C158.27 23.6701 156.03 21.0601 152.01 19.9701V19.7601C155.87 18.6101 157.28 16.1601 157.28 12.4001C157.28 5.87007 154.2 2.58007 143.18 2.58007H130.39V38.8101ZM139.47 17.2001V9.79007H141.77C146.36 9.79007 148.24 10.2101 148.24 13.3901C148.24 16.5701 146.36 17.2001 141.77 17.2001H139.47ZM139.47 31.5601V23.6201H142.66C147.67 23.6201 149.08 24.6601 149.08 27.6401C149.08 30.8201 147.62 31.5601 142.66 31.5601H139.47ZM173.82 30.9901V2.59007H164.74V38.8201H187.76V30.9901H173.82ZM192.72 38.8201H201.8V2.57007H192.72V38.8201ZM226.24 39.3401C229.63 39.3401 232.87 38.7101 235.06 37.8801V30.1001C232.29 31.0901 229.53 31.4601 226.65 31.4601C220.85 31.4601 218.24 29.3701 218.24 20.7001C218.24 12.0301 220.75 9.79007 226.65 9.79007C229.63 9.79007 232.34 10.2601 234.64 11.1001V3.32007C232.5 2.54007 229.47 2.07007 225.97 2.07007C215.21 2.07007 208.38 6.72007 208.38 20.7101C208.38 35.8501 215.38 39.3501 226.24 39.3501V39.3401ZM266.44 38.8201H276.1L262.79 2.59007H250.52L237.1 38.8201H246.55L249.42 30.4701H263.62L266.44 38.8201ZM251.93 23.0501L256.26 10.4701H256.89L261.12 23.0501H251.93ZM310.61 38.8201L300.64 25.1401C305.13 23.6301 307.22 20.2901 307.22 14.3901C307.22 5.88007 302.68 2.59007 293.23 2.59007H279.76V38.8201H288.84V26.0801H291.87L299.91 38.8201H310.61ZM288.84 9.64007H291.71C296.51 9.64007 298.24 10.5301 298.24 14.3901C298.24 18.2501 296.52 19.5101 291.71 19.5101H288.84V9.64007ZM336.71 2.59007V10.5301H327.63V38.8301H318.6V10.5301H309.52V2.59007H336.72H336.71Z"
                fill="#020204"/>
        </svg>
      );
    default:
          return <></>;
      }
    };

export default SvgSelector;`
  },
  {
    filename: 'src/components/Main/Contact.js',
    content: `
import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <ContactWr>
    <h1>Contact</h1>
  </ContactWr>
);

const ContactWr = styled.div\`
  
  padding: 20px;
  color: white;
  text-align: center;
\`;

export default Contact;`
  },
  {
    filename: 'src/styles/global.js',
    content: `import { createGlobalStyle } from 'styled-components';
import { COLORS } from '@/styles/variables';

const GlobalStyles = createGlobalStyle\`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    //border: 1px pink solid;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 0;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    max-width: 100vw;
    background-color: \${COLORS.black};
    color: \${COLORS.white};
  }
  
  main {
    overflow-x: hidden;
    max-width: 100vw;
  }

  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: \${COLORS.white};
  }

  button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {

    }

    &:disabled {

    }
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
\`;

export default GlobalStyles;`
  },
  {
    filename: 'src/styles/variables.js',
    content: `export const COLORS = {
  orange: "#DB3919",
  blue: "#1F4664",
  black: "#131313",
  darkDarkGrey: "#373737",
  darkGrey: "#444444",
  grey: "#868686",
  white: "#FFFFFF",
};

const breakpoints = {
  laptopBP: "1440px",
  mobileBP: "480px",
};

export const BREAKPOINTS = {
  laptop: \`(max-width: \${breakpoints.laptopBP})\`,
  mobile: \`(max-width: \${breakpoints.mobileBP})\`,
};

export const NAV_LINKS = [
  {
    name: "О нас",
    href: "#about",
  },
  {
    name: "Преимущества",
    href: "#benefits",
  },
  {
    name: "Предложения",
    href: "#offer",
  },
  {
    name: "Программа лояльности",
    href: "#loyalty",
  },
  {
    name: "Партнеры",
    href: "#partners",
  },
  {
    name: "Контакты",
    href: "#contacts",
  },
];

export const SOCIAL_LINKS = [
  { icon: "TgLogo", href: "" },
  { icon: "VkLogo", href: "" },
  { icon: "InstLogo", href: "" },
];`
  },
  {
    filename: 'src/App.js',
    content: `import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>About Us</h2>
        <p>This is an example landing page created with React.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;`
  },
  {
    filename: 'src/index.js',
    content: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from "./app/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle/>
    <App/>
  </>
);`
  }
];