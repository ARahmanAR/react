function Card({username, btnText}) {
    console.log(username);
    
    return (
        <div className="max-w-xs rounded-2xl shadow-md bg-black text-gray-100 mb-4">
            <img
                src="https://picsum.photos/301"
                alt=""
                className="object-cover object-center w-full rounded-t-2xl h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{username || 'User'}</h2>
                    <p className="text-gray-400">
                        {username || 'User'} ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
                        tempora ipsum soluta amet corporis accusantium aliquid consectetur
                        eaque!
                    </p>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                >
                    {btnText || 'Click Me'}
                </button>
            </div>
        </div>
    )
}

export default Card