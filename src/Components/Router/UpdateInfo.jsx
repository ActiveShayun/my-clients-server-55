import { useLoaderData } from "react-router-dom";

;

const UpdateInfo = () => {
    const singleUser = useLoaderData()

    const updateUser = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const updateInfo = { name, email }
        console.log(updateInfo);

        fetch(`http://localhost:5000/users/${singleUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0)
                    alert('user update successful')
            })
    }
    return (
        <div>
            <h2> UpdateInfo : {singleUser.name}</h2>
            <form onSubmit={updateUser}>
                <input type="text" name="name" defaultValue={singleUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={singleUser.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateInfo;