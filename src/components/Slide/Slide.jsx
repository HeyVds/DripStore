import './slide.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button/Button'

export const Slide = () => {
    const data = 
    [
    
    {id: '1' , image: './src/assets/slide-image/White-Sneakers-PNG-Clipart 1.png'},
    {id: '2' , image: './src/assets/slide-image/White-Sneakers-PNG-Clipart 1.png'},
    {id: '3' , image: './src/assets/slide-image/White-Sneakers-PNG-Clipart 1.png'},
    {id: '4' , image: './src/assets/slide-image/White-Sneakers-PNG-Clipart 1.png'}

    ]


    return ( <>
    
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{clickable: false,
                renderBullet: (index, bullet) => {
                    return  `<span class="${bullet}" style="background-color: #C92071"></span>`;
                }
            }}
                autoplay = 

                {{
                    delay: 5000,
                    disableOnInteraction: false 
                }}

                loop = {true}
                navigation = {false}
        
        
        >

        {data.map((item) => (

        <SwiperSlide key={item.id}>
            <div className='slide'>
                <div className='Text'>
                    <p className='p-acima'>
                        Melhores ofertas personalizadas
                    </p>

                    <h1 className='Text-h1'>
                    Queima de stoque Nike 🔥
                    </h1>

                    <p className='p-abaixo'>
                    Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p>
                    <Button label="Ver Ofertas" size="x-medium" style="primary" />
                </div>

                <div className='div-img'>
                    <div className='Ornament'>
                        <img src="./src/assets/slide-image/Ornament 11.png" alt="Ornament"className='Orn' />
                        
                    </div>

                    <img src={item.image} alt="White-Sneakers" 
                    className='Slide-item'
                    />
                </div>
            </div>

        </SwiperSlide>

        ))}


        </Swiper>
    
    
    </> );
}