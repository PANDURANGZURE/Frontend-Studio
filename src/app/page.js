import Image from "next/image";
import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import Link from 'next/link';
import Header from "./Components/Header";
import StepperCard from "./Components/StepperCard";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <div className="h-screen w-full">
        <Hero />
      </div>
      

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* Your content here */}
      </div>
    
    </main>
  );
}
