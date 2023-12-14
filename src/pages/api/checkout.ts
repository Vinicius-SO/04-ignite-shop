import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const priceId = 'price_1OLz7TAglFdGOI7iKAdDKsME'

    const successsUrl = `${process.env.NEXT_URL}/sucess`
    const cancelUrl = `${process.env.NEXT_URL}/`
    const checkoutSession = await stripe.checkout.sessions.create({
        mode:'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        success_url:successsUrl,
        cancel_url: cancelUrl
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}