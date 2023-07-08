export const ChatSection = () => {
    return (
        <div>
            <Navbar />
            <div className="col h-3/4 bg-blue-400"></div>
        </div>
    )
}

const Navbar = () => {
    return (
        <div className="grid grid-cols-3 gap-1">
            <div className="col bg-gray-700 h-14 text-center text-cyan-200">NewGame</div>
            <div className="col bg-gray-700 h-14 text-center text-cyan-200">Chat</div>
            <div className="col bg-gray-700 h-14 text-center text-cyan-200">Moves</div>
        </div>
    )
}