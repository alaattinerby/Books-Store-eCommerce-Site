import React from 'react'
import "./css/pageButton.css"

function PageButton(){
    return(
        <>
            <section className="pageNumberSection">
                <div className="container">
                    <div className="pageNumber">
                        <span className="active">1</span>
                        <span>2</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageButton
