import Header from "../components/Header"
import CheckoutProduct from "../components/CheckoutProduct"
import Image from 'next/image'
import Currency from "react-currency-formatter"
import { selectItems, selectTotal } from "../slices/basketSlice"
import { useSelector } from "react-redux"
import { session, useSession } from "next-auth/client"

const Checkout = () => {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [session] = useSession()
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-3xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj" width={1020} height={250} object="contain"/>
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        {items.length < 1 ? (<p className="text-3xl border-b pb-4">'Sem itens, continue comprando'</p>) :
                            items.map((item, i) => (
                                <CheckoutProduct 
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    description={item.description}
                                    category={item.category}
                                    hasPrime={item.hasPrime}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col mt-5 bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):
                                <span className="font-bold pl-2"><Currency quantity={total} currency="BRL"/></span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session? 'Sign in to checkout' : 'Proceed to Checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
