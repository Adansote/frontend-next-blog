
"use client"

import React, { useContext } from 'react'
import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { cn } from '../helpers/className';
import { usePathname } from 'next/navigation';
import { cartContext } from '@/context/CartContext';

const navLinks = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "/blog",
        text: "Blog",
    },
    {
        href: "/store",
        text: "Store",
    },
    {
        href: "/cart",
        text: "Cart",
    },

];
const Header = () => {
    const pathname = usePathname();
    const { totalQuantityProduct } = useContext(cartContext);
    return (
        <Navbar
            className=' shadow bg-green-200 my-8 text-sm font-extrabold text-gray-900'
            fluid
            rounded
        >
            <Navbar.Brand>
                <img
                    src='https://flowbite.com/docs/images/logo.svg'
                    className='mr-3 h-6 sm:h-9'
                    alt='Flowbite Logo'
                />
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                    strapi
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {
                    navLinks.map((navLink) => (
                        <Navbar.Link
                            key={navLink.href}
                            href={navLink.href}
                            active={pathname === navLink.href}
                            as={Link}
                            className={cn(
                                pathname === navLink.href && "md: text-blue-500 bg-gray-950"
                            )}
                        >
                            <span className='relative'>
                                {navLink.text}
                                {
                                    navLink.text === "Cart" && (
                                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                                            {totalQuantityProduct}
                                        </div>
                                    )
                                }
                            </span>
                        </Navbar.Link>
                    ))
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
