import React from 'react';

const current = new Date();
const currYear = `${current.getFullYear()}`;

const S_Footer = () => {
  return (
    <footer className="s-footer">
      <p style={{textAlign: "center", fontSize: ".75em", marginTop: "0"}}>Additional Resources:</p>
      <ul className="s-footer__quickLinks">
        <li>
          <a href="https://kingston.com" target="_blank" rel="noreferrer">
            Kingston.com
          </a>
        </li>
        <li>
          <a href="https://www.kingstonloda.com" target="_blank" rel="noreferrer">
            Library of Digital Assets (LoDA)
          </a>
        </li>
        <li>
          <a href="https://kingston.okta.com/" target="_blank" rel="noreferrer">
            Okta
          </a>
        </li>
      </ul>
      {/* Can 2021 be dynamic? */}
      <div className="u-txt-copyright u-txt-center">
         
      ©{ currYear } Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA.<br/> All rights reserved. All trademarks and registered trademarks are the property of their respective owners.
      </div>
    </footer>
  );
};

export default S_Footer;
