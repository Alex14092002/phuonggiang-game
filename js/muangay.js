let params = new URLSearchParams(location.search);
let id_item = params.get("id");
(async () => {
  
    const form = document.getElementById("formData");
  
    const response = await fetch(
      `https://data-maygapthu-default-rtdb.firebaseio.com/product/${id_item}.json`
    );
  
    const product = await response.json();
    
    console.log(product);
    if (product) {
     
        form.innerHTML += `
        <form id="testForm">
        <fieldset>
        <legend><span class="number">1</span>Thông Tin Của Bạn</legend>
        <input type="text" name="field1" placeholder="Nhập Tên Của Bạn *">
        <input type="email" name="field2" placeholder="Nhập Số Điện Thoại Của Bạn *">
        <textarea name="field3" placeholder="Lời Nhắn"></textarea>
            
        </fieldset>
        <fieldset>
        <legend><span class="number">2</span> Thông Tin Sản Phẩm</legend>
        <input type="text" name="field5" placeholder="Tên Sản Phẩm" readonly value="${product.name}"></input>
        <input type="number" name="" id="" placeholder="Số Lượng">
        </fieldset>
        <input type="submit" value="Đặt Hàng" id="submitForm"/>
        </form>
            
        `;
    
    }
  })();