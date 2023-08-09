import Link from "next/link";

interface BlogCardProps {
    postId: string;
    title: string;
    content: string;
    createAt: string;
}

import { Card } from 'flowbite-react';
import dayjs from "dayjs";

export default function BlogCard(props : BlogCardProps){
    return (
        <Link href={`/blog/${encodeURIComponent(props.postId)}`}>
        <div className="my-4 card w-96 bg-white shadow-xl hover:shadow-indigo-500/30 hover:scale-105 hover:transition-all duration-300 cursor-pointer hover:duration-300">
            <div className="card-body">
                <h2 className="card-title text-black">     {props.title}</h2>
                <p className="truncate">   {props.content}</p>
                <p className="card-actions justify-end">
                    Post at:       {dayjs(props.createAt).format("MMM D, YYYY h:mm A")}</p>
                </div>
            </div>
        </Link>
    )

}
