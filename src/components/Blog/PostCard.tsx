interface BlogCardProps {
    postId: string;
    title: string;
    content: string;
}

import { Card } from 'flowbite-react';

export default function BlogCard(props : BlogCardProps){
    return (
        <Card
            className="max-w-sm"
            href="#"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    {props.title}
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">

                    {props.content}

            </p>
        </Card>
    )

}
