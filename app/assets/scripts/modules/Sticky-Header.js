import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
        
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }
    
    refreshWaypoints() {
        this.lazyImages.on('load', function() {
            Waypoint.refreshAll();
        });
    }
    
    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    
    createHeaderWaypoint() {
        var thisObject = this;
        new Waypoint({
//            uses [0] because the first element in a jquery array obj is the native DOM element, which is what Waypoint element property needs to work right
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == "down") {
                    thisObject.siteHeader.addClass("site-header--dark");
                } else {
                    thisObject.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
    
    createPageSectionWaypoints() {
        var thisObject = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            //scrolling down
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        thisObject.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });
            
            //scrolling up
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        thisObject.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;