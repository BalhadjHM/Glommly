export default function RightSidebar() {
    const trendingTopics = [
        { title: 'Technology', posts: '125K posts' },
        { title: 'Sports', posts: '98K posts' },
        { title: 'Entertainment', posts: '87K posts' },
        { title: 'Politics', posts: '76K posts' },
    ]

    const suggestedAccounts = [
        { name: 'John Doe', username: '@johndoe' },
        { name: 'Jane Smith', username: '@janesmith' },
        { name: 'Bob Johnson', username: '@bobjohnson' },
    ]

    return (
        <div className="hidden lg:block fixed right-0 top-16 w-1/4 h-[calc(100vh-4rem)] bg-white border-l border-[#AFD3E2] p-4 overflow-y-auto">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-[#146C94] mb-4">Trending Topics</h2>
                <div className="space-y-2">
                    {trendingTopics.map((topic) => (
                        <div
                            key={topic.title}
                            className="p-3 w-full xl:w-2/3 bg-[#F6F1F1] rounded-lg hover:bg-[#AFD3E2] transition-colors cursor-pointer"
                        >
                            <h3 className="font-medium text-[#146C94]">{topic.title}</h3>
                            <p className="text-sm text-[#19A7CE]">{topic.posts}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-[#146C94] mb-4">Suggested Accounts</h2>
                <div className="space-y-2">
                    {suggestedAccounts.map((account) => (
                        <div
                            key={account.username}
                            className="p-3 w-full xl:w-2/3 flex items-center gap-3 hover:bg-[#F6F1F1] rounded-lg transition-colors cursor-pointer"
                        >
                            <img
                                src='/placeholder.jpg'
                                alt={account.name}
                                className="w-10 h-10 rounded-full border border-[#AFD3E2]"
                            />
                            <div>
                                <h3 className="font-medium text-[#146C94]">{account.name}</h3>
                                <p className="text-sm text-[#19A7CE]">{account.username}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

