// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.item-menu');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = parseFloat(this.getAttribute('data-price'));
            addToCart(itemName, itemPrice);
        });
    });

    function addToCart(name, price) {
        const cart = document.getElementById('carrinho');
        const newItem = document.createElement('li');
        newItem.textContent = name + ' - R$' + price.toFixed(2);
        cart.appendChild(newItem);
    }
});

var total = 0;
      
       


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.item-menu');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = parseFloat(this.getAttribute('data-price'));
            addToCart(itemName, itemPrice);
        });
    });

    function addToCart(name, price) {
        total = total + price;
        const cart = document.getElementById('carrinho2');
        const newItem = document.createElement('li');
        newItem.textContent = name + ' - R$' + price.toFixed(2);
        cart.appendChild(newItem);

        var elementoTotal = document.getElementById('valor_total');

        elementoTotal.textContent = 'Total: ' + 'R$'+ total.toFixed(2);
    }
});



    
    function validarFormulario() {
      var nomeCompleto = document.getElementById('nomeCompleto').value;
      var telefone = document.getElementById('telefone').value;
      var endereco = document.getElementById('endereco').value;
      var formaPagamento = document.getElementById('formaPagamento').value;
    
      if (nomeCompleto === "" || telefone === "" || formaPagamento === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
      }
    
      if (!validarTelefone(telefone)) {
        alert("Por favor, insira um número de telefone válido.");
        return false;
      }
    
     
      alert("Pedido finalizado com sucesso");
      document.getElementById('nomeCompleto').value = '';
      document.getElementById('telefone').value = '';
      document.getElementById('endereco').value = '';
      document.getElementById('formaPagamento').selectedIndex = 0;
      var ul = document.getElementById('carrinho');
  
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        var ul = document.getElementById('carrinho2');
        
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
      return true;
    }
    
    function validarTelefone(telefone) {
      return telefone.length >= 15;
    }





