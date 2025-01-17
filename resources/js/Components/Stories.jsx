export default function Stories() {
    const stories = [
        { id: 1, user: 'user1', avatar: '/placeholder.jpg' },
        { id: 2, user: 'user2', avatar: '/placeholder.jpg' },
        { id: 3, user: 'user3', avatar: '/placeholder.jpg' },
        { id: 4, user: 'user4', avatar: '/placeholder.jpg' },
        { id: 5, user: 'user5', avatar: '/placeholder.jpg' },
        { id: 6, user: 'user6', avatar: '/placeholder.jpg' },
    ]

    return (
        <div className="flex gap-4 p-4 overflow-x-auto">
            {stories.map((story) => (
                <div
                    key={story.id}
                    className="flex flex-col items-center space-y-1 cursor-pointer"
                >
                    <div className="w-24 h-24 rounded-xl ring-2 ring-[#19A7CE] p-1">
                        <img
                            src={story.avatar}
                            alt={`${story.user}'s story`}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                    <span className="text-xs text-[#146C94]">{story.user}</span>
                </div>
            ))}
        </div>
    )
}
