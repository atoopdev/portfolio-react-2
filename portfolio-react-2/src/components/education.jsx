import React from "react"

export default function Education(){
    return (
        <section className="education">
            <div className="content_wrapper item-details">
                <h2>Education</h2>

                {/* copy whole section block to add more schools */}

                <section>
                    <h3>Smith College - Northampton, MA</h3>
                    <p>BA in Art History, Minor in Computer Science</p>
                </section>

                {/* end of school block */}
            </div>
        </section>
    )
}