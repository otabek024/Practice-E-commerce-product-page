import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="box">
            <img className="main-image" src="http://cdn.shopify.com/s/files/1/0107/9820/2938/products/gmmobile1_grande.png?v=1629754332" />
          </div>
          <div className="boxes">
            <img className="small-images" src="https://cdn.shopify.com/s/files/1/0107/9820/2938/products/lavender1_desktop_03c21999-c44c-4e87-be5b-a1eaac931c5a_800x.jpg?v=1625105537" />
            <img className="small-images" src="https://cdn.shopify.com/s/files/1/0107/9820/2938/products/bw1_mobile_800x800_crop_center.png?v=1625108430" />
            <img className="small-images" src="https://cdn.shopify.com/s/files/1/0107/9820/2938/products/pu1_desktop_05c5a158-7084-4732-9a4a-d43da796bcaf_600x.png?v=1630421618" />
            <img className="small-images" src="https://cdn.shopify.com/s/files/1/0107/9820/2938/products/lavender1_desktop_03c21999-c44c-4e87-be5b-a1eaac931c5a_800x.jpg?v=1625105537" />
          </div>
        </div>
        <div className="right">
          <div className="block">
            <h5>Sneaker Company</h5>
            <h1>Fall Edition Small Sneakers</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a
              type specimen book
            </p>
            <h3>$125.00</h3>
            <button type="button" className="btn btn-secondary">
            <i class="fas fa-minus"></i>
            0
            <i class="fas fa-plus"></i>
            </button>
            <button type="button" className="btn btn-primary">
            <i className="far fa-shopping-cart"></i>
            Add to card
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
