import React from 'react'
import { offer } from '../assets/images'
import {arrowRight} from '../assets/icons'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">

        <img src={offer} 
        className="object-contain w-full"
        width={773} height={687} alt="Offer"/>

      </div>


      <div className="flex flex-1 flex-col">

        

        <h2 className='font-palanquin text-4xl
          capitalize font-bold lg:max-w-lg'>

          <span className="text-coral-red 
           inline-block mt-3">Special</span> Offer
        
        </h2>


        <p className="mt-4 info-text lg:max-w-lg">
          Embark on a shoping journey that redefines your experience
          with unbeatable deals. From premier selections to incredible 
          discounts, we have it all.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill
          your every desire. Discover the ultimate shopping experience.
          Your journey with us is nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">

        <Button label="Shop now" iconURL={arrowRight}/>

        <Button 
          label="Learn more"
          backgroundColor="bg-white"
          textColor="text-slate-gray"
          borderColor="border-slate-gray"
        />

        </div>

      </div>

    </section>
  )
}

export default SpecialOffer