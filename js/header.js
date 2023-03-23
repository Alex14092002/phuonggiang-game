const header = document.getElementById('header')

header.innerHTML += `
<header class="header sticky-top">
<div class="container-menu">
  <div class="header-main">
    <div class="logo">
      <a href="#"><img src="./img/logo.png" alt="" width="220px" /></a>
    </div>
    <div class="open-nav-menu">
      <span></span>
    </div>
    <div class="menu-overlay"></div>
    <!-- navigation menu start -->
    <nav class="nav-menu">
      <div class="close-nav-menu">
        <img src="img/close.svg" alt="close" />
      </div>
      <ul class="menu">
        <li class="menu-item menu-item-has-children">
          <a href="#" data-toggle="sub-menu">TRANG CHỦ</a>
        </li>
        <li class="menu-item">
          <a href="#">GIỚI THIỆU</a>
        </li>
        <li class="menu-item">
          <a href="#">SẢN PHẨM</a>
        </li>
        <li class="menu-item menu-item-has-children">
          <a href="#" data-toggle="sub-menu">LIÊN HỆ</a>
        </li>
        <li class="menu-item">
          <a href="#">THANH TOÁN</a>
        </li>
      </ul>
    </nav>
    <!-- navigation menu end -->
  </div>
</div>
</header>
`