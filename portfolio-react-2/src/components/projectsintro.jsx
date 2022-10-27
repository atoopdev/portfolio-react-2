import React from "react"
import SmallProjectIMG from "../../public/images/stanley-dai-73OZYNjVoNI-unsplash_300.jpg"
import LargeProjectIMG from "../../public/images/stanley-dai-73OZYNjVoNI-unsplash_600.jpg"

export default function ProjectsIntro(){
    return (
        <header>
            <div class="project-wrapper">
              <h1 class="project-page-header">Projects</h1>
              <div class="header-item">
                {/* <picture>
                  <source media="(max-width:374px)" srcset="images/stanley-dai-73OZYNjVoNI-unsplash_300.jpg">
                  <img src="images/stanley-dai-73OZYNjVoNI-unsplash_600.jpg" class="project-hero" alt="Hands typing on a laptop keyboard">
                </picture> */}
                <img src={LargeProjectIMG} className="project-hero" alt="Hands typing on a laptop keyboard"></img>
              <p>I love to learn. Experience has shown me that to really learn something, you must get your hands dirty. This webpage is where I document my learning projects.</p>
              
              <p>When I first started, this profile website was my top project. I added new features everytime I learned something new or had a need for a new feature (such as this Projects page.)</p>

              <p>Now in addition to this website, I also have an assortment of stand-alone projects. You can find a listing of my current work by category below.</p>
              </div>
              {/* <!-- end header-item --> */}
            </div>
            {/* <!-- end project-wrapper --> */}
          </header>
    )
}