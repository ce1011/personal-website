"use client"

import React, { useEffect, useState } from 'react';
import {Typewriter} from "react-simple-typewriter";
import BlogCard from "@/components/Blog/PostCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import RootLayout from "@/components/layoutForPageRouter";

interface Post {
    _id: string;
    title: string;
    content: string;
}

export const getServerSideProps: GetServerSideProps<{
    posts: Post[];
}> = async () => {
    const host = process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

    const response = await fetch(`${host}/api/posts`);
    const posts = await response.json();
    console.log("the post is ", posts);

    return { props: { posts } };
};


export default function PostsPage ({posts}:InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="bg-base-100" >

            <h1 className="text-5xl font-bold text-center py-8">Blog</h1>
            <p className="text-center">
                <Typewriter
                    words={['在網絡的角落相遇，也是一種美好的緣分。', 'Meeting in this corner of the internet is also a beautiful destiny.', '於網海深處相遇，亦屬幽緣天註。', '\n' +
                    'To meet in this secluded cyber corner, is indeed a felicitous fate.']}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={30}
                    deleteSpeed={30}
                    delaySpeed={2000}
                />

                <br/>
            </p>
            <div className="grid grid-cols-3 gap-4 mx-4">
                {posts.map((post : Post) => {
                    return (
                        <BlogCard key={post._id} postId={post._id} title={post.title} content={post.content} />
                    )
                })}
            </div>
        </div>

    );
};
