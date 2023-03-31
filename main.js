import './src/index.css'
import './src/Calender/JQuery.js'
import { GetData, PostData } from './src/Api'
import { RenderTask } from './src/RenderTask'
// ..........................................
const form = document.getElementById('form')
const task = document.getElementById('task')
const doing = document.getElementById('doing')
const completed = document.getElementById('completed')
const handleSetData = e => {
  e.preventDefault()
  const date = new persianDate().State.persian
  const year = date.year
  const month = date.month + 1
  const day = date.day
  const start = `${year}/${month}/${day}`
  const formData = new FormData(form)
  formData.set('start', start)
  formData.set('status', 'todo')
  const data = Object.fromEntries(formData)
  if (form.title.value) {
    PostData(data).then(function (response) {
      render()
    })
  }
}
function render() {
  GetData().then(function (response) {
    const todo = response.data.filter(item => item.status === 'todo')
    RenderTask(todo, task)
    const doingData = response.data.filter(item => item.status === 'doing')
    RenderTask(doingData, doing)
    const completedData = response.data.filter(
      item => item.status === 'completed'
    )
    RenderTask(completedData, completed)
  })
}
render()
form.addEventListener('submit', handleSetData)
task.addEventListener('click', e => {
  console.log(e.target.closest('[data-action]'))
  if(e.target.closest('[data-action]')){
    
  }
})
