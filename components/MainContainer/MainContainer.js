import A from "../A/A";
import st from './Nav.module.scss'

export const MainContainer = ({children}) => {
    return (

        <>
            <div className={st.nav}>
                <A href="/" text="main"></A>
                <A href="/users" text="users"></A>
            </div>

            {children}
        </>
    )
}
