import React from "react"
import TransitionLink from '../components/transitionLink';
import Image from "../components/image"

import SEO from "../components/seo"

const Page = () => (
  <>
    <SEO title="Page" />
    <div className="px-8">
      <div className="flex flex-wrap -mx-12">
        <div className="w-full lg:w-1/2 px-12">
          <Image className="w-full h-auto block" />
        </div>
        <div className="w-full lg:w-1/2 px-12">
          <h1 className="text-6xl">Page</h1>
          <TransitionLink to="/" className="bg-white px-8 py-4 text-xs text-black inline-block rounded mt-12">Home</TransitionLink>
        </div>
      </div>
    </div>
  </>
)

export default Page;
