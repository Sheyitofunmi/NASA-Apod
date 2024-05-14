import React, { useState, useEffect } from "react";
import { fetchApod, ApodData } from "../api/apod";

const ImageGallery: React.FC = () => {
  const [galleryData, setGalleryData] = useState<ApodData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGalleryData = async () => {
      setLoading(true);
      try {
        const today = new Date();
        const dates: ApodData[] = [];

        for (let i = 0; i < 6; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          const dateString = date.toISOString().split("T")[0];
          const data = await fetchApod(dateString);
          dates.push(data);
        }
        setGalleryData(dates);
        setError(null);
      } catch (error) {
        setError("Failed to fetch gallery data for the last 6 days");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <div className="bg-black text-white pt-3 pb-4">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
          <span className="block w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            Gallery
          </span>
        </h1>
        <p className="text-gray-400 mb-8 mx-auto text-sm text-center">
          Here's to the crazy ones
        </p>
      </div>
      <div className="container mx-auto p-4">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryData.map((apodData, index) => (
            <div key={index} className="relative group">
              {apodData.media_type === "image" ? (
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="max-w-full w-[25rem] h-48 md:w-[30rem] md:h-52 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                />
              ) : (
                <div className="relative">
                  <iframe
                    src={apodData.url}
                    title={apodData.title}
                    frameBorder="0"
                    allowFullScreen
                    className="max-w-full md:w-[30rem] lg:h-52 w-[25rem] h-48 rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                  ></iframe>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 bg-opacity-75 rounded-b-lg">
                <p className="text-sm font-semibold">{apodData.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
