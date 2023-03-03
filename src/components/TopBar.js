import React from 'react';
import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/outline';

function TopBar() {
  const description = `eCommerce with NEXT JS. Log In and Log Out authentication Flow with NextAuth. Add to Basket Functionality using Redux toolkit. Basket page where you can add/remove products and change their quantities. Complete Stripe Payments Checkout Flow for all the items in basket. Used Tailwind CSS to built a beautiful responsive Amazon Clone. 
		
  Tech Stack: TypeScript, Next JS, Redux Toolkit, Next Auth, Stripe Integration and Tailwind CSS. 
  `;
  return (
    <div className="flex align-top bg-black text-white justify-end px-5">
      <div className="text-sm flex">
        <a
          href="https://github.com/connect2aq/bonzerstore"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className=""
            width={25}
            height={25}
            src="/github.svg"
            alt="GitHub"
          ></Image>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
