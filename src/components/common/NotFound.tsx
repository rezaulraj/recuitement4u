import React from "react";
import { Button } from "../ui/button";

const NotFound = () => {
  const handleGoHome = () => {
    // Logic to navigate to the home page
    // For example, using Next.js router or window.location
    window.location.href = "/";
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg">Page Not Found</p>
        <Button className="mt-4 bg-primary text-white " onClick={handleGoHome}>Go Home</Button>
      </div>
    </section>
  );
};

export default NotFound;
