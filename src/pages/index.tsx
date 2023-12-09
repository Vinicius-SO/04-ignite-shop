import Image from 'next/image'
import { HomeContainer, Product } from "../styles/pages/home"


import camiseta1 from '../assets/Shirt/Type6.png'
import camiseta2 from '../assets/Shirt/Type7.png'
import camiseta3 from '../assets/Shirt/Type8.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt='' width={520} height={480}/>
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} alt='' width={520} height={480}/>
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      
    </HomeContainer>
  )
}
