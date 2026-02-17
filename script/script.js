// Display all category 
const getCategories = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products/categories');
    const data = await fetchData.json();
    displayCategories(data);
}

// Fetch all data 

const fetchAllData = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products');
    const data = await fetchData.json();
    displayAllData(data)
}

const displayAllData = data => {
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
            <button onclick="fetchModalData(${product.id})" class="btn btn-outline flex-1 py-2 rounded-md"><i class="fa-regular fa-eye"></i> Detail</button>
            <button class="btn btn-primary flex-1 py-2 rounded-md"><i class="fa-solid fa-cart-shopping"></i> Add</button>
        </div>
    </div>
</div>
        `
        container.appendChild(createDiv)
    })
}

const displayCategories = data => {
    const listContainer = document.getElementById('categories');
    listContainer.innerHTML = "";
    const allButton = document.createElement('li');
    allButton.innerHTML = `<li onclick="fetchAllData()" class="btn btn-ghost border py-2 px-5 rounded-2xl p-button">All</li>`
    listContainer.appendChild(allButton)
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
            <button onclick="fetchModalData(${product.id})" class="btn btn-outline flex-1 py-2 rounded-md"><i class="fa-regular fa-eye"></i> Detail</button>
            <button class="btn btn-primary flex-1 py-2 rounded-md"><i class="fa-solid fa-cart-shopping"></i> Add</button>
        </div>
    </div>
</div>
        `
        container.appendChild(createDiv)
    })
}

// Fetch Modal Data 

const fetchModalData = async id => {

    const fetchData = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await fetchData.json()
    displayModalData(data)

    my_modal_3.showModal()
}

// Display Modal Data 

const displayModalData = product => {
    const imageHolder = document.getElementById('img-holder');
    imageHolder.innerHTML = `<img class="max-h-full object-contain" src="${product.image}" alt="">`
    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const productRating = document.getElementById('product-rating');
    productTitle.innerHTML = product.title;
    productPrice.innerHTML = `$${product.price}`;
    productDescription.innerHTML = product.description;
    productRating.innerHTML = product.rating.rate
}

// Trending Products 

const fetchTrendingData = async () => {
    const fetchData = await fetch('https://fakestoreapi.com/products');
    const data = await fetchData.json();
    displayTrendingData(data)
}

// Display Trending data 


const displayTrendingData = data => {
    const container = document.getElementById('trending')
    container.innerHTML = "";
    const topThree = data.slice(0, 3)
    console.log(topThree)
    topThree.map(product => {
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
            <button onclick="fetchModalData(${product.id})" class="btn btn-outline flex-1 py-2 rounded-md"><i class="fa-regular fa-eye"></i> Detail</button>
            <button class="btn btn-primary flex-1 py-2 rounded-md"><i class="fa-solid fa-cart-shopping"></i> Add</button>
        </div>
    </div>
</div>
        `
        container.appendChild(createDiv)
    })
}


getCategories()
fetchTrendingData()