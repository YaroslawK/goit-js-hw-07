const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll('.item');
    console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryItems = item.querySelectorAll('ul li');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);
});