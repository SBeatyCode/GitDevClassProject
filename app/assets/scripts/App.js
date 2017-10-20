import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/Reveal-On-Scroll';
import $ from 'jquery';
import StickyHeader from './modules/Sticky-Header';

var mobileMenu = new MobileMenu();
var featuresRevealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
var TestimonialsRevealOnScroll = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();