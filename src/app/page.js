'use client'

import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Testimonials } from './components/testimonials'
import { useRouter } from 'next/navigation'
import Navbar from './components/navbar'
import Footernew from './components/Footernew'

// const navigation = [
//   { name: 'Home', href: '#' },
//   { name: 'Course', href: '#' },
//   { name: 'About Us', href: '#' },
//   { name: 'Contact', href: '#' },
//   { name: 'FAQ', href: '#' },
// ]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();
  return (
    <div className="bg-white">
    <Navbar/>
      <div className="relative isolate  pt-14 ">
      <div className="relative h-screen lg:h-[601px] bg-black text-white flex items-center justify-center">
      {/* Background animated dots effect (optional: you can implement a real animation or use a background SVG) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Replace this with an actual animation or background dots */}
        <div className="opacity-50">
          <svg width="100%" height="100%">
            {/* Example for background dots */}
            <pattern
              id="smallGrid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          First 30-Minute Consultation
          <br />
          Call For Free As Long As We Have Capacity
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Sign up
          </button>
          <button className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-300">
            Sign up
          </button>
        </div>
      </div>
    </div>
    <Testimonials/>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <Footernew/>
    </div>
  )
}
