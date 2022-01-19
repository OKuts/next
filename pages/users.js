import Link from 'next/link'
import {useState} from "react";

const  Users = () => {
    const [users] = useState([{id: 1, name: 'Vasya'}, {id: 2, name: 'Petya'}])

    return (
        <div>
            <Link href="/">
                <div className='link'>
                    <a>main</a>
                </div>
            </Link>
            <h1>Users</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
            <style jsx>
                {`
                  .link {
                    background: lightgray;
                  }
                `}
            </style>
        </div>
    )
}

export default Users
