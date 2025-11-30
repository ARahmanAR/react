import MyCustom from './MyCustom'
function App() {
  const username = "Abdur Rahman"
  return (
    <> {/* This is React Fragment, used to group multiple elements */}
    <h1>Hello, Vite with React! | {username}</h1>
    <MyCustom />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, mollitia.</p>
    </>
  )
}

export default App;
