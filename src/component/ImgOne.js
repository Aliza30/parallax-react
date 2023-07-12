
import { Parallax } from 'react-parallax';
import Nasa from '../img/nasa-CpHNKNRwXps-unsplash.jpg'
function Imgone() {
    return (
        <Parallax className='image' bgImage={Nasa} strength={800}>
            <div className='content'>
                <span className='img-text'>A trip to space</span>
            </div>
        </Parallax>
    );
}

export default Imgone