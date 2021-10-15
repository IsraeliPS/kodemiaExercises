$(document).ready(function(){
        $('[data-toggle="popover"]').popover({ html : true });
    });


    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main-sidebar").style.marginLeft = "250px";
    }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main-sidebar").style.marginLeft= "0";
    }