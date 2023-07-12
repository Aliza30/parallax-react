import { Parallax } from 'react-parallax';
import ThirdImg from '../img/nasa-Q1p7bh3SHj8-unsplash.jpg'
function ImgThree() {
    return (
        <Parallax className='image' bgImage={ThirdImg} strength={800}>
            <div className='content'>
                <span className='img-text'>A trip to space</span>
            </div>
        </Parallax>
    );
}

export default ImgThree