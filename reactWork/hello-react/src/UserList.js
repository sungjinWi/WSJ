import React from "react";
import User from "./User";

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => ( /* fucntion이 아니라 property 설정하는 것이다 */
                <User
                user={user}
                key={user.id}
                onRemove={onRemove}
                onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default React.memo(UserList);