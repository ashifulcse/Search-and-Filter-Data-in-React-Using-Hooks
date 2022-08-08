import React, { useState } from "react";

export default function Home() {
    const [search, setNewSearch] = useState("");
    
    const people = [
        { name: "Alan Turing", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Barbara Liskov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
    ];

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    
    const filtered = !search ? people : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h2>Phone book</h2>
            Filter persons:{" "}
            <input type="text" value={search} onChange={handleSearchChange} />
            <h2>Numbers</h2>
            {filtered.map((person) => {
                return (
                  <p key={person.id}>
                    {person.name} - {person.number}
                  </p>
                );
            })}
        </> 
    );
};
