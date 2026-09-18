import Nav from "../NavBar/Nav";

function Home(){
    const myName = "Vijay Kumar";
    const exp = 8;
    const role = "UI development";
    return(
        <>
            <Nav></Nav>
            <h1>Welcome!</h1>
            <h3>My name is {myName}. I have {exp} years of experience in {role}, How i can help you?</h3>
        </>
    )
}

export default Home;