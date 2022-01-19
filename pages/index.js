import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <Link href="/users">
                <div className='link'>
                    <a>users</a>
                </div>
            </Link>
            <h1>Main page</h1>
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

export default Index
