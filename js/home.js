(async () => {
  
    const banchay = document.getElementById("banchay");
  
    const response = await fetch(
      `https://data-maygapthu-default-rtdb.firebaseio.com/flash.json`
    );
  
    const flash = await response.json();
    
    console.log(flash);
    if (flash) {
      for (const [key, value] of Object.entries(flash)) {
        banchay.innerHTML += `
        <div class="item-product col-12 col-md-3">
        <div class="card" >
          <img src="${value.avt}" class="card-img-top" alt="..." height="350px">
          <div class="card-body">
            <h4 class="card-title">${value.name.substring(0,30)}...</h4>
            <p class="card-text">${value.describe.substring(0, 50)}...</p>
            <h5 class="price">${value.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ</h5>
            <div class="buttons">
            <a href="../detail-flash.html?id=${key}" class="btn-hover color-11 btns">Xem chi tiết</a>
            </div>
          
          </div>
        </div>
      </div>
            
        `;
      }
    }
  })();
  
  
 
  (async () => {
  
    const moi = document.getElementById("new");
  
    const response = await fetch(
      `https://data-maygapthu-default-rtdb.firebaseio.com/new.json`
    );
  
    const product = await response.json();
    
    console.log(product);
    if (product) {
      for (const [key, value] of Object.entries(product)) {
        moi.innerHTML += `
        <div class="item-product col-12 col-md-3">
        <div class="card" >
          <img src="${value.avt}" class="card-img-top" alt="..." height="350px">
          <div class="card-body">
            <h4 class="card-title">${value.name.substring(0,30)}...</h4>
            <p class="card-text">${value.describe.substring(0, 50)}...</p>
            <h5 class="price">${value.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ</h5>
            <div class="buttons">
            <a href="../detail-new.html?id=${key}" class="btn-hover color-1 btns">Xem chi tiết</a>
            </div>
            
          </div>
        </div>
      </div>
            
        `;
      }
    }
  })();