import React from "react"
import "../styles/style.css"

const Content = () => {
  return (
    <>
      <div className="content">
        <h1>welcome to the SASS tutorial</h1>
        <p>this is my first ever sass project</p>
        <button>Read More</button>
      </div>
      <div className="boxes">
        <div className="box1">
          <button>A</button>
        </div>
        <div className="box1">
          <button>B</button>
        </div>
        <div className="box1">
          <button>C</button>
        </div>
      </div>
    </>
  )
}

export default Content
