import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj = {
    name: "Abdur Rahman",
    age: 24,
    profession: "Web Developer"
  }
  // let newArray = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card username={myObj.name} btnText= 'Click Here'/>
      <Card username={myObj.name = "AR Rahman"} btnText= 'Contact Here' />
      <Card />
    </>
  )
}

export default App
