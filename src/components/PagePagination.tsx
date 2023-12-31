import Link from 'next/link';
import React from 'react'
import { cn } from '../helpers/className';


interface Props {
    "pagination": {
        "page": number, // página actual
        "pageSize": number, // número de elementos por página
        "pageCount": number, // total de páginas
        "total": number,// total de elementos
    }
}
const PagePagination = ({ pagination }: Props) => {
    const { page, pageCount, pageSize, total } = pagination;
    const classNumber = "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    const classNumberActive = "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
    const classPrevious = "flex items-center justify-center px-3 h-8 ml-0 leading-tight text-blue-500 bg-white border border-blue-300 rounded-l-lg hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white";
    const classNext = "flex items-center justify-center px-3 h-8 leading-tight text-blue-500 bg-white border border-blue-300 rounded-r-lg hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white";


    return (
        <><nav aria-label="Page navigation example " className='text-center'>
            <div className="overflow-x-auto">
                <ul className="flex justify-center space-x-2 md:space-x-4 text-xs">
                    <li>
                        <Link href={
                            page === 1 ? `/blog?page=${page}` : `/blog?page=${page - 1}`
                        } className={cn(classPrevious, {
                            "opacity-50 pointer-events-none": page === 1,
                        })
                        }>
                            Previous
                        </Link>
                    </li>
                    {
                        Array.from({ length: pageCount }).map((_, index) => (
                            <li>
                                <Link href={`/blog?page=${index + 1}`}
                                    className={`${index + 1 === page ? classNumberActive : classNumber}`}
                                >
                                    {index + 1}
                                </Link>
                            </li>
                        ))
                    }

                    <li>
                        <Link href={
                            page === pageCount
                                ? `/blog?page=${page}`
                                : `/blog?page=${page + 1}`
                        }
                            className={cn(classNext, {
                                "opacity-50 pointer-events-none": page === pageCount,
                            })}
                        >
                            Next
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
        </>
    )
}

export default PagePagination
