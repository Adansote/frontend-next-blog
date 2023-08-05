import React from 'react'
import { fetchApi } from '../helpers/fetch-api';
import PageHeader from '@/app/components/PageHeader';
import PageCardImage from '@/app/components/PageCardImage';
import { Post } from '@/interfaces/post';
import PagePagination from '../components/PagePagination';
import { useSearchParams } from 'next/navigation';


//el link si  no funciona el de admin calar con el de produccion 
//https://strapi-production-6e4c.up.railway.app/

const getData = async (page = 1, pageSize = 2) => {
    const path = "/posts";
    const urlParamsObject = {
        populate: "*",
        sort: {
            createdAt: "asc",
        },
        pagination: {
            page: page,
            pageSize: pageSize,
        },
    };

    const { data, meta } = await fetchApi(path, urlParamsObject, {});

    return {
        data,
        pagination: meta.pagination,
    };

}
interface Props {
    searchParams: {
        page?: string
    }
}

const Blog = async ({ searchParams }: Props) => {
    const { page } = searchParams;
    let pageNumber = page ? parseInt(page) : 1;
    if (isNaN(pageNumber) || pageNumber < 1) {
        pageNumber = 1;
        console.log(
            "valor no valido como parametro de pagina. se establece a 1 😎"
        )
    }

    const { data, pagination } = await getData(pageNumber);
    return (
        <div className='space-y-8 '>
            <PageHeader text='Latest Posts' />
            <PagePagination pagination={pagination} />
            <div className='grid gap-4'>
                {
                    data.map((post: Post) => (
                        <PageCardImage
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </div>
            <div className='py-5 space-y-8 '><PagePagination pagination={pagination} /></div>

        </div>
    )
}



export default Blog