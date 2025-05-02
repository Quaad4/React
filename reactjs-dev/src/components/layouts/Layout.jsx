export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer>
            <small>Created by: </small>
            <a target="_blank" href="https://github.com/Quaad4"><img alt="pfp" src="https://avatars.githubusercontent.com/u/77070436?v=4" /> 
                <p>
                    @Quaad4
                </p>
                <i className="fa-brands fa-github" />
            </a>
        </footer>
    )

    return (
        <>
            {header}
                <main>
                    {children}
                </main>
            {footer}            
        </>
    )
}