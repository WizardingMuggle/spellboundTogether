// import entries from "./daily_entries"


// const USER = "muggle"
// const PASS = "muggle"


// const auth = (username, password) =>
// {
//     if(username === USER && password === PASS) return true
//     else return false
// }
// val1 = document.getElementById("user1").value
// val2 = document.getElementById("user2").value
// val3 = document.getElementById("name_date")
// val4 = document.getElementById("password")

// if(auth(val1,val2))
// {
//     entries.map((entry) =>
//         val3.innerText = `${entry.name} ${entry.date}`,
//         val4.innerText = `${entry.message}`
//     )
// }
// else print("Wrong Credentials! retry again you muggleblood!")
import entries from "./daily_entries.js"

const entriesDiv = document.getElementById("entries")

entries.forEach(entry => {
  const div = document.createElement("div")
  div.className = "entry"

  div.innerHTML = `
    <div class="date">${entry.date}</div>

    <div class="person">
      <div class="name">${entry.person}</div>
      <div class="message">${entry.message}</div>
    </div>
  `

  entriesDiv.appendChild(div)
})
