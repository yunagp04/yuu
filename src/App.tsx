import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './about'

const data: string[] = ["a", "b", "c", "d"]
//น้องคนข้างหลังน่ารักที่สุดฮะ 
function App() {
  const [test, setTest] = useState<string>("Test");
  return (
    <div className="main">
      <h1>hello react</h1>
      <h2>{test}</h2>
      <About data={data} func={setTest} />
      {data.map((item, idx) => {
        if (item === "a") return <h1 key={idx}>AAA</h1>;
        else return <h4 key={idx}>{item}</h4>;
      })}
    </div>
  )
}

export default App;
