$('.doitac').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        dots: false,
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },  {
        dots: false,
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      }
    ]
  });