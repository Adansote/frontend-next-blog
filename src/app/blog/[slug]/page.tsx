import { fetchApi } from '@/app/helpers/fetch-api';
import { Post } from '@/interfaces/post';
import React from 'react'
import { notFound } from "next/navigation"
import PageHeader from '@/app/components/PageHeader';
import { formatDate } from '@/app/helpers/format-date-helper';
import Image from 'next/image';
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from 'next/link';


interface Props {
    params: {
        slug: string;
    }
}

const getData = async (slug = "") => {
    const path = "/posts";
    const urlParamsObject = {
        populate: "image",
        filters: {
            slug: slug,
        }

    };
    const { data } = await fetchApi(path, urlParamsObject, {})
    return data[0];
};


const Slug = async ({ params }: Props) => {
    const { slug } = params;
    const post: Post = await getData(slug)

    if (!post) {
        notFound()
    }


    const { title, body, description, createdAt, image } = post.attributes;
    const { url, width, height } = image.data.attributes.formats.medium;
    return (
        <div className='space-y-8'>
            <PageHeader text={title} />
            <p className='text-gray-500'>
                {formatDate(createdAt)}
            </p>
            <Image
                className='h-auto rounded-lg'
                src={url}
                alt={`imagen de ${title}`}
                width={width}
                height={height}
            />
            <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                {description}
            </p>
            <div className='prose'>
                {/* Este error en particular está codificado en TypeScript. El equipo de React está trabajando con el equipo de TypeScript para resolver esto. */}
                {/* https://github.com/vercel/next.js/issues/42292 */}

                <MDXRemote source={body} />
            </div>
            <Link href={`/blog`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Regresar
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>

        </div>

    )
}

export default Slug
