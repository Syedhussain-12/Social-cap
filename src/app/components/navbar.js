
import React, { useState } from 'react'


// import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
// import { Testimonials } from './components/testimonials'
// import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Course', href: '/home/course' },
  { name: 'Pricing', href: '/home/pricing' },
  { name: 'Contact', href: '#' },
  { name: 'FAQ', href: '#' },
]
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter();
  return (
    <div>
      <header className="absolute bg-[#ffa763] inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://s3-alpha-sig.figma.com/img/534d/c42f/ceebfda91a4273ee643b1d53c2556ffc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m2W0DCEyUe8xfcX2fxNyJvDbr0IQHq4s-o6UKlYDrpsVYqBFW8uqRkDd7kjTJBc0zcDrG4r7V10UIFkA13hFtH6-HTLqCVE5Xt7UljYqkrTOGRVn1XxzNvHVvrkHTY9hvRIKsRiilMOsdfHkhkLhVw3D~7Tl-PrRZ5bz5QUP~gxA~M4DbUe4UYRNJkLR9VjjisNoQKTu-ah9K42PjcWGBL712qGCv0O2-uxKZgW1djqf7pZ7K51c2RebM-Y-wEIJfacNFUiCG7HYcoov6EOk7O~nJKwvTR2hn8DLmPQircj3JP8STDT44vF9NxqFtszWnEbjpSEKUyYw~hsUpluxQQ__"
                className="h-12 w-34"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a onClick={() => router.push('/home/login')} href="#" className="text-sm font-semibold leading-6 text-gray-900">
             Login <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
