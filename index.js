const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const removeBtn = document.getElementById("remove-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
const authorName = document.getElementById("author")

let myLeads = []
let oldLeads = []

tabBtn.addEventListener("click", function(){
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.unshift(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)           
  })
})

authorName.addEventListener("click", function(){
  window.open("https://links-devpedrofurquim.netlify.app/")
})

removeBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})


if (leadsFromLocalStorage) {
 myLeads = leadsFromLocalStorage
  render(myLeads)
}


function render(leads) {
    let listItens = ""
    for (let i = 0; i < leads.length; i++) {
    listItens += `
           <li>
               <a target='_blank' href='${leads[i]}'>
               ${leads[i]}
               </a>
           </li>
       `
       }
   ulEl.innerHTML = listItens
        }


inputBtn.addEventListener("click", function() {
  myLeads.unshift(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

