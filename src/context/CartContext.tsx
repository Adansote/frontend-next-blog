"use client";
import { useState, createContext } from "react";
import React from 'react'

interface ProductCart {
    id: number;
    title: string;
    price: number;
    quantity: number;
}
interface productCartItem {
    id: number;
    title: string;
    price: number;
}
interface ProductCartContext {
    cartProducts: ProductCart[];
    addCartProducts: (product: productCartItem) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    totalQuantityProduct: number;
    totalPriceProduct: number;
}
interface Props {
    children: React.ReactNode;
}

export const cartContext = createContext({} as ProductCartContext);



const CartProvider = ({ children }: Props) => {
    const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);
    const addCartProducts = ({ id, title, price }: productCartItem) => {
        if (cartProducts.length === 0) {
            return setCartProducts([{ id, title, price, quantity: 1 }])
        }
        const productExist = cartProducts.find(product => product.id === id)
        if (!productExist) {
            return setCartProducts([...cartProducts, { id, title, price, quantity: 1 }])
        }
        setCartProducts(
            cartProducts.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        )
    }
    const increaseQuantity = (id: number) => {
        setCartProducts(
            cartProducts.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                } else {
                    return item;
                }
            })
        );
    };

    const decreaseQuantity = (id: number) => {
        if (cartProducts.find((item) => item.id === id)?.quantity === 1) {
            return setCartProducts(cartProducts.filter((item) => item.id !== id));
        }

        setCartProducts(
            cartProducts.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                } else {
                    return item;
                }
            })
        );
    };

    const totalQuantityProduct = cartProducts.reduce(
        (acc, current) => current.quantity + acc,
        0
    );

    const totalPriceProduct = cartProducts.reduce(
        (acc, current) => current.price * current.quantity + acc,
        0
    );

    return (
        <cartContext.Provider value={{
            cartProducts,
            addCartProducts,
            increaseQuantity,
            decreaseQuantity,
            totalQuantityProduct,
            totalPriceProduct,
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
