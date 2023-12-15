import Link from "next/link";
import Image from "next/image";
import { ImageContainer, SucessContainer } from "../styles/pages/sucess";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

type SucessProps = {
    customerName: string;
    product:{
        name: string;
        imageUrl: string;
    }
}

export default function Sucess ({customerName,product}: SucessProps){
    return(
        <SucessContainer>
            <h1>Compra efetuada</h1>
            <ImageContainer>
                <Image src={product.imageUrl} width={120} height={110} alt=""/>
            </ImageContainer>

            <p>
                Uhull <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
            </p>
            <Link href={''}>
                Voltar ao catálogo
            </Link>
        </SucessContainer>
    )
}

export const getServerSideProps :GetServerSideProps = async({query, params})=> {
    const sessionId =String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand:['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const product = session.line_items.data[0].price.product as Stripe.Product

    return{
        props:{
            customerName,
            product:{
                name:product.name,
                imageUrl: product.images[0]
            }
        }
    }
}