import React from "react";
import FooterLInkLeft from "../pages/FooterLink/FooterLInkLeft";
import FooterLInkRight from "../pages/FooterLink/FooterLInkRight";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <nav id="footer_nav">
        <ul id="footer_left">
          <FooterLInkLeft
            title={"About"}
            url={
              "https://about.google/?utm_source=google-BD&utm_medium=referral&utm_campaign=hp-footer&fg=1"
            }
          />
          <FooterLInkLeft
            title={"Advertising"}
            url={
              "https://www.google.com/intl/en_bd/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            }
          />
          <FooterLInkLeft
            title={"Business"}
            url={
              "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            }
          />
          <FooterLInkLeft
            title={"How Search Works"}
            url={"https://google.com/search/howsearchworks/?fg=1"}
          />
        </ul>
        <ul id="footer_right">
          <FooterLInkRight
            title={"Privacy"}
            url={"https://policies.google.com/privacy?hl=en-BD&fg=1"}
          />
          <FooterLInkRight
            title={"Terms"}
            url={"https://policies.google.com/terms?hl=en-BD&fg=1"}
          />
          <FooterLInkRight title={"Settings"} url={"#1"} />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
