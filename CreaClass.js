(function ($) {

    $(document).ready(function() {

        $('.section-edit-profil .arrow-down').click(function(event) {

            event.preventDefault();

            $('#edit-profil-nav').toggleClass('open');

            $('.arrow-down').toggleClass('open');

        });


        $('.edit-demandes-nav .arrow-down').click(function(event) {

            event.preventDefault();

            $('.edit-demandes-nav .arrow-down').toggleClass('open');

            $('.edit-demandes-nav ul').toggleClass('open');

        });



        $('#block-navigationprincipale-3 .arrow-down').click(function(event) {

            event.preventDefault();

            $('#block-navigationprincipale-3 .arrow-down').toggleClass('open');

            $('#block-navigationprincipale-3 ul').toggleClass('open');

        });
        
        
        
        
        

// Example de creation de class pour le mobile-menu-burger avec class open:  .toggleClass('open') >>>   class + open ------------------------------

        $('.mobile-menu-burger').click(function(event) {

            event.preventDefault();

            $('.mobile-menu-burger').toggleClass('open');

            $('#block-navigationprincipale-4 ul').toggleClass('open');

        });
    });
    
    

}(jQuery));

