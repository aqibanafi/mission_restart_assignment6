// Display all category 
const getCategories = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products/categories');
    const data = await fetchData.json();
    displayCategories(data);
}

const displayCategories = data => {
    const listContainer = document.getElementById('categories');
    listContainer.innerHTML = "";
    data.map(category => {
        const list = document.createElement('li');
        list.innerHTML = `
        <li onclick="fetchAllProduct(this)" class="btn btn-ghost border py-2 px-5 rounded-2xl p-button">${category}</li>
        `
        listContainer.appendChild(list)
    })
}


// All Product Card 

const fetchAllProduct = async category => {
    const fetchData = await fetch(`https://fakestoreapi.com/products/category/${category.innerHTML}`);
    const data = await fetchData.json();
    displayAllProducts(data);
}
const displayAllProducts = data => {
    const container = document.getElementById('product-grid')
    container.innerHTML = "";
    data.map(product => {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <div class="border rounded-lg shadow-lg card flex flex-col h-full bg-white">
    <div class="h-64 p-4 flex justify-center items-center bg-gray-50 rounded-t-lg">
        <img class="max-h-full object-contain" src="${product.image}" alt="">
    </div>

    <div class="p-5 flex flex-col flex-grow">
        <div class="flex justify-between items-center mb-4">
            <div class="tag px-2 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold uppercase">${product.category}</div>
            <div class="text-sm"><i class="fa-solid fa-star text-yellow-400"></i> ${product.rating.rate} (${product.rating.count})</div>
        </div>

        <div class="mb-5 flex-grow"> <p class="font-semibold text-lg line-clamp-2 h-[56px] leading-tight mb-2">${product.title}</p>
            <p class="font-bold text-2xl text-[#4f39f6]">$ ${product.price}</p>
        </div>

        <div class="flex justify-between gap-3 mt-auto">
            <button class="btn btn-outline flex-1 py-2 rounded-md"><i class="fa-regular fa-eye"></i> Detail</button>
            <button class="btn btn-primary flex-1 py-2 rounded-md"><i class="fa-solid fa-cart-shopping"></i> Add</button>
        </div>
    </div>
</div>
        `
        container.appendChild(createDiv)
    })
}




getCategories()