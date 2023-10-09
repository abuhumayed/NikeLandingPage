import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button2 from "../components/Button2"
import Button from "../components/Button"
Button

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img className="object-contain w-full" src={offer} alt="offer" width={773} height={687}/>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg"> 
          <span className="text-coral-red " > Special </span> 
           Offer 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text " >Exciting news awaits you! We're thrilled to announce a special treat for our loyal customers – a fantastic 30% discount on our entire range of Nike merchandise. This exclusive offer is our way of expressing gratitude for your unwavering support and dedication to the Nike brand.</p>
        <p className="mt-6 lg:max-w-lg info-text ">From performance-driven sportswear to iconic sneakers that make a statement, each item in our collection reflects the spirit of innovation and excellence that defines Nike. Don't miss out on this opportunity to elevate your style and performance with top-notch products at an irresistible price. </p>
        <div className="mt-11 flex flex-wrap gap-4" >
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button2 label="Learn More" />

        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer