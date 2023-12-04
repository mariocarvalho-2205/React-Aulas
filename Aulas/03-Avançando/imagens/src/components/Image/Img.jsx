import React from 'react';
import Image from '../../../src/assets/Image/IMG_20220314_133733.jpg'

const Img = () => {
    return (
        <div>
            {/*  Imagens em public sem pasta */}
            <img width="500px" src="/IMG_20220310_150358.jpg" alt="img" />

            {/* Imagens em assets */}

            <img width="500px" src={Image} alt="" />
        </div>
    )
}

export default Img;