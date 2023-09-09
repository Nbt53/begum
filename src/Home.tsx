
import { useState } from 'react';
import { images } from '../public/images';

export default function Home() {
    const [imageIndex, setImageIndex] = useState(0)
    const [displayImage, setDisplayImage] = useState(images[imageIndex])
    const changeImage = () => {

        const imageLength = images.length - 1
        if (imageIndex <= imageLength) {
            setImageIndex(imageIndex + 1)
            setDisplayImage(images[imageIndex])
        } else {
            setImageIndex(0)
            setDisplayImage(images[0])
        }
    }

    return (
        <>
            <div className="slideshow">
                <img className={'slideshow__item'} onClick={changeImage} src={displayImage.link} alt={displayImage.title} />
            </div></>
    )
}