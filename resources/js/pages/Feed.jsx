import { Link } from '@inertiajs/react';

export default function Home({posts}) {
    return(
        <div>
            <h1 className='py-12 title text-center'>Welcome Home <span className='text-blue-600'>John Doe</span></h1>

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className='p-4 border-b'>
                        <div className='text-sm text-slate-600'>
                            <span>Posted On: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className='font-medium'>{post.content}</p>
                    </div>
                ))}
            </div>

            <div className='pt-12'>
                {posts.links.map(link => (
                    link.url ?
                    <Link key={link.url} href={link.url} dangerouslySetInnerHTML={{__html: link.label}} className={`mr-2 py-1 px-3 border border-slate-400 rounded-md hover:bg-slate-100 ${link.active ? 'bg-blue-200' : ''}`} />
                    :
                    <Link key={link.url} dangerouslySetInnerHTML={{__html: link.label}} className={`mr-2 py-1 px-3 border text-slate-300 border-slate-300 rounded-md`} />
                ))}
            </div>

            <Link preserveScroll href='/' className='block title mt-[1000px]'>{new Date().toLocaleTimeString()}</Link>

        </div>
    )
}
