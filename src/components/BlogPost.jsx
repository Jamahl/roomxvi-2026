import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getPost } from '../data/posts';
import CodeBlock from './CodeBlock';

import BackButton from './ui/BackButton';

const BlogPost = () => {
    const { id } = useParams();
    const post = getPost(id);

    if (!post) return <div className="text-white container mx-auto px-4 py-20">Post not found</div>;

    return (
        <div className="container mx-auto px-4 max-w-3xl pb-20">
            <BackButton />

            <div className="mb-8">
                <time className="text-sm text-gray-600 font-mono">{post.date}</time>
            </div>

            <article className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-medium text-white mb-8" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-xl font-medium text-white mt-12 mb-4" {...props} />,
                        p: ({ node, ...props }) => <p className="text-gray-400 leading-relaxed mb-6" {...props} />,
                        strong: ({ node, ...props }) => <strong className="text-white font-medium" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-gray-700 pl-4 italic text-gray-500 my-8" {...props} />,
                        a: ({ node, ...props }) => <a className="text-white underline hover:text-gray-300 transition-colors" {...props} />,
                        img: ({ node, ...props }) => <img className="rounded-xl shadow-lg my-8 w-full object-cover border border-gray-800" {...props} />,
                        pre: ({ children }) => <>{children}</>,
                        code: CodeBlock,
                        table: ({ node, ...props }) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
                        thead: ({ node, ...props }) => <thead className="bg-[#111111]" {...props} />,
                        tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-800" {...props} />,
                        tr: ({ node, ...props }) => <tr className="border-b border-gray-800" {...props} />,
                        th: ({ node, ...props }) => <th className="p-4 text-sm font-medium text-gray-300 uppercase tracking-wider" {...props} />,
                        td: ({ node, ...props }) => <td className="p-4 text-sm text-gray-400 whitespace-nowrap" {...props} />,
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </article>
        </div>
    );
};

export default BlogPost;
