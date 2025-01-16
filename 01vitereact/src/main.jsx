import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visist Google
  </a>
)

ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)
