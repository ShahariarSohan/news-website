//newsTabLoad
const newsTabLoad = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json()
    const newsCategories = data.data.news_category
    newsTabShow(newsCategories)
}
newsTabLoad()
//newsTabShow
const newsContainer = document.getElementById('news-container')
const newsTabShow = (newsCategories) => {
    newsCategories.forEach(category => {
        // console.log(category.category_id)
        const newsTabDiv = document.createElement('div')
        newsTabDiv.innerHTML = `
        <a onclick="newsDataLoad('${category.category_id}')"class="tab text-xl font-bold ">${category.category_name}</a>
        `
        newsContainer.appendChild(newsTabDiv)
    });

}
//newsTabLoad
const newsDataLoad = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await res.json()
    const details = data.data
    newsCardShow(details)
}
//news card
const newsCardShow = (details) => {
    const newsCardContainer = document.getElementById('news-card-container')
    newsCardContainer.textContent = ''
    details.forEach(detail => {
        // console.log(detail)
        const newsCard = document.createElement('div')
        newsCard.classList = "card card-compact  bg-base-100 shadow-xl"
        newsCard.innerHTML = `
        <figure><img src="${detail?.image_url}" /></figure>
        <div class="card-body">
            <h2 class="card-title">${detail?.title.slice(0, 40)
            }</h2>
            <p>${detail?.details.slice(0, 70)}</p>
            <div class="flex justify-between">
            <div>
              <img  class="w-10 h-10 rounded-full "src="${detail?.author.img}"/>
              <p>${detail?.author?.name}</p>
              <p>${detail?.author?.published_date}</p>
            </div>
            <div>
            <button class="btn btn-primary">Details</button>
            </div>
            </div>
        </div>   
     `
        newsCardContainer.appendChild(newsCard)
    })
}
newsDataLoad('01')