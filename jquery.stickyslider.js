/*
 Copyright (c) 2012 Patryk Kasperski, web@pkasperski.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/*
* jQuery StickyScroller
* Author: Patryk Kasperski <web@pkasperski.com>
* Version: 0.5.1
* */

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

jQuery(document).ready(function($) {
    $('div#featureNav').stickySlider({
        stopAtElement: $('div.footer'),
        parentContainer: $('div.threecol'),
        contentWrapper: $('div.row-content')
    });
});