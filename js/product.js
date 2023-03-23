(async () => {
  
    const moi = document.getElementById("banchay");
  
    const response = await fetch(
      `https://data-maygapthu-default-rtdb.firebaseio.com/maygapthu.json`
    );
  
    const product = await response.json();
    
    console.log(product);
    if (product) {
      for (const [key, value] of Object.entries(product)) {
        moi.innerHTML += `
        <div class="item-product col-6 col-md-3">
        <div class="card" >
          <img src="${value.avt}" class="card-img-top" alt="..." height="350px">
          <div class="card-body">
            <h4 class="card-title">${value.name.substring(0,30)}...</h4>
            <p class="card-text">${value.describe.substring(0, 50)}...</p>
            <h5 class="price">${value.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ</h5>
            <div class="buttons">
            <a href="../detail.html?id=${key}" class="btn-hover color-1 btns">Xem chi tiết</a>
            </div>
            
          </div>
        </div>
      </div>
            
        `;
      }
    }
  })();