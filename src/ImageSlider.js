import { Carousel } from 'antd';
import visual01 from './assets/sliderImage/visual01.jpg';
import visual02 from './assets/sliderImage/visual02.jpg';
import visual05 from './assets/sliderImage/visual05.jpg';
import visual06 from './assets/sliderImage/visual06.jpg';
import visual11 from './assets/sliderImage/visual11.jpg';
import visual13 from './assets/sliderImage/visual13.jpg';


const images = [ visual01, visual05, visual13, visual11, visual06, visual02 ]
const contentStyle = {
    height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
};
export const ImageSlider = () => {

    const emi = require.context('./assets/sliderImage/', true, /\.jpg$/);
    const imageNames = emi.keys().map(key => key.slice(2));


    return (
        <Carousel autoplay>
            {imageNames.map(img => {

                return <div>
                    <img  src={process.env.PUBLIC_URL + '/assets/sliderImage/' + img} alt={img} />
                    console.log({process.env.PUBLIC_URL + '/assets/sliderImage/' + img})
                   {/*<img src={`./assets/sliderImage/${img}`}/>*/}
                   {/*<img src={images[0]}/>*/}

                </div>
                })
            }
        </Carousel>
    );
}
