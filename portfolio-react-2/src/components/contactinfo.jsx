import React from "react"

export default function ContactInfo(){
    return(
        <footer>
        <div class = "content_wrapper">
        <h2 id="contact">Let's Keep in Touch!</h2>

        {/* <!-- Social media and contact links. Add or remove any networks. --> */}
        <ul class="contact-list">
          <li><a href="http://amandatoop.com" target="_blank">amandatoop.com</a></li>
          <li><a href="https://twitter.com/atoop" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i> Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/amanda-toop-a3358719a/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
        </ul>
        </div>
      </footer>
    )
}