import React, { useState, useEffect, useRef } from "react";
import Photo from "./components/Photo";
import ImageGallery from "./components/ImageGallery";
import { fetchApod, ApodData } from "./api/apod";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false);

  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async (date: string) => {
      try {
        setLoading(true);
        const data = await fetchApod(date);
        setApodData(data);
        setError(null);
      } catch (error) {
        setApodData(null);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const today = new Date().toISOString().split("T")[0];
    fetchData(today);
  }, []);

  const handleDateChange = async (date: string) => {
    try {
      setLoading(true);
      const data = await fetchApod(date);
      setApodData(data);
      setError(null);
      scrollToPhoto();
    } catch (error) {
      setApodData(null);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apodData && !error) {
      setAllDataLoaded(true);
    }
  }, [apodData, error]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll to top on component mount
  }, []);

  const scrollToPhoto = () => {
    if (photoRef.current) {
      photoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`mx-auto mt-10 ${loading ? "loading" : ""}`}>
      <Navbar onDateChange={handleDateChange} scrollToPhoto={scrollToPhoto} />
      <Hero />
      <div ref={photoRef} className="pt-3 bg-gray-200 relative">
        {loading && (
          <div className="rounded-md text-center h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        )}
        {!loading && allDataLoaded && (
          <>
            {error && <div className="text-red-500">{error}</div>}
            {!error && !apodData && (
              <div className="text-red-500">No data available.</div>
            )}
            {apodData && <Photo apodData={apodData} error={error} />}
          </>
        )}
      </div>
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default App;
