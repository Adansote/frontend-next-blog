
"use client";
import PageHeader from '@/components/PageHeader'
import { cartContext } from '@/context/CartContext'
import { Table } from 'flowbite-react'
import { TableCell } from 'flowbite-react/lib/esm/components/Table/TableCell';
import React from 'react'
import { useContext } from 'react'


const Cart = () => {
    const {
        cartProducts,
        increaseQuantity,
        decreaseQuantity,
        totalQuantityProduct,
        totalPriceProduct, } = useContext(cartContext)

    return (
        <div className='space-y-8'>
            { /*  <pre>{JSON.stringify(cartProducts, null, 2)}</pre>*/}
            <PageHeader text="Book Cart" />
            <Table>
                <Table.Head>
                    <Table.HeadCell className='font-extrabold text-gray-900'>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell className='font-extrabold text-gray-900'>
                        Product name
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {
                        cartProducts.map((product) => (
                            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                                    {product.title}
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex justify-end items-center space-x-3">
                                        <button className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            onClick={() => decreaseQuantity(product.id)}

                                            type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            <span

                                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {product.quantity}
                                            </span>
                                        </div>
                                        <button className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            onClick={() => increaseQuantity(product.id)}

                                            type="button">
                                            <span className="text-center sr-only">Quantity button</span>
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}

                    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold'>
                        <Table.Cell className='whitespace-nowrap font-extrabold text-gray-900 dark:text-white'>
                            Cantidad de productos
                        </Table.Cell>
                        <Table.Cell className='text-right'>
                            <span className='text-right font-extrabold text-gray-900'>
                                {totalQuantityProduct}
                            </span>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold'>
                        <Table.Cell className='whitespace-nowrap font-extrabold text-gray-900 dark:text-white'>
                            Total
                        </Table.Cell>
                        <Table.Cell className='text-right'>
                            <span className='text-right font-extrabold text-gray-900'>
                                ${totalPriceProduct.toLocaleString("es-ES")}
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Cart
