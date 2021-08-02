import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function MainFeed() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl px-10 py-10 mx-auto xl:px-0">
        <div className="flex flex-wrap mt-10 overflow-hidden h-[900px] ">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            <div className="ml-2 mr-2 md:mr-4">
              <div className="pb-12">
                <a href="#_" className="relative block w-full overflow-hidden h-80 rounded-xl">
                  <Image
                    src="/tim-dunc.jpeg"
                    className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                    layout="fill"
                    alt="Something about the image here just in case."
                  />
                </a>
                <a href="#_" className="relative block mt-5 mb-1 text-xs font-medium tracking-wide text-green-500 uppercase">
                  Highlights
                </a>
                <h2 className="mb-1 font-serif text-3xl font-thin text-gray-900">
                  <a href="#_">Tim Duncan to be indoctrinated to the Hall of Fame</a>
                </h2>
                <span className="block mb-5 text-xs font-normal text-gray-800">
                  <span className="ml-1 text-gray-500">Written by Jane Doe on December 02, 2019</span>
                </span>
                <p className="text-gray-800">
                  <span>
                    There are thousands of places you can visit on your next vacation. In this post we will show you the top destinations to consider for your
                    next adventure...
                  </span>
                  <a href="#_" className="inline-flex items-center  text-sm text-gray-500 underline">
                    <span>Continue Reading</span>
                    <svg className="w-3 h-3 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-6">
                  <a href="#_" className="block h-48 mb-3 overflow-hidden rounded-lg">
                    <Image
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="/jaddah-knight.jpeg"
                      alt="Something about the image here just in case."
                      layout="responsive"
                      width={700}
                      height={475}
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">Jaddah Knight is on the rise!</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    Many people live so close to amazing scenary, yet they rarely take...
                    <a href="#_" className="inline-flex items-center ml-1 text-xs text-gray-500 underline">
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <a href="#_" className="block h-48 mb-3 overflow-hidden rounded-lg">
                    <Image
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="/usvi-team1.jpeg"
                      width={700}
                      height={475}
                      alt="Something about the image here just in case."
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">The UVI team is doing some big things!</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    Find out more about your favorite Virgin Islands basketball team...
                    <a href="#_" className="inline-flex items-center  ml-1 text-xs text-gray-500 underline">
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <a href="#_" className="block h-48 mb-3 overflow-hidden rounded-lg">
                    <Image
                      width={700}
                      height={475}
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="/uvi-basketball.jpg"
                      // layout="fill"
                      alt="Something about the image here just in case."
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">These players are sure to be in the USVI Hall of Fame!</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    With dedication, percistence, and a buring desire to win these players...
                    <a href="#_" className="inline-flex items-center ml-1 text-xs text-gray-500 underline">
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <a href="#_" className="block h-48 mb-3 overflow-hidden rounded-lg">
                    <Image
                      width={700}
                      height={475}
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="/tabari-henry.jpeg"
                      // layout="fill"
                      alt="Something about the image here just in case."
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">One of the best to have ever played, Tabari Henry</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    To be a champion you have to first from within become a champion, one that...
                    <a href="#_" className="inline-flex items-center ml-1 text-xs text-gray-500 underline">
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <button className="px-5 py-3 mt-5 text-sm font-medium tracking-widest text-white uppercase bg-green-400 rounded-lg">Load more articles</button>
            </div>
          </div>
          {/* Begining of Sidebar */}
          <div className="x01 sticky xx-top-8 self-start w-full mt-12 overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6 md:mt-0">
            <div className="ml-2 mr-2 md:ml-4">
              <div className="rounded-lg bg-gray-50 p-7">
                <div className="pb-6 text-left">
                  <h2 className="mb-1 text-lg font-medium text-gray-900">Upcomming events</h2>
                  <span className="block text-xs italic text-gray-500">Sign up to get event notifications about what&apos;s happening.</span>
                  <form>
                    <div className="mt-5 overflow-hidden bg-white border-none rounded-lg">
                      <input
                        className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none"
                        type="text"
                        name="name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mt-5 overflow-hidden bg-white border-none rounded-lg">
                      <input
                        className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <button type="submit" className="w-full py-3 mt-5 text-sm font-medium tracking-widest text-white uppercase bg-green-400 rounded-lg">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="mb-5 text-lg font-medium text-gray-900">Categories</h2>
                <ul>
                  <li className="flex">
                    <a href="#_" className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
                      Basketball
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">32</span>
                  </li>
                  <li className="flex">
                    <a href="#_" className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
                      Tennis
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">41</span>
                  </li>
                  <li className="flex">
                    <a href="#_" className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
                      Chess
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">27</span>
                  </li>
                  <li className="flex">
                    <a href="#_" className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
                      Baseball
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">21</span>
                  </li>
                  <li className="flex">
                    <a href="#_" className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
                      Swimming
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">15</span>
                  </li>
                  <li className="flex">
                    <a href="#_" className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">
                      Track and Field
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">28</span>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h2 className="mb-5 text-lg font-medium text-gray-900">Recent Posts</h2>
                <ul>
                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <Image
                          width="100%"
                          height="100%"
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="/3-guys.jpeg"
                          // layout="fill"
                          alt="Something about the image here just in case."
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">These 3 players are sure to blow you away</h3>
                        <span className="block text-xs font-thin text-gray-800">September 02, 2021</span>
                      </div>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <Image
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="/usvi-womens-softball.jpeg"
                          width="100%"
                          height="100%"
                          alt="Something about the image here just in case."
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">Look out for the thunder!</h3>
                        <span className="block text-xs font-thin text-gray-800">November 04, 2021</span>
                      </div>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <Image
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="/usvi-breakthrough.jpeg"
                          // layout="fill"
                          width="100%"
                          height="100%"
                          alt="Something about the image here just in case."
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">Take a Trip to The End of The World</h3>
                        <span className="block text-xs font-thin text-gray-800">January 05, 2021</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
