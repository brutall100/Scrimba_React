function Navbar() {
    return (
        <nav>
            <h1>Hello World</h1>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <p>This is where most of my content will go...</p>
        </main>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)


// ! REACT panaudojimas be instaliuotu Biblioteku
// Bus metamos klaidos, bet kodas veiks. 