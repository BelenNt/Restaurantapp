import React from 'react'
import "../Menu.css"
import intro from "../intro.jpg";
import parrilladas from "../parrilladas.jpg";
import chuletas from "../chuletas.jpg";
import truchas from "../truchas.jpg";
import bebidas from "../bebidas.jpg";

const NuestroMenu = () => {
    return (<>
      <div id="menuExampleCaptions" className="menu slide" data-bs-ride="menu">
        <div className="menu-indicators">
                <button type="button" data-bs-target="#menuExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#menuExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#menuExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                <button type="button" data-bs-target="#menuExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                <button type="button" data-bs-target="#menuExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
            </div>
          <div className="menu-inner">
              <div className="menu-item active" data-bs-interval="5000">
                  <img src={intro} className="d-block w-100" alt="..." />
                  <div className="menu-caption d-none d-md-block">
                  </div>
              </div>
              <div className="menu-item" data-bs-interval="5000">
                  <img src={parrilladas} className="d-block w-100" alt="..." />
              </div>
              <div className="menu-item" data-bs-interval="5000">
                  <img src={chuletas} className="d-block w-100" alt="..." />
                  <div className="menu-caption d-none d-md-block">
                  </div>
              </div>
              <div className="menu-item" data-bs-interval="5000">
                  <img src={truchas} className="d-block w-100" alt="..." />
                  <div className="menu-caption d-none d-md-block">
                  </div>
              </div>
              <div className="menu-item" data-bs-interval="5000">
                  <img src={bebidas} className="d-block w-100" alt="..." />
                  <div className="menu-caption d-none d-md-block">
                  </div>
              </div>
          </div>
          
          <button className="menu-control-prev" type="button" data-bs-target="#menuExampleCaptions" data-bs-slide="prev">
              <span className="menu-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="menu-control-next" type="button" data-bs-target="#menuExampleCaptions" data-bs-slide="next">
              <span className="menu-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
          </button>        
      </div>
      </>
  )
}

export default NuestroMenu