import Link from 'next/link'
import st from '../A/A.module.scss'

export default function A({text, href}) {
    return (
        <Link href={href}>
            <a className={st.item}>{text}</a>
        </Link>
    )
}
