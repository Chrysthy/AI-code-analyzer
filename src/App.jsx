import { useState } from 'react';
import { analyzeCode } from './services/gemini';
import './App.css';

function App() {

  const [code, setCode] = useState('');

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  const [error, setError] = useState('');

  const handleAnalyze = async () => {

    if (!code.trim()) return;

    setLoading(true);

    try {
      const analysis = await analyzeCode(code);
      setResult(analysis);

    } catch (error) {
      setError(error.message)

    } finally {
      setLoading(false);
    }
  };


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
          disabled={!code.trim() || loading}>{loading ? 'Analyzing...' : 'Analyze code'}</button>

        {error && (
          //Se tiver erro, renderiza a mensagem de erro

          <div className="error-message">
            {error}
          </div>

        )}

        {result && (
          //Se tiver o resultado, renderiza o resultado
          <div div className="result-container">

            <h2 className="result-title">Code Analysis</h2>

            <div className="result-content">
              {result}
            </div>

          </div>
        )}

      </div>

    </main >

  )
}

export default App
