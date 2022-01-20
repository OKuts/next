import {useRouter} from "next/router";
import {MainContainer} from "../../components/MainContainer/MainContainer";

export default function ({user}) {
    return (
        <MainContainer>
            <h1>User {user.id}</h1>
            <h2>{user.name}</h2>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
    const user = await response.json()
    return {
        props: {user},
    }
}
