export const RenderTask = (data, task) => {
  task.innerHTML = ''
  data.map(item => {
    const newTask = `<div data-id=${
      item.id
    } class="bg-white rounded-md p-3 mb-3 mx-2">
    <div class="flex justify-between">
      <p id="taskTitle" class="text-xl font-semibold">${item.title}</p>
      <button data-action='delete'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="red"
                    class="bi bi-x"
                    viewBox="0 0 16 16">
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
    </div>
    <div class="mt-7 flex gap-2">
      <span>start:</span>
      <span id="taskStart">${item.start}</span>
    </div>
    <div class="mt-7 flex gap-2">
      <span>end:</span>
      <span id="taskEnd">${item.date}</span>
    </div>
    <div class="flex justify-evenly mt-7">
      <button data-action='previous' ${
        item.status === 'todo' ? 'disabled' : ''
      } class="${
      item.status === 'todo' ? 'bg-gray-300' : 'bg-blue'
    } p-3 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-dash"
          viewBox="0 0 16 16">
          <path
            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
      <button class="bg-blue p-3 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-info-circle"
          viewBox="0 0 16 16">
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </button>
      <button data-action='next' ${
        item.status === 'completed' ? 'disabled' : ''
      } class= 'p-3 rounded-md ${
      item.status === 'completed' ? 'bg-gray-300' : 'bg-blue'
    }'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16">
          <path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
        </svg>
      </button>
    </div>
  </div>`
    task.innerHTML += newTask
  })
}
