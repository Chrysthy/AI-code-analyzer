import { useState } from 'react';
import './App.css';

function App() {

  const [code, setCode] = useState('');

  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {

  }


  return (

    <main>

      <div className="container">

        <h1 className="title">AI Code Analyzer</h1>

        <h3 className='subtitle'>Paste your code and find ways to improve it.</h3>

        <div className="input-group">

          <textarea
            className='code-textarea'
            placeholder='Paste your code here... (JS, HTML, CSS, etc.)'
            value={code}
            onChange={(e) => setCode(e.target.value)}>
          </textarea>

        </div>

        <button
          className='analyze-button'
          onClick={handleAnalyze}
          disabled={!code.trim() || loading}>Analyze code</button>

        <div className="error-message">
          Error
        </div>

        <div className="result-container">

          <h2 className="result-title">Code Analysis</h2>

          <div className="result-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque aspernatur inventore dolores est. Amet nesciunt expedita
            ut accusantium maxime quisquam temporibus nisi, eaque commodi dolore minima, odio quaerat non inventore.</div>

        </div>

      </div>

    </main>

  )
}

export default App
