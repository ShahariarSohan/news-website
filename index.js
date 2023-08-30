//newsTabLoad
const newsTabLoad = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json()
    const newsCategories = data.data.news_category
    newsTabShow(newsCategories)
}
newsTabLoad()
//newsTabShow
const newsTabShow = (newsCategories) => {
    newsCategories.forEach(category => {
        // console.log(category.category_id)
        const newsContainer = document.getElementById('news-container')
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
    console.log(data.data)
}

