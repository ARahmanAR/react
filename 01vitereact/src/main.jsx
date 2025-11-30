import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
// }


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to go to Google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>visit Google</a>
// )

const anotherUser = "AR Rahman"

const ReactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'Click me to go to Google', anotherUser
)

createRoot(document.getElementById('root')).render(
  
    ReactElement
  
)
