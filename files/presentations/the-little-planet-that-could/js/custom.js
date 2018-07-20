z// Custom JS code can go here

// You can customize Reveal options:
Reveal.configure({
controls: false,
center: true,
transition: 'none',
width: 1920,
height: 1140,
margin: 0.05,
});


// (an outdated version of) http://headjs.com/ is also loaded
head.ready("lodash.min.js", function () {
  // LoDash can be used from here
});
head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");

// Load in math
var RevealMath = window.RevealMath || (function(){

    var options = Reveal.getConfig().math || {};
    options.mathjax = options.mathjax || 'http://cdn.mathjax.org/mathjax/latest/MathJax.js';
    options.config = options.config || 'TeX-AMS-MML_SVG';

    loadScript( options.mathjax + '?config=' + options.config, function() {

        MathJax.Hub.Config({
            messageStyle: 'none',
            tex2jax: { inlineMath: [['$','$'],['\\(','\\)']] },
            skipStartupTypeset: true
        });

        // Typeset followed by an immediate reveal.js layout since
        // the typesetting process could affect slide height
        MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ] );
        MathJax.Hub.Queue( Reveal.layout );

        // Reprocess equations in slides when they turn visible
        Reveal.addEventListener( 'slidechanged', function( event ) {

            MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub, event.currentSlide ] );

        } );

    } );

    function loadScript( url, callback ) {

        var head = document.querySelector( 'head' );
        var script = document.createElement( 'script' );
        script.type = 'text/javascript';
        script.src = url;

        // Wrapper for callback to make sure it only fires once
        var finish = function() {
            if( typeof callback === 'function' ) {
                callback.call();
                callback = null;
            }
        }

        script.onload = finish;

        // IE
        script.onreadystatechange = function() {
            if ( this.readyState === 'loaded' ) {
                finish();
            }
        }

        // Normal browsers
        head.appendChild( script );

    }

})();
