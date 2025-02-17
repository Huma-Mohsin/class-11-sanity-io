import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

export default async function Hero() {
  const data = await client.fetch(
    `*[_type=="hero"][0]{heading1,heading2,paragraph,btn1,btn2,"imgurl":Image.asset->url}`
  );
  console.log(data);
  return (
    <div>
      <section className="text-gray-400 mt-12 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
              {data.heading1}
              <br className="hidden lg:inline-block" />
              {data.heading2}
            </h1>
            <p className="mb-8 text-2xl leading-relaxed">{data.paragraph}</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                {data.btn1}
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                {data.btn2}
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={data.imgurl}
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
