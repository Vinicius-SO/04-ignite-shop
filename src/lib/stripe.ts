import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
    //Quando for configurar o apiVersion use o valor mais recente que for recomendado pelo intellisense
    apiVersion:'2023-10-16', 
    appInfo:{
        name: 'Ignite Shop'
    }
})