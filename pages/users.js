import A from '../components/A/A'
import {useState} from "react";
import {MainContainer} from "../components/MainContainer/MainContainer";

const Users = () => {
    const [users] = useState([{id: 1, name: 'Vasya'}, {id: 2, name: 'Petya'}])

    return (
        <MainContainer>
            <h1>Users</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <A href={`/users/${user.id}`} text={user.name}></A>
                    </li>
                )}
            </ul>
            <style jsx>{`
              .nav {
                background: bisque;
              }
            `}
            </style>
        </MainContainer>
    )
}

export default Users
