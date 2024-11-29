import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData()
    console.log(loadedUsers);

    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        console.log('delete id', id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Delete document successfully')
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })
    }
    return (
        <div>
            <h2>Users {users.length}</h2>
            {
                users.map(user => <p
                    key={user._id}>{user.name}
                    {user.email}
                    <button onClick={() => handleDelete(user._id)}>X</button>
                    <NavLink to={`/update/${user._id}`}>update</NavLink>
                </p>)
            }
        </div>
    );
};

export default Users;