import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5'>
        "It is only with the heart that one can see clearly. What is essential is invisible to the eye."
        <br />
        <span className='font-semibold mx-2  mb-8 text-white'>The Little Prince</span>
        <div className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5'>
          <span className='mr-2'>👈</span> Drag to explore <span className='mr-2'>👉</span>
        </div>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
         A stop-motion/CGI adaptation was released on 2015, <br /> based on the novella by Antoine de Saint-Exupéry.
        </p>

        <Link to='/trailer' className='neo-brutalism-white neo-btn'>
          Watch trailer
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          A complete soundtrack collection of the movie is available on Spotify for free.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Listen to it now!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Any project in mind? or looking for a creative dev/designer? <br/> Let's bring your ideas to reality!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;