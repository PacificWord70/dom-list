const listForm = document.querySelector('#listForm')
const details = document.querySelector('#details')

function handleSubmit(ev)
{
    ev.preventDefault()
    const f = ev.target

    const movieTitle = f.movieTitle.value
    const movieYear = f.movieYear.value

    const titleArray = movieTitle.split(' ')
    let i=0
    let titleWithDashes = ''
    for(i=0;i<titleArray.length-1;i++)
    {
        titleWithDashes+=titleArray[i]+'-'
    }
    titleWithDashes+=titleArray[i]

details.appendChild(`
<div class="list-group">
    <a href="http://www.imdb.com/find?ref_=nv_sr_fn&q=${titleWithDashes}&s=all" class="list-group-item">${movieTitle} (${movieYear})</a>
    <button type="Submit" class="btn btn-outline-info waves-effect">Go</button>
</div>
`)
}

listForm.addEventListener('submit', handleSubmit)