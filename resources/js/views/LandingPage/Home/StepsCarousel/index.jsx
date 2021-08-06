import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import StepSlide from './StepSlide';

import registerSVG from '../images/register.svg'
import descriptionSVG from '../images/description.svg'
import customizeFormSVG from '../images/customize_form.svg'
import shareLinkSVG from '../images/share_link.svg'
import doneSVG from '../images/done.svg'

const StepsCarousel = () => {
  return (
    <section className='vw-100 pb-5 d-flex flex-column' style={{ background: '#18143b' }}>
      <span className='display-4 text-light text-center align-self-center pb-5 px-3'>
        Only
        <span className='font-weight-bold text-primary'> 5 </span>
        steps seperate you from using our service.
      </span>
      <Swiper
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          "768": {
            "slidesPerView": 2,
          },
          "1024": {
            "slidesPerView": 3,
          },
          "1368": {
            "slidesPerView": 4,
          },
          "1600": {
            "slidesPerView": 5,
          }
        }}
        className='px-5 w-100'
      >
        <SwiperSlide>
          <StepSlide header='STEP-1' description='Create your company account.' image={registerSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <StepSlide header='STEP-2' description='Add your company description.' image={descriptionSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <StepSlide header='STEP-3' description='Customize your application form or use the default one.' image={customizeFormSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <StepSlide header='STEP-4' description='Create job position and share the link to application form.' image={registerSVG} />
        </SwiperSlide>
        <SwiperSlide>
          <StepSlide header='Its done!' description='You can now manage upcoming applications in Received Applications section 🎉.' image={doneSVG} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default StepsCarousel