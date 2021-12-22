import React from "react";
import User from "./User";

function UserList() {
    const users = [
        {
            id: 1,
            username: "Undead",
            email: 'undead@undercity.com'
        },
        {
            id: 2,
            username: "Bloodelf",
            email: 'bloodelf@silvermoon.com'
        },
        {
            id: 3,
            username: "Nightelf",
            email: 'nightelf@darnasus.com'
        }
    ]; 

    // return (
    //     <div>
    //         <User user={users[0]} />
    //         <User user={users[1]} />
    //         <User user={users[2]} />
    //     </div>
    // );

    return (
        <div>
            {users.map(user => ( /* fucntion이 아니라 property 설정하는 것이다 */
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList;