import React from "react";
import { ApodData } from "../api/apod";

interface PhotoProps {
  apodData: ApodData | null;
  error: string | null;
}

const Photo: React.FC<PhotoProps> = ({ apodData, error }) => {
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!apodData) {
    return <div></div>;
  }

  let mediaContent;

  switch (apodData.media_type) {
    case "image":
      mediaContent = (
        <img
          src={apodData.url}
          alt={apodData.title}
          className=" h-full md:h-[32rem] w-full object-cover"
        />
      );
      break;
    case "video":
      mediaContent = (
        <div>
          <iframe
            src={apodData.url}
            title={apodData.title}
            frameBorder="0"
            allowFullScreen
            className="h-full md:h-[32rem] w-full object-cover"
          ></iframe>
        </div>
      );
      break;
    default:
      mediaContent = <div>Unsupported media type</div>;
      break;
  }

  return (
    <section id="/apod">
      <h1 className="mb-4 text-3xl font-extrabold text-center leading-none tracking-normal md:text-4xl md:tracking-tight">
        <span className="block w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
          Today's APOD Image
        </span>
      </h1>

      <div className="relative pb-10  px-6 flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-8 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 md:h-auto">{mediaContent}</div>

        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-[7.2rem] lg:w-3/5 lg:left-[-75px] xl:left-[-60px] lg:mt-20 lg:ml-[6rem] xl:mt-24 xl:ml-12  ">
          <div className="flex flex-col p-5 md:px-7">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              {apodData.title}
            </h2>
            <p>Date: {apodData.date}</p>
            <p className="mt-2 text-sm">{apodData.explanation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photo;
