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
                        <span>3</span>
                        <span>4</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageButton
