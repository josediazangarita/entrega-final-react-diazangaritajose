//title, description, category, imgUrl, price, stock

const products = [
    {id: "1", name: "Card 1", category: "PS Plus", price: 1000, stock: 100, description: "lorem ipsum", imgUrl: "https://www.eneba.com/es/psn-playstation-network-card-psn-365-days-spain-psn-key-spain"},
    {id: "1", name: "Card 2", category: "PS Plus", price: 1000, stock: 100, description: "lorem ipsum", imgUrl: "https://www.eneba.com/es/psn-playstation-network-card-psn-365-days-spain-psn-key-spain"},
    {id: "1", name: "Card 3", category: "Xbox Gamepass", price: 1000, stock: 100, description: "lorem ipsum", imgUrl: "https://cdn-products.eneba.com/resized-products/QggZ0nlQRAu8fX2IGkKpmeYIILsXitAv3KBeP2ndwNQ_350x200_1x-0.jpeg"},
    {id: "1", name: "Card 4", category: "Xbox Gamepass", price: 1000, stock: 100, description: "lorem ipsum", imgUrl: "https://cdn-products.eneba.com/resized-products/QggZ0nlQRAu8fX2IGkKpmeYIILsXitAv3KBeP2ndwNQ_350x200_1x-0.jpeg"},
    {id: "1", name: "Card 5", category: "PS Plus", price: 1000, stock: 100, description: "lorem ipsum", imgUrl: "https://www.eneba.com/es/psn-playstation-network-card-psn-365-days-spain-psn-key-spain"},
  ]
  
  export const mFetch = (id) => new Promise ((res,rej)=>{
      setTimeout(()=> {
        res (products)
      }, 1000);
  })