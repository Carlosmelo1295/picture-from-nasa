import './style.css'
import { getData } from './controller'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1 id="title">${getData.title}</h1> 
  <p id="date">Image date: ${getData.date} </p> 
  <img id="image" src="${getData.url}">
  <h3 id="subtitle">${getData.explanation}</h3> 

`


