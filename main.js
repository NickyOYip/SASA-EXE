import './style.css'

// Simple counter functionality
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Count: 0</button>
    </div>
    <p class="read-the-docs">
      Click on the button to see the counter in action!
    </p>
  </div>
`

let counter = 0

document.querySelector('#counter').addEventListener('click', () => {
  counter++
  document.querySelector('#counter').textContent = `Count: ${counter}`
})
