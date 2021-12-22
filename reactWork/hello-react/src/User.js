import React, { useEffect } from "react";



function User({user, onRemove, onToggle}) {
    useEffect(() => {
        // console.log('Display component in screen');
        console.log('Set user value');
        console.log(user);
        return () => {
            // console.log('Disappear component in screen');
            console.log('Before change user');
            console.log(user);
        };
    }, [user]); //사용법이 , []
    return(
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black',
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>

    )
}

export default React.memo(User);