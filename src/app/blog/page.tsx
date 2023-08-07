"use client"

import React, { useEffect, useState } from 'react';
import {Typewriter} from "react-simple-typewriter";
import BlogCard from "@/components/Blog/PostCard";
import {connectToDatabase} from "@/lib/mongo";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

interface Post {
    _id: string;
    title: string;
    content: string;
}

async function getData() {
    const response = await fetch(`${process.env.VERCL_URL}/api/posts`);
    const posts = await response.json();
    return posts

}

export default async function PostsPage () {

    const posts = await getData()

    return (
        <div className="bg-base-100" >
            <h1 className="text-5xl font-bold text-center my-8">Blog</h1>
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

            <br/> </p>
            <div className="grid grid-cols-3 gap-4 mx-4">
                {posts.map((post : Post) => {
                    return (
                        <BlogCard postId={post._id} title={post.title} content={post.content} />
                    )
                })}
            </div>
        </div>
    );
};
