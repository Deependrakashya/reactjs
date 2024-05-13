import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
// const reactElement ={
// 	type:'a',
// 	props:{
// 		href:'https://google.com',
// 		target:'_blank'
// 	},
// 	children:'Click me to visit google'
// }
const Another =(
  <a href="google.com">Google</a>
)
const jsVariable= ' this is js variable ';
const CostomRender = React.createElement(
  'a',
	{
		href:'https://google.com',
		target:'_blank',
	},
  '  Click me to visit google',
  jsVariable
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai></Chai>
  
    {CostomRender}  {/*  evaluated expression   */}
  </>
 
)
