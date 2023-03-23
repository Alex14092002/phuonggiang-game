let params = new URLSearchParams(location.search);
let id_item = params.get("id");
(async () => {
  
    const detail = document.getElementById("detail");
  
    const response = await fetch(
      `https://data-maygapthu-default-rtdb.firebaseio.com/flash/${id_item}.json`
    );
  
    const product = await response.json();
    
    console.log(product);
    if (product) {
     
        detail.innerHTML += `
        <div class="item-product col-12 col-md-6">
        <div class="w3-content" style="max-width:1200px">
            <img class="mySlides" src="${product.detail2}" style="width:100%; height: 500px;   display:none ">
            <img class="mySlides" src="${product.detail1}" style="width:100%;height: 500px;">
            <img class="mySlides" src="${product.detail3}" style="width:100%;height: 500px;display:none">
        
            <div class="w3-row-padding w3-section">
              <div class="w3-col s4">
                <img class="demo w3-opacity w3-hover-opacity-off" src="${product.detail2}" style="width:100%;height: 100px ;cursor:pointer" onclick="currentDiv(1)">
              </div>
              <div class="w3-col s4">
                <img class="demo w3-opacity w3-hover-opacity-off" src="${product.detail1}" style="width:100%; height: 100px ;cursor:pointer" onclick="currentDiv(2)">
              </div>
              <div class="w3-col s4">
                <img class="demo w3-opacity w3-hover-opacity-off" src="${product.detail3}" style="width:100%;height: 100px ;cursor:pointer" onclick="currentDiv(3)">
              </div>
            </div>
          </div>
    </div>
    <div class="item-product col-12 col-md-6">
        <div class="title-detail">
            <h2>${product.name}</h2>
        </div>
        <div class="giagoc">
          <h5>${product.promotionalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ</h5>
        </div>
        <div class="price-status">
            <h4>${product.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ </h4>
            <h5>${product.status}</h5>
        </div>
        <div class="mota">
          <h5>TỔNG QUAN</h5>
          <P>${product.describe}</P>
        </div>
        <div class="buttons">
          <a href="../muangay-flash.html?id=${product.id}" class="btn-hover color-11 btns">Mua Ngay</a>
          </div>
    </div>
            
        `;
    
    }
  })();


  (async () => {
  
    const moi = document.getElementById("splienquan");
  
    const response = await fetch(
      `https://data-maygapthu-default-rtdb.firebaseio.com/product.json`
    );
  
    const product = await response.json();

    
    console.log(product);
    
    function getRandomElements(array, numElements) {
      var shuffled = array.slice(0), i = array.length, min = i - numElements, temp, index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }
    var randomElements = getRandomElements(product, 8);
    console.log(randomElements); 

    if (randomElements) {
      for (const [key, value] of Object.entries(randomElements)) {
        moi.innerHTML += `
        <div class="item-product col-12 col-md-3">
        <div class="card" >
          <img src="${value.avt}" class="card-img-top" alt="..." height="350px">
          <div class="card-body">
            <h4 class="card-title">${value.name.substring(0,30)}...</h4>
            <p class="card-text">${value.describe.substring(0, 50)}...</p>
            <h5 class="price">${value.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ</h5>
            <div class="buttons">
            <a href="../detail.html?id=${value.id}" class="btn-hover color-1 btns">Xem chi tiết</a>
            </div>
            
          </div>
        </div>
      </div>
            
        `;
      }
    }
  })();