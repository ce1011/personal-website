import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import BlogCard from '@/components/Blog/PostCard';
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import ReactMarkdown from 'react-markdown'
import {IoArrowBack} from "react-icons/io5";
import Link from "next/link";
import dayjs from 'dayjs';
import * as readingTime from 'reading-time';
import Head from "next/head";
import Footer from "@/components/Blog/Footer";

interface Post {
    _id: string;
    title: string;
    content: string;
    createAt: string;
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id as string | undefined; // Use optional chaining to safely access 'id'

    if (!id) {
        // Handle the case when 'id' is undefined (e.g., show an error page or redirect)
        return {
            notFound: true, // Return a 404 page
        };
    }

    const host = process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
    const response = await fetch(`${host}/api/post?id=${encodeURIComponent(id)}`);
    const post = await response.json();

    return { props: { post } };
};

export default function PostsPage({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>{post.title} | Paco的網絡迷途小角落</title>

            </Head>
        <div className="bg-base-100 ">
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <Link href="/blog" className="btn btn-square btn-ghost">
                    <IoArrowBack size="24" className="h-12"/>
                    </Link>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">          <Typewriter
                        words={['Paco的網絡迷途小角落', 'Paco之網絡幽徑幼隅',
                      ]}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={30}
                        deleteSpeed={30}
                        delaySpeed={2000}
                    /></a>
                </div>

            </div>
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl  mb-16">
                <article
                    className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img className="mr-4 w-16 h-16 rounded-full"
                             src="/blogicon.png" alt="Paco Au-Yeung"/>
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold text-white">Paco Au-Yeung</a>
                                <p className="text-base font-light text-gray-400">Software Developer and Unemployed</p>
                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                    {dayjs(post.createAt).format("MMM D, YYYY h:mm A")}
                                </p>
                            </div>
                    </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">{post.title}</h1>
                <h3 className="mb-4 text-xl font-medium leading-tight lg:mb-6 lg:text-xl text-white">{readingTime.default(post.content).text}</h3>
            </header>
            <div className=" prose">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
                </article>


            </div>
            <Footer/>
        </div>
</>
    );
};
