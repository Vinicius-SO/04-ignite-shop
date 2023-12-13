import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function Product(){
    const { query } = useRouter()
    
    return(
        <ProductContainer>
            <ImageContainer>
                {/* <Image/> */}
            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis praesentium adipisci vero at quo temporibus dolore! Pariatur dolorum consequuntur, inventore quis reiciendis corporis. Repellendus amet optio numquam consequuntur dolores ea.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}