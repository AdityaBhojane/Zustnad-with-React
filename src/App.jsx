import { useStore } from "./Store/Store.js"

function App() {
  const {count, increase,decrease } = useStore();
  console.log(count)

  return (
    <>
      <h1>hello</h1>  
      <h2>count : {count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease} >decrease</button>
    </>
  )
}

export default App