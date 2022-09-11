import React, { useState } from "react"
import "./shortInput.css"

const HOST = process.env.HOST || "http://localhost:4000";

export const ShortInput = (props) => {
    const [input, setInput] = useState(props?.value ?? '');
    const [link, setLink] = useState('');

    async function upload(input) {
        const req = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: input })
        };
        const res = await fetch(`${HOST}/api`, req);
        setLink(await res.json());
    }

    const handleSubmit = event => {
        event.preventDefault();

        upload(input)
    }

    return (
        <div className="short">
            <h1>Short Link</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="text" 
                value={input} 
                onInput={e => setInput(e.target.value)}
                placeholder="Insira o link aqui" />
                <button id="BtnEnviar">Encurtar</button>
            </form>

            { link ? <p>Seu link: <a target="_blank" href={link}>{link}</a></p> : null}
            
        </div>
    );
}