
import Link from "next/link";

import Image from "next/image";

import React from 'react'

export default function Hero() {
    const FlexboxSpacer = ({ maxWidth, minWidth = 0, className = "" }) => (
        <div className={`invisible shrink-[10000] grow ${className}`} style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }} />
      );
  return (
   
       <div> <section className="flex flex-col lg:flex-row items-center justify-center  bg-[#ffa763] w-full ">
      <FlexboxSpacer maxWidth={100} minWidth={0} className="hidden lg:block" />
      <div className=" max-w-xl sm:max-w-lg pt-8 text-center lg:mx-0 lg:pt-32 lg:text-left">
        <h1 className="text-black pb-2 text-4xl font-bold lg:text-5xl">
        Learn New Skills Online
        with Top <span className="text-[#150744]  underline">Educators</span> 
        </h1>
        <p className="mt-3 text-lg text-black lg:mt-5 lg:text-xl">
        Build skills with courses, certificates, and degrees online from
        world-class universities and companies.
        </p>
        {/* <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Create Resume <span aria-hidden="true">→</span>
        </Link> */}
        <div className="flex items-center  mt-10 gap-2">
            <div className="flex items-center w-[262px]  gap-2">
            <svg
  width="27"
  height="27"
  viewBox="0 0 27 27"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_463_935)">
    <mask
      id="mask0_463_935"
      style={{ maskType: "luminance" }} // Using correct JSX style prop
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="27"
      height="27"
    >
      <path
        d="M26.0841 0.942383H0.801758V26.2247H26.0841V0.942383Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_463_935)">
      <path
        d="M25.628 9.7072L13.7769 4.1767C13.6722 4.12785 13.5581 4.10254 13.4427 4.10254C13.3272 4.10254 13.2131 4.12785 13.1085 4.1767L1.25741 9.7072C1.12124 9.77083 1.00604 9.87196 0.925335 9.99875C0.844627 10.1255 0.801758 10.2727 0.801758 10.423C0.801758 10.5733 0.844627 10.7205 0.925335 10.8473C1.00604 10.9741 1.12124 11.0752 1.25741 11.1388L5.54197 13.1385V19.1138C5.54197 21.3663 8.93928 23.0641 13.4427 23.0641C17.9461 23.0641 21.3434 21.3663 21.3434 19.1138V13.1385L22.9235 12.4006V16.7436C22.9235 16.9531 23.0068 17.1541 23.155 17.3023C23.3031 17.4504 23.5041 17.5336 23.7136 17.5336C23.9231 17.5336 24.1241 17.4504 24.2722 17.3023C24.4205 17.1541 24.5037 16.9531 24.5037 16.7436V11.6634L25.628 11.1388C25.7641 11.0752 25.8794 10.9741 25.96 10.8473C26.0407 10.7205 26.0836 10.5733 26.0836 10.423C26.0836 10.2727 26.0407 10.1255 25.96 9.99875C25.8794 9.87196 25.7641 9.77083 25.628 9.7072ZM19.7633 19.1138C19.7633 20.0808 17.3014 21.484 13.4427 21.484C9.58397 21.484 7.12212 20.0808 7.12212 19.1138V13.8756L13.1085 16.6693C13.2131 16.7182 13.3272 16.7435 13.4427 16.7435C13.5581 16.7435 13.6722 16.7182 13.7769 16.6693L17.7273 14.8253C17.9139 14.7347 18.0573 14.5742 18.1266 14.3788C18.1961 14.1833 18.1857 13.9683 18.098 13.7804C18.0102 13.5924 17.852 13.4465 17.6577 13.3742C17.4632 13.3018 17.2481 13.3089 17.0589 13.3937L13.4427 15.0844L3.45934 10.423L13.4427 5.76158L23.4253 10.423L20.2192 11.9194C20.0704 11.9898 19.9477 12.1052 19.8685 12.2493C19.7892 12.3934 19.7574 12.5589 19.7775 12.7221C19.7716 12.7456 19.7668 12.7693 19.7633 12.7932V19.1138Z"
        fill="#282828"
      />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_463_935">
      <rect
        width="25.2823"
        height="25.2823"
        fill="white"
        transform="translate(0.801514 0.943359)"
      />
    </clipPath>
  </defs>
</svg>


                <p1 className="text-[14px] text-black">
                Over million Customers
                </p1>
            </div>
            <div className="flex items-center w-[240px] gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_463_948)">
<path d="M15.4751 0.28125H8.14224C3.77444 0.28125 0.220947 3.83474 0.220947 8.20254V15.5354C0.220947 19.9032 3.77444 23.4567 8.14224 23.4567H15.4751C19.8429 23.4567 23.3964 19.9032 23.3964 15.5354V8.20254C23.3964 3.83474 19.8429 0.28125 15.4751 0.28125ZM22.0384 15.5354C22.0384 19.1544 19.0941 22.0987 15.4751 22.0987H8.14224C4.5232 22.0987 1.57888 19.1544 1.57888 15.5354V8.20254C1.57888 4.58351 4.5232 1.63918 8.14224 1.63918H15.4751C19.0941 1.63918 22.0384 4.58351 22.0384 8.20254V15.5354Z" fill="#282828"/>
<path d="M15.8119 10.5523L10.1992 6.80229C9.14744 6.0996 7.73486 6.85524 7.73486 8.11958V15.6195C7.73486 16.891 9.15599 17.6337 10.1992 16.9368L15.812 13.1868C16.7489 12.5609 16.7517 11.1801 15.8119 10.5523ZM15.0576 12.0577L9.44487 15.8077C9.29469 15.908 9.09281 15.8022 9.09281 15.6196V8.11958C9.09281 7.93928 9.29278 7.82975 9.44487 7.93136L15.0577 11.6813C15.192 11.7712 15.1922 11.9678 15.0576 12.0577Z" fill="#282828"/>
</g>
<defs>
<clipPath id="clip0_463_948">
<rect width="23.1754" height="23.1754" fill="white" transform="translate(0.220947 0.28125)"/>
</clipPath>
</defs>
</svg>



                <p1 className="text-[15px] text-black">
                More than 200 Vides
                </p1>
            </div >
            <div className="flex items-center w-[240px] gap-2">
            <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8359 14.2758H19.2688C18.9374 11.9696 17.0828 10.1488 14.7604 9.86924C15.7451 8.92496 16.3591 7.59694 16.3591 6.12821C16.3591 3.26928 14.0331 0.943359 11.1742 0.943359C8.31532 0.943359 5.9894 3.26928 5.9894 6.12821C5.9894 7.59699 6.60343 8.92496 7.58811 9.86924C5.26574 10.1488 3.41115 11.9696 3.07976 14.2758H2.51259C1.15925 14.2758 0.122029 15.4764 0.312689 16.8111L1.5525 25.5885C1.60411 25.954 1.91687 26.2257 2.28594 26.2257H20.0625C20.4317 26.2257 20.7444 25.954 20.796 25.5885L22.0357 16.8121C22.2269 15.4735 21.1868 14.2758 19.8359 14.2758ZM7.47078 6.12821C7.47078 4.08612 9.13215 2.42474 11.1742 2.42474C13.2163 2.42474 14.8777 4.08612 14.8777 6.12821C14.8777 8.17029 13.2163 9.83167 11.1742 9.83167C9.13215 9.83167 7.47078 8.17029 7.47078 6.12821ZM8.21148 11.3131H14.137C15.9255 11.3131 17.4219 12.5874 17.7661 14.2758H4.58243C4.92656 12.5874 6.423 11.3131 8.21148 11.3131ZM20.569 16.6038L19.4191 24.7443H2.92935L1.77936 16.6026C1.71546 16.1559 2.06052 15.7572 2.51259 15.7572C2.71732 15.7572 19.7502 15.7572 19.8359 15.7572C20.2874 15.7572 20.6332 16.1549 20.569 16.6038Z" fill="#282828"/>
</svg>




                <p1 className="text-[15px] text-black">
                Learn anything online
                </p1>
            </div>
        </div>
      </div>
      <FlexboxSpacer maxWidth={150} minWidth={50} className="hidden lg:block" />
      <div className="mt-8 lg:mt-20 lg:mr-10 lg:flex lg:justify-center lg:items-center">
        <div className="w-full max-w-xl lg:max-w-none">
          <Image width={1066} height={2096} style={{width:'36rem', height:'41rem', objectFit:'contain', objectPosition: 'center'}} src={'/assets/pricing1.png'} alt={"cv"} />
        </div>
      </div>
    </section></div>
   
  )
}

