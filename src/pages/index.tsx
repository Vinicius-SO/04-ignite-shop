import Image from 'next/image'
import { GetStaticProps } from 'next'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from "../styles/pages/home"

import camiseta1 from '../assets/Shirt/Type6.png'
import camiseta2 from '../assets/Shirt/Type7.png'
import camiseta3 from '../assets/Shirt/Type8.png'


type HomeProps = {
  products: {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {/* <pre>{JSON.stringify(props.list)}</pre> */}
    {products!.map(product=>{
      return(
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <strong>{product.name}</strong>
            <span> {Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(product.price/100)}</span>
          </footer>
        </Product>
      )
    })}
    </HomeContainer>
      
  )
}

export const getStaticProps: GetStaticProps = async()=>{
  const response = await stripe.products.list({
    expand:['data.default_price']
  })

  const products = response.data.map(product=>{
    const price = product.default_price as Stripe.Price
    
    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  console.log(products)
  return{
    props:{
      products,
    },
    revalidate: 60 * 60 * 2  //2 hours ,
  }
}