import matter from 'gray-matter';

// Import all markdown files from the content directory
const modules = import.meta.glob('../content/*.md', { as: 'raw', eager: true });

export const posts = Object.keys(modules).map((path) => {
    const slug = path.split('/').pop().replace('.md', '');
    const content = modules[path];
    const { data, content: markdownBody } = matter(content);

    return {
        id: slug,
        title: data.title,
        date: new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        excerpt: data.excerpt,
        content: markdownBody,
        rawDate: new Date(data.date) // Useful for sorting
    };
}).sort((a, b) => b.rawDate - a.rawDate); // Sort by newest first

export const getPost = (id) => posts.find(p => p.id === id);
