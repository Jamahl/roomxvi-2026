import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPost } from '../data/posts';

const BlogPost = () => {
    const { id } = useParams();
    const post = getPost(id);

    if (!post) return <div className="text-white container mx-auto px-4 py-20">Post not found</div>;

    return (
        <div className="container mx-auto px-4 max-w-3xl pb-20">
            <Link to="/" className="text-sm text-gray-500 hover:text-white mb-8 inline-block">← Back home</Link>

            <div className="mb-8">
                <time className="text-sm text-gray-600 font-mono">{post.date}</time>
            </div>

            <article className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-medium text-white mb-8" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-xl font-medium text-white mt-12 mb-4" {...props} />,
                        p: ({ node, ...props }) => <p className="text-gray-400 leading-relaxed mb-6" {...props} />,
                        strong: ({ node, ...props }) => <strong className="text-white font-medium" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-gray-700 pl-4 italic text-gray-500 my-8" {...props} />
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </article>
        </div>
    );
};

export default BlogPost;
