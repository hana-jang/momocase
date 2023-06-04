// swiper ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Slide() {
    return (
        <>
            <div className="swiper1">
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/img/slider1.jpg"} alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/img/slider2.jpg"} alt="slider" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + "/img/slider3.jpg"} alt="slider" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="hottem">
                <h2>이런 HOT템은 어때?</h2>
                <div className="swiper2">
                    <Swiper
                        // slidesPerView={2}
                        breakpoints={{
                            1200:{slidesPerView:2,spaceBetween:50},
                            768:{slidesPerView:1.7,spaceBetween:40},
                            400:{slidesPerView:1},
                          }}
                        // spaceBetween={50}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <a href="#none"><img src={process.env.PUBLIC_URL + "/img/hottem1.jpg"} alt="HOT ITEM" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#none"><img src={process.env.PUBLIC_URL + "/img/hottem2.jpg"} alt="HOT ITEM" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#none"><img src={process.env.PUBLIC_URL + "/img/hottem3.jpg"} alt="HOT ITEM" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#none"><img src={process.env.PUBLIC_URL + "/img/hottem4.jpg"} alt="HOT ITEM" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#none"><img src={process.env.PUBLIC_URL + "/img/hottem5.jpg"} alt="HOT ITEM" /></a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Slide;