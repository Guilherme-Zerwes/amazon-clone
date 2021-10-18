import Image from 'next/image'
import {ShoppingCartIcon,MenuIcon,SearchIcon} from '@heroicons/react/outline'
import {signIn, signOut, useSession} from 'next-auth/client'
import {useRouter} from 'next/router'
import { selectItems } from '../slices/basketSlice'
import {useSelector} from 'react-redux'

function Header() {
    const items = useSelector(selectItems)
    const [session] = useSession()
    const router = useRouter()

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p1 flex-grow py-2">
                <div onClick={() => router.push('/')} className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain"
                        className="cursor-pointer"/>
                </div>
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 transition duration-200">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={session? signOut : signIn} className="cursor-pointer link">
                        <p>{session? `Welcome ${session.user.name}` : 'Sign In'}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="relative cursor-pointer link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full font-extrabold bg-yellow-500">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
                <p className="link flex items-center"><MenuIcon className="h-6 mr-1"/> All</p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="hidden link lg:inline-flex">Electronics</p>
                <p className="hidden link lg:inline-flex">Food & Grocery</p>
                <p className="hidden link lg:inline-flex">Prime</p>
                <p className="hidden link lg:inline-flex">Buy Again</p>
                <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
                <p className="hidden link lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
