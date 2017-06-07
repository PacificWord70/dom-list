const listForm = document.querySelector('#listForm')
const details = document.querySelector('#details')

function handleSubmit(ev)
{
    ev.preventDefault()
    const f = ev.target

    const movieTitle = f.movieTitle.value
    const movieYear = f.movieYear.value

    details.innerHTML=`<li>${movieTitle} (${movieYear})</li>`
}

listForm.addEventListener('submit', handleSubmit)