let count=0
let c=document.getElementById("counter")
let d=document.getElementById("saves")
function increment()
{
    count=count+1
    c.innerText=count
}
function decrement()
{
    count=count-1
    c.innerText=count
}

function reset()
{
    c.innerText=0
    count=0
}
function save()
{
let op=count + " - "
d.textContent+=op
c.textContent=0
count=0
}
function clears()
{
    op=" "
    d.textContent="Entries :"+ op
}