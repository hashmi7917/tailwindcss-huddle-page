import { useEffect, useRef } from 'react';
import React from 'react';
import Logo from './images/logo.svg';
import FooterLogo from './images/footer-logo.svg';
import MobileHeroImg from './images/bg-hero-mobile.svg';
import DesktopHeroImg from './images/bg-hero-desktop.svg';
import HeroMockupImg from './images/illustration-mockups.svg';
import GrowTogetherImg from './images/illustration-grow-together.svg';
import FlowTogetherImg from './images/illustration-flowing-conversation.svg';
import UsersTogetherImg from './images/illustration-your-users.svg';

function App() {
  return (
    <div className="md:max-w-xl xl:max-w-full max-w-md mx-auto bg-white shadow-sm">
      <Header />
      <MainContent />
      <ButtonCard />
      <Footer />
    </div>
  );
}

function Header() {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: 'h2',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 3000,
    });
    animationRef.current = anime({
      targets: 'header img',
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 3000,
    });
    animationRef.current = anime({
      targets: 'header button',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 3000,
    });
  }, []);

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 1440;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {width > breakPoint ? (
        <header
          className="flex flex-col items-center justify-around xl:max-w-full md:max-w-4xl max-w-md h-full bg-primary-verypalecyan"
          style={{
            backgroundImage: `url(${DesktopHeroImg})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <Nav />
          <HeroContent />
        </header>
      ) : (
        <header
          className="flex flex-col items-center justify-around xl:max-w-full md:max-w-4xl max-w-md h-full bg-primary-verypalecyan"
          style={{
            backgroundImage: `url(${MobileHeroImg})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <Nav />
          <HeroContent />
        </header>
      )}
    </>
  );
}

function Nav() {
  return (
    <nav className="flex justify-between items-center px-4 xl:px-12 xl:pt-16 pt-4 pb-8 w-full md:pt-6">
      <img className="h-6" src={Logo} alt="logo" />
      <button className="px-8 py-1 bg-white hover:bg-primary-pink hover:text-white shadow-lg rounded-full text-sm font-medium cursor-pointer">
        Try It Free
      </button>
    </nav>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col xl:flex-row justify-around xl:justify-evenly xl:items-center h-full px-4 xl:px-12 xl:py-8">
      <HeroText />
      <HeroImage />
    </div>
  );
}

function HeroText() {
  return (
    <div className="lg:min-w-min w-full h-96 xl:h-80 mx-auto flex flex-col justify-around lg:justify-around xl:items-start xl:text-left items-center text-center">
      <h2 className="lg:text-2xl xl:w-2/3 w-3/4 text-2xl xl:text-4xl font-poppins text-primary-verydarkcyan leading-10">
        Build The Community Your Fans Will Love
      </h2>
      <p className="xl:w-2/3 w-5/6 text-primary-verydarkcyan tracking-normal lg:tracking-tight font-light px-1">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="w-64 py-3.5 text-xs font-bold bg-primary-pink text-primary-verypalecyan rounded-full shadow-lg cursor-pointer hover:bg-opacity-80">
        Get Started For Free
      </button>
    </div>
  );
}
function HeroImage() {
  return (
    <div className="md:mx-auto lg:w-full md:max-w-md xl:max-w-3xl max-w-md px-6 py-4 xl:px-0">
      <img
        className="lg:w-full xl:max-w-3xl hover:animate-pulse"
        src={HeroMockupImg}
        alt="hero-image"
      />
    </div>
  );
}

function MainContent() {
  return (
    <main
      style={{ minHeight: '2000px' }}
      className="flex flex-col justify-evenly items-center pt-8 pb-6"
    >
      <CardContentGrow />
      <CardContentFLow />
      <CardContentUsers />
    </main>
  );
}

function CardContentGrow() {
  return (
    <div
      style={{ minHeight: '525px' }}
      className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl flex flex-col xl:flex-row-reverse justify-evenly rounded-2xl shadow-s1 items-center"
    >
      <div className="md:3/4 w-full md:py-4">
        <img
          className="w-3/4 md:w-5/6 xl:w-3/4 mx-auto"
          src={GrowTogetherImg}
          alt="grow-together"
        />
      </div>
      <div className="h-48 xl:h-34 flex flex-col w-5/6 xl:w-full justify-around text-center xl:text-left xl:pl-32">
        <h6 className="text-xl xl:text-2xl font-semibold font-poppins">
          Grow Together
        </h6>
        <p className="text-primary-grayishblue xl:text-lg text-md font-400 leading-6">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
    </div>
  );
}
function CardContentFLow() {
  return (
    <div
      style={{ minHeight: '525px' }}
      className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl flex flex-col xl:flex-row justify-evenly rounded-2xl shadow-s1 items-center"
    >
      <div className="md:w-3/4 w-full md:py-4">
        <img
          className="w-3/4 md:w-5/6 xl:w-3/4 mx-auto"
          src={FlowTogetherImg}
          alt="grow-together"
        />
      </div>
      <div className="h-48 xl:h-34 flex flex-col w-5/6 xl:w-full justify-around text-center xl:text-left xl:pr-32">
        <h6 className="text-xl xl:text-2xl font-semibold font-poppins">
          Flowing Conversations
        </h6>
        <p className="text-primary-grayishblue xl:text-lg text-md font-400 leading-6">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
}
function CardContentUsers() {
  return (
    <div
      style={{ minHeight: '525px' }}
      className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl flex flex-col xl:flex-row-reverse justify-evenly rounded-2xl shadow-s1 items-center"
    >
      <div className="md:w-9/12 w-full md:py-4">
        <img
          className="w-3/4 md:w-5/6 xl:w-3/4 mx-auto"
          src={UsersTogetherImg}
          alt="grow-together"
        />
      </div>
      <div className="h-48 xl:h-34 flex flex-col w-5/6 xl:w-full justify-around text-center xl:text-left xl:pl-32">
        <h6 className="text-xl xl:text-2xl font-semibold font-poppins">
          Your Users
        </h6>
        <p className="text-primary-grayishblue xl:text-lg text-md font-400 leading-6">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
    </div>
  );
}

function ButtonCard() {
  return (
    <div className="bg-white md:w-3/4 w-11/12 xl:w-1/2 h-48 mx-auto px-2 py-4 flex flex-col justify-evenly items-center shadow-s1 rounded-2xl z-50 sticky -mb-32">
      <h4 className="text-1xl font-poppins text-primary-verydarkcyan text-center tracking-wide">
        Ready To Build Your Community?
      </h4>
      <button className="w-64 py-3.5 text-xs font-bold bg-primary-pink text-primary-verypalecyan rounded-full shadow-lg cursor-pointer hover:bg-opacity-80">
        Get Started For Free
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div
      // style={{ minHeight: '900px' }}
      className="min-h-screen xl:min-h-fit flex flex-col xl:flex-row justify-around xl:justify-evenly xl:w-full xl:items-center bg-primary-verydarkcyan z-0 mt-12 text-primary-verypalecyan px-6 pt-16 pb-8"
    >
      <div className="h-96 w-full flex flex-col justify-around items-start xl:w-3/12">
        <img className="w-48 pt-20" src={FooterLogo} alt="footer-logo" />

        <div className="flex justify-between xl:w-full">
          <i className="fa-solid fa-location-dot fa-bounce pt-1"></i>
          <p className="w-full pl-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex justify-between">
          <i className="fa-solid fa-phone-volume fa-shake pt-1"></i>
          <p className="pl-4">+1-543-123-4567</p>
        </div>

        <div className="flex justify-between">
          <i className="fa-solid fa-envelope fa-fade pt-1"></i>
          <p className="pl-4">example@huddle.com</p>
        </div>
      </div>

      <ul className="h-60 xl:h-0 flex flex-col xl:flex-row justify-evenly pb-6 xl:w-3/12 xl:flex-wrap xl:place-content-center">
        <li className="w-1/2 hover:underline cursor-pointer">About US</li>
        <li className="w-1/2 hover:underline cursor-pointer">Careeer</li>
        <li className="w-1/2 hover:underline cursor-pointer">What We Do</li>
        <li className="w-1/2 hover:underline cursor-pointer">Blog</li>
        <li className="w-1/2 hover:underline cursor-pointer">FAQ</li>
        <li className="w-1/2 hover:underline cursor-pointer">Contact Us</li>
      </ul>

      <div className="h-36 w-full flex flex-col justify-around items-center xl:w-3/12 xl:place-content-between">
        <div className="flex justify-around w-1/2">
          <i className="fa-brands fa-facebook-f fa-fade hover:ring-primary-pink w-10 h-10 text-center ring-white ring-2 rounded-full px-3.2 py-3 cursor-pointer"></i>
          <i className="fa-brands fa-twitter fa-fade hover:ring-primary-pink w-10 h-10 text-center ring-white ring-2 rounded-full px-3.2 py-3 cursor-pointer"></i>
          <i className="fa-brands fa-instagram fa-fade hover:ring-primary-pink w-10 h-10 text-center ring-white ring-2 rounded-full px-3.2 py-3 cursor-pointer"></i>
        </div>
        <div className="text-xs">
          &copy; Copyright 2023 Huddle. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
