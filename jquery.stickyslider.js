/*
 Copyright (c) 2012 Patryk Kasperski

 Dual licensed under the MIT and GPL licenses.

 jQuery StickySlider
 Author: Patryk Kasperski
 Version: 0.2.1
*/

;(function($){
    $.fn.stickySlider = function( options ) {
        var defaults = {
            stopAtElement: null,
            parentContainer: false,
            contentWrapper: false,
            footerBottomMargin: 10
        };

        // extend the options from defaults with user's options
        var opts = $.extend({}, defaults, options);

        if(opts.footer.length == 0) return;

        return this.each(function(){
            var $this = $(this);
            var $footer = opts.stopAtElement;

            $(window).bind("resize", $.throttle(10, function() {
                $(window).scroll();
            }));

            if(opts.parentContainer && opts.contentWrapper) {
                if(opts.parentContainer.height() > opts.contentWrapper.height())
                    return;
            }

            opts.contentWrapper.css({position: 'relative'});

            if ($this.height() < $(window).height() && $(window).scrollLeft() == 0) {
                stickNavigation();
            }

            function stickNavigation() {
                var headerHeight = $this.offset().top;
                var footerPosition = $footer.offset().top;
                var lastItemPosition = $this.offset().top + ($this.outerHeight() + 30);

                $(window).bind("scroll", $.throttle(0, function() {
                    footerPosition = $footer.offset().top - 30;
                    lastItemPosition = parseInt($this.offset().top + ($this.height()));

                    setNavPosition({
                        headerHeight: headerHeight,
                        footerPosition: footerPosition,
                        lastItemPosition: lastItemPosition
                    });
                }));
            }

            function setNavPosition(elValues) {
                if (elValues.lastItemPosition < elValues.footerPosition) {
                    $this.removeClass('stuck-bottom');
                    $this.toggleClass('stuck', $(document).scrollTop() > (elValues.headerHeight)); // true=add; false=remove
                } else {
                    if($this.hasClass('stuck-bottom') && $this.offset().top > $(document).scrollTop()) {
                        $this.removeClass('stuck-bottom').addClass('stuck');
                    } else {
                        $this.removeClass('stuck').addClass('stuck-bottom');
                    }
                }
            }
        });
    };
})(jQuery);