import { Parallax } from 'react-parallax';
import Satallite from '../img/bryan-goff-RF4p4rTM-2s-unsplash.jpg'
function ImgTwo() {
    return (
        <Parallax className='image' bgImage={Satallite} strength={800}>
            <div className='content'>
                <span className='img-text'>A trip to space</span>
            </div>
        </Parallax>
    );
}

export default ImgTwo