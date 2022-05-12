import React from 'react'
import './Footer.css'

function Footer({country, about, advertising, business, works}) {
  return (
    <div>

      <div className="footer_top">
        <p>{country}</p>
      </div>

      <div className="footer">

        <div className="footer_left">
          <a href="https://about.google/?utm_source=google-BD&utm_medium=referral&utm_campaign=hp-footer&fg=1" target="_blank" rel="noreferrer">{about}</a>
          <a href="#2" target="_blank" rel="noreferrer">{advertising}</a>
          <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none" target="_blank" rel="noreferrer">{business}</a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1" target="_blank" rel="noreferrer">{works}</a>
        </div>
        
        <div className="footer_right">
          <a href="https://policies.google.com/privacy?hl=en-BD&fg=1" target="_blank" rel="noreferrer">Privacy</a>
          <a href="https://policies.google.com/terms?hl=en-BD&fg=1" target="_blank" rel="noreferrer">Terms</a>
          <a href="https://policies.google.com/terms?hl=en-BD&fg=1" target="_blank" rel="noreferrer">Settings</a>
        </div>
        
      </div>

    </div>
  )
}

export default Footer