export const Editor = ({notesData = []}) => {
    return (
        <div>
            <h2 className="text-center text-5xl text-sky-800"
            >--All Notes--</h2>
            <p>This is Indiemakers week 6 assignment: a noteapp with prisma database. </p>
            <p2>All Notes display data can be modified from modifying database.</p2>
            
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
            <div9>
            <figure>
            <img
     src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce17b737-054f-430a-98b8-f3c34455912a/dg5zvv7-221313b2-5d99-4d5b-aeb6-315c13c124e0.jpg/v1/fill/w_621,h_621,q_70,strp/fesbuk_pp_by_mhw1_dg5zvv7-350t-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIxIiwicGF0aCI6IlwvZlwvY2UxN2I3MzctMDU0Zi00MzBhLTk4YjgtZjNjMzQ0NTU5MTJhXC9kZzV6dnY3LTIyMTMxM2IyLTVkOTktNGQ1Yi1hZWI2LTMxNWMxM2MxMjRlMC5qcGciLCJ3aWR0aCI6Ijw9NjIxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CkTUBi8sFUB3eJwo_l2t6nwcMtTDBHnRAxy3NdFBC38"
     alt="photoprofile"
     width="150px"                   
        />
        <p5>“True warriors are fierce because their training is fierce.”
— Miyamoto Musashi</p5>
         <figcaption>Modified by: Muhammad Haqy Wijaya (Haqy)</figcaption>
      </figure> 
      </div9>
        </div>      
    )
} 