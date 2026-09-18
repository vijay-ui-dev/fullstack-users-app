import { useState } from "react";

function GeminiAi() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const askQuestion= async () => {
        if(question.trim()===""){
           return setLoading(true)
        }
        try {
            const response = await fetch(
                "https://fullstack-backend-app.onrender.com/ask-ai",   // apna backend, Gemini nahi!
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ question })   // jo user ne type kiya
                }
            );
            const data = await response.json();
            console.log('Backend Data:', data);
            setAnswer(data.choices[0].message.content);   
        }
        catch(error) {
            console.log("Error", error);
        }
        finally {
            setLoading(false);
        }
    }
    return(
        <>
            <div>
                <input type="text" value={question} onChange={(e)=> setQuestion(e.target.value)} placeholder="Apna sawal poochho..." />
                <button onClick={askQuestion}>Ask Me</button>
                {loading && <p>Sochta hoon....</p>}
                {answer && <p><strong>Answer : </strong> {answer}</p>}
            </div>
        </>
    )
}

export default GeminiAi;