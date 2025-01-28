import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <header id='header'>
      <div className='container header__container'>
        {/* <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
        <h1 className='head-name' data-aos='fade-up'>
          RITU RAJ SINGH
        </h1>
        <p data-aos='fade-up'>
          I’m Ritu Raj Singh, a Full Stack Web Developer with expertise in
          custom website development, SaaS solutions, and MVP development.
          Whether you're looking to build a responsive website, a robust web
          application, or streamline your online presence, I provide tailored
          solutions that deliver results. Hire a trusted web developer to bring
          your vision to life.
        </p>
        <div className='header__cta' data-aos='fade-up'>

          <a
            href='https://cal.com/rituraj-singh-im02fk/30min'
            target='_blank'
            className='btn primary'
          >
            Schedule Free Call!
          </a>
          <a href='#portfolio' className='btn primary'>
            My Work
          </a>
        </div>
        {/* <div className='header__socials'>
          {data?.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.icon}
            </a>
          ))}
        </div> */}

        <div className='header__socials'>
          {data?.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
            >
              {item.icon}
              <span className='tooltip'>{item.msg}</span>{' '}
              {/* Add the tooltip here */}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
