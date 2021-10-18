import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({id,title,price,rating,description,category,hasPrime,image}) => {
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            hasPrime,
            image
        }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5 py-5 border-b-2">
            <Image width={200} height={200} src={image} objectFit="contain"/>
            <div className="col-span-3 mx-5">
                <p className="text-lg">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p className="text-sm font-bold">
                    <Currency quantity={price} currency="BRL"/>
                </p>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="https://links.papareact.com/fdw" loading="lazy" className="w-12"/>
                        <p className="text-xs text-gray-500">FREE Next-day delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
