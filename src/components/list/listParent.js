export const ListParentOrdered = () => {
    return (
    <ol>
        <ListItems />
    </ol>
    );
};

export const ListParentUnordered = () => {
    return (
    <ul>
        <ListItems/>
    </ul>
    );
};

// const  ListItems = () => {
//     return(
//         <div>
//             <li>Apple</li>
//             <li>Banana</li>
//             <li>orange</li>
//             <li>watermillon</li>
//         </div>
//     );
// };


const ListItems = () => {
    const iplTeams = [
  
    ]
    function filterData (iplTeams){
      const newTeams = iplTeams.filter((eachTeam) => eachTeam.won >=5);
      return newTeams
    }
  
    function countMatch(iplTeams){

        const newIplTeamsCount=iplTeams.reduce((acc,eachTeam)=>{
            return acc +eachTeam.won
        },0);
        return newIplTeamsCount;
    }

    return(
        <div>
            <h3>Total count of matchs {countMatch(iplTeams)}</h3>
            {filterData(iplTeams).map((eachTeam) => {
                return (
                    <div>
                        <h2>{eachTeam.teamName}</h2>
                        <img src={eachTeam.teamsLogo} width={100} height={100} />
                        {eachTeam.teamPlayers.map((eachPlayer)=>{
                            
                        })}
                        </div>
                )
            })}
        </div>
    )
  }


