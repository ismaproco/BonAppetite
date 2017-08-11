import './vue-tabs/vue-tabs.js';
import './vue-tabs/vue-tabs.css';
import './menu/styles/menu.css';

import menuService from './menu/service/menu.service';
import clientsService from './menu/service/clients.service';


$(document).ready(function () {
  
    let _clients = [
                      {
                        id:"1", 
                        name: "Client 1",
                        selected: true
                      }
                    ];
  
    var app = new Vue({
        el: '#app',
        data: {
            message: 'You loaded this page on ' + new Date(),
            clients: _clients
        }
    })
    
    // execute the menu-service init 
    menuService.gridInit();
    //



    $('#addClient').on("click", function () {
        //abre modal
        $("#clientModal").modal();
    });

    $('#backMenu').on("click", function () {
        window.location = "../Views/salon.html";
    });

    $('#saveClient').on("click", function ( e ) {
        
        let _client = {
          id: _clients.length + 1,
          name: $('#nombreCliente').val(),
          selected: false
        };
        console.log( _client );
        _clients.push( _client );
        $('#clientModal').modal('toggle');
        
        e.preventDefault();
    });
    
    
    
    function loadClients(client) {
        $(this).closest('li').before('<li><a>New Tab</a><span>x</span></li>');
        $('#clients').append('<div class="tab-pane">new tab</div>');
    }

    function saveClientsDB(clientsList) {
        //Aqui va el ajax que guarda los clientes en DB
    }

    function loadCategories() {
        //ajax que carga categorias
    }

    function loadProducts(idCategory) {
        //ajax que carga productos
        debugger;
        var container = document.getElementById("container");
        var groups = container.getElementsByTagName("g");
        container.removeChild(groups);
        container.appendChild(grid(productos, 15, 200, ["white", "green"]));
    }

    $('#clients li').on("click", function () {
        $('#clients li').find('.active').removeClass('active');
        $(this).find('a').addClass('active');
    });

    $('#payButton').on("click", function () {
        //abre modal
        $("#pagoFacturaModal").modal();
    });
});