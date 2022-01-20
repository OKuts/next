import A from '../components/A/A'
import {MainContainer} from "../components/MainContainer/MainContainer";
import Head from "next/head";

const Users = ({users}) => {

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <MainContainer>
                <h1>Users</h1>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <A href={`/users/${user.id}`} text={user.name}></A>
                        </li>
                    )}
                </ul>
            </MainContainer>
        </>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users},
    }
}
