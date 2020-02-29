// ***********************
// Data
// ***********************

class UserData {
  constructor(username, password) {
    this.username = username
    this.password = password
    this.todos = []
  }
}

if (localStorage.length) {
  userList = JSON.parse(localStorage.getItem('datas'))
} else {
  userList = []
}



// ***********************
// DOM selector
// ***********************

const main = document.querySelector('#main')
const form = document.querySelector('#form')
const listTodo = document.querySelector('#listedTodo')

// ***********************
// Function
// ***********************

// render dom
const render = (template, node) => node.innerHTML = template

// handle login or register
const handleRegister = event => {
  // event.preventDefault()
  const username = event.target.elements['0'].value
  const password = event.target.elements['1'].value
  let userRegister = new UserData(username, password)
  userList.push(userRegister)
  localStorage.setItem('datas', JSON.stringify(userList))
  handleLogin(event)
}
    
const handleLogin = event => {
  // event.preventDefault()
  const user = event.target.elements['0'].value
  const pass = event.target.elements['1'].value
  const data = getItem().find(({username, password}) => username == user && password == pass)
  console.log(data)
  console.log(data ? true : false)
  if (data) {
    localStorage.setItem('logged', JSON.stringify(data))
    loggedUser()
    let listedTodo = ``
    for(let i = 0; i < data['todos'].length; i++) {
      listedTodo += `<li>${data['todos'][i]}</li>`
    }
    const afterLogged = `
    <h1> Hello ${loggedUser()['username']} </h1>
    <h3> Add what you wanna do today below here </h3>
    ${todos}
    <ul id="listedTodo">
      ${listedTodo}
    </ul>
    <button onclick="onLogOut(event)">Log Out</button>
    `  
    render(afterLogged, main)
  } else {
    event.preventDefault()
    alert('wrong user or pass')
  }
}

// add todos function
const handleTodos = event => {
  event.preventDefault()
  const addedTodo = event.target.elements['0'].value
  console.log(event.target.elements['0'].value)
  const existing = getItem()
  console.log(existing)
  const data = getItem().find(({username, password}) => username == loggedUser()['username'] && password == loggedUser()['password'])
  data['todos'].push(addedTodo)
  for (let i = 0; i < existing.length; i++) {
    if(existing[i]['username'] == data['username']) {
      existing[i] = data
    }
  }
  localStorage.setItem('datas', JSON.stringify(existing))
  console.log(data['todos'])
  console.log(existing, '<<<<')
  console.log(data, '>>>>')
  let listedTodo = ``
  for(let i = 0; i < data['todos'].length; i++) {
    listedTodo += `<li>${data['todos'][i]}</li>`
  }
  // listedTodo += `</ul>`
  const afterLogged = `
  <h1> Hello ${loggedUser()['username']} </h1>
  <h3> Add what you wanna do today below here </h3>
  ${todos}
  <ul id="listedTodo">
  ${listedTodo}
  </ul>
  <button onclick="onLogOut(event)">Log Out</button>
  `  
  render(afterLogged, main)
}

// getting item when load
const getItem = () => {
  return JSON.parse(localStorage.getItem('datas'))
}


// Logout
const onLogOut = () => {
  localStorage.removeItem('logged')
  // location.reload()
  render(login, main)
}

const loggedUser = () => {
  return JSON.parse(localStorage.getItem('logged'))
}

// ***********************
// DOM template
// ***********************

// DOM register
const register = `
<h1> You have to Register </h1>
<form id="form" onsubmit="handleRegister(event)">
  <div id="content">
    <label for="username">Username: </label>
    <br/>
    <input type="text" id="username" required/>
    <br/>
    <label for="password">Password: </label>
    <br/>
    <input type="password" id="password" required/>
    <br/>
    <button class="button" type="submit" value="Submit" >Register</button>
  </div>
</form>
`

// DOM Login
const login = `
<h1> You have to Login </h1>
<form id="form" onsubmit="handleLogin(event)">
  <div id="content">
    <label for="username">Username: </label>
    <br />
    <input type="text" id="username" required/>
    <br />
    <label for="password">Password: </label>
    <br />
    <input type="password" id="password" required/>
    <br />
    <button type="submit" value="Submit" >Login</button>
  </div>
</form>
<h4> Or register <button onclick="render(register,main)">here!</button></h4>
`
// DOM todosapp
const todos = `
  <form id="form-todo" onsubmit="handleTodos(event)">
    <div id="content">
      <input type="text" id="todos" placeholder="Input Your Todos List here" />
      <br />
      <button type="submit" value="Submit" >Add Todo </button>
    <div>
  </form>
`

window.onload = getItem

// ***********************
// DOM rendering
// ***********************
if (!localStorage.length ) {
  render(register, main)
} else {
  render(login, main)
}
