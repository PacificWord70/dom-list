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

const item = document.createElement('div')
    item.innerHTML=
    `
        <div class="list-group">
            <div class="card-block">
                 <p>${movieTitle} (${movieYear})</p>
                <a href="http://www.imdb.com/find?ref_=nv_sr_fn&q=${titleWithDashes}&s=all">
                    <button type="button" class="btn btn-outline-info waves-effect">IMDB</button>
                </a>
                <button id = "love" type="button" class="btn btn-outline-info waves-effect">love</button>
                <button id = "remove" type="button" class="btn btn-outline-info waves-effect">Remove</button>
            </div>
        </div>
    `

    
    details.insertBefore(item,details.childNodes[0])

    document.querySelector('#love').addEventListener('click', pressLove)
    document.querySelector('#remove').addEventListener('click', pressRemove)

    document.querySelector('#love').style.backgroundColor = 'white'
    document.querySelector('#remove').style.backgroundColor = 'white'

    f.movieTitle.value = ''
    f.movieYear.value = ''

}

function pressLove()
{
    const item = this.parentElement.querySelector('#love')
    if(item.style.backgroundColor != 'white')
    {
        item.style.backgroundColor = 'white'
    } else {
        item.style.backgroundColor = '#EBF5FB'
    }
}

function pressRemove()
{
    this.parentElement.remove(this.parentElement)
}

listForm.addEventListener('submit', handleSubmit)