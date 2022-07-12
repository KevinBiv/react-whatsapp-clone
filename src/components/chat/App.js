import './App.css';

function App(props) {
    const {contactData} = props;
    console.log(contactData);

    return contactData == null ? <h1>No data</h1> : (
        <>
            <section className="section-box">
                <h1>{contactData.name}</h1>
                {/* <img src={contactData.profile} alt=""/> */}
            </section>
        </>
    )
}

export default App;