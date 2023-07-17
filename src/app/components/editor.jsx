export const Editor = ({notesData = []}) => {
    return (
        <div>
            <h2>All Notes</h2>
            <div>
                {notesData.map((item) => {
                    return (
                        <div 
                        className="p-2 rounded-xl text-black"
                        key={item.id} style={{ background: "#" + item.color}}>
                            <div>{item.body}</div>
                            <div>{item.userId}</div>
                            </div>
                    );
                })}
            </div>
        </div>
    )
} 