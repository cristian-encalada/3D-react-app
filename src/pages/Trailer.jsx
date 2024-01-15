// Trailer.js
import React from "react";
import { CTA, MovieClip } from "../components";
import "react-vertical-timeline-component/style.min.css";

const Trailer = () => {
  const videoId = "fEPqgSNLfK8"; // Youtube video ID

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        <span className='yellow-gradient_text font-semibold drop-shadow'>
          The Little Prince (2015 film)
        </span>
      </h1>

      <div className='mt-5 text-yellow-500 justify-center items-center'>
        <p className="mb-5">
          The film relates the story of a young girl who has just met the book's 
          now-elderly aviator narrator, who tells her the story of his meeting 
          with the Little Prince in the Sahara desert. 
        </p>
        <MovieClip videoId={videoId} />
      </div>

      <CTA />
    </section>
  );
};

export default Trailer;
