import axios from "axios";



const url: string = 'https://api.nasa.gov/planetary/apod?api_key=tM2ETsnD4QUGo9R8nQ5q5LbR2Dicj3aWcxCxlFkV'
let response = await axios.get(url)

export const getData = {
  title: response.data.title,
  explanation: response.data.explanation,
  url: response.data.url,
  date: response.data.date,

}





