import React from "react";

type Props = {
    data: string[];
    func: React.Dispatch<React.SetStateAction<string>>;
};

const About = ({data, func}: Props) => {
    return (
    <div>
        <h1>about</h1>
        {data.map((item, idx) => (
            <h4 key={idx}>{item}</h4>
        ))}
        <input onChange={(e) => func(e.target.value)} />
    </div>
    );
}

export default About;

//shortcut -> tsracfe
