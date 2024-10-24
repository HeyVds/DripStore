import './slide.css'
import { Swiper, SwiperSlide } from 'swiper/react'


export const Slide = () => {
    const data = 
    [
    
    {id: '2' , image: './src/assets/White-Sneakers-PNG-Clipart 1.png'},
    {id: '1' , image: './src/assets/White-Sneakers-PNG-Clipart 1.png'},
    {id: '3' , image: './src/assets/White-Sneakers-PNG-Clipart 1.png'},
    {id: '4' , image: './src/assets/White-Sneakers-PNG-Clipart 1.png'}

    ]


    return ( <>
    
        <Swiper>

        <SwiperSlide>
        

        </SwiperSlide>

        </Swiper>
    
    
    </> );
}