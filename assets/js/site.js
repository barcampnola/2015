(function() {
    var lt = new lightning({
        glow: false
    });
    var draw = false;

    setInterval(function() {
        if (draw) {
            lt.hide();
            var ob = randomSide();
            offset = $(".thor").offset();
            lt.show(ob.startX, ob.startY, offset.left + 112, offset.top + 32);
        }
    }, 100)

    $(document).on('mouseenter', ".after-party", function(e) {
        $(".thor").attr("src", "/assets/images/Bario-2.png")
        var ob = randomSide();
        offset = $(".thor").offset();
        lt.show(ob.startX, ob.startY, offset.left + 112, offset.top + 32);
        draw = true;
    });


    $(window).load(function() {
         $('.stan-lee').raptorize();
    });

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           alert("bottom!");
       }
    });

    $(document).on('mouseleave', ".after-party", function() {
        $(".thor").attr("src", "/assets/images/Bario-1.png")
        draw = false;
        lt.hide();
    });

    //get viewport dimensions
    var viewport = function() {
        var viewport = new Object();
        viewport.width = 0;
        viewport.height = 0;
        // the more standards compliant browsers (mozilla/netscape/opera/IE7)
        //use window.innerWidth and window.innerHeight
        if (typeof window.innerWidth != 'undefined') {
            viewport.width = window.innerWidth,
                viewport.height = window.innerHeight
        } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
            viewport.width = document.documentElement.clientWidth,
                viewport.height = document.documentElement.clientHeight
        } else {
            viewport.width = document.getElementsByTagName('body')[0].clientWidth,
                viewport.height = document.getElementsByTagName('body')[0].clientHeight
        }
        return viewport;
    };


    //generate random coordinates at one of the sides
    var rand = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function randomSide() {
        var v = viewport();
        var startX;
        var startY;
        var side = Math.random();

        var top = window.pageYOffset
        var bottom = window.pageYOffset + $(window.top).height();
        // top
        if (side <= 0.25) {
            startX = (0, v.width);
            startY = 0
        }
        // bottom
        else if (side <= 0.5) {
            startX = rand(0, v.width);
            startY = bottom;
        }
        // left
        else if (side <= 0.75) {
            startX = 0;
            startY = rand(top, bottom);
        }

        // right
        else if (rand <= 1) {
            startX = v.width;
            startY = rand(top, bottom);
        }
        var ob = {};
        ob.startX = startX;
        ob.startY = startY;
        return ob;
    }


    //lt.hide();

}).call()
