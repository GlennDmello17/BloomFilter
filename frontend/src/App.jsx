import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const [result, setResult] = useState('')
  async function handleUpload() {

    const result = await fetch('http://localhost:3000/add-username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username }),
    })
    const data = await result.json()
    setResult(data.message)
  }

  return (
    <>
      <div>
        <h1>Bloom Filter Username Lookup</h1>
        <hr></hr>
        <div>
          <h3>About the Project</h3>
          <p>
            This project is a Bloom Filter implementation in Node.js. <br />
            A Bloom Filter is a probabilistic data structure that helps check if an
            element (in this case, a username) might already exist.
          </p>

          <h4>Here’s how it works in this project:</h4>
          <ul>
            <li>You can enter a username in the input box.</li>
            <li>
              The request is sent to the backend where the Bloom Filter checks if the
              username exists.
            </li>
            <li>
              The backend returns the result:
              <ul>
                <li>“Username might already exist” (if all required bits are set)</li>
                <li>
                  “Username did not exist, now added” (if it was not found and then
                  inserted).
                </li>
              </ul>
            </li>
          </ul>

          <p>
            This approach makes checking large amounts of data very fast and memory
            efficient, which is especially useful when dealing with millions of
            usernames.
          </p>

          <h4>How to Use</h4>
          <ul>
            <li>Enter a username in the text box below.</li>
            <li>Click Check Username.</li>
            <li>
              Instantly see whether the username might already exist or is newly added.
            </li>
          </ul>
        </div>
        <hr></hr>
        <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Enter Username"></input><br></br><br></br>
        <button onClick={handleUpload}>Check Username</button>
        <div>
          <h3>
            Result:{" "}
            {result === "Username added successfully" ? (
              <span style={{ color: "green" }}>{result}</span>
            ) : (
              <span style={{ color: "red" }}>{result}</span>
            )}
          </h3>

        </div>
      </div>
    </>
  )
}

export default App
