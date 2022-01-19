import {useRouter} from "next/router";

export default function () {
    const {query} = useRouter()

    return (
        <h1>User {query.id}</h1>
    )
}
