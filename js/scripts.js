! function(a) {
    "use strict";
    var b = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        c = function() {
            return 1 == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        };
    if (a("[data-bg-image]").each(function() {
            a(this).css({
                "background-image": "url(" + a(this).data("bg-image") + ")"
            })
        }), a("[data-bg-color]").each(function() {
            a(this).css({
                "background-color": a(this).data("bg-color")
            })
        }), a("[data-width]").each(function() {
            a(this).css({
                width: a(this).data("width")
            })
        }), a("[data-height]").each(function() {
            a(this).css({
                height: a(this).data("height")
            })
        }), a("[data-alpha]").each(function() {
            a(this).css({
                opacity: a(this).data("alpha")
            })
        }), a("nav.main-nav").find(".menu-item.menu-item-mega").each(function() {
            var b = a(this),
                c = a('<div class="mega-menu-lists"></div>'),
                d = a('<div class="mega-menu-panel"></div>');
            b.find("> ul > li").each(function(b) {
                var e = a(this).find(">a"),
                    f = a('<div class="row"></div>').append(a(this).find(">.mega-menu-hd").html());
                0 == b ? e.addClass("mm-entry") : f.css("display", "none"), c.append(e), d.append(f)
            });
            var e = a("<ul><li></li></ul>");
            e.find("li").append(c).append(d), b.find("> ul").replaceWith(e), b.find(".mega-menu-lists > a").on("mouseenter", function() {
                b.find(".mega-menu-lists > a.mm-entry").removeClass("mm-entry"), a(this).addClass("mm-entry");
                var c = b.find(".mega-menu-lists > a").index(a(this));
                b.find(".mega-menu-panel > .row").hide(), b.find(".mega-menu-panel > .row").eq(c).show()
            })
        }), a(".welcome-nav-hidden").length && (a(".welcome-nav-hidden").find("> ul > li").each(function() {
            var b = a(this).find("> a").clone();
            b.addClass(a(this).attr("class")), a(".welcome-navigation-menu").append(b)
        }), a(".welcome-nav-hidden").find("> ul").hasClass("one-page-menu") && a(".welcome-navigation-menu").addClass("one-page-menu")), a(".vc_tta.vc_tta-tabs.vc_tta-style-classic").each(function() {
            var b = a(this),
                c = a('<div class="tab-title clearfix"></div>'),
                d = a('<div class="tab-panel"></div>'),
                e = a('<div class="simple-tab-space"></div>'),
                f = b.find(".vc_tta-panels-container > .vc_tta-panels");
            f.find("> .vc_tta-panel").each(function() {
                var b = a('<a href="javascript:;"></a>'),
                    e = a('<div class="tab-content"></div>');
                a(this).hasClass("vc_active") && (e.addClass("active"), b.addClass("active")), b.html(a(this).find(".vc_tta-panel-title > a").html()), c.append(b), e.html(a(this).find(".vc_tta-panel-body").html()), d.append(e)
            }), e.append(c), e.append(d), "ms-style" == b.parent().data("tab-style") && e.addClass("ms-style"), "text-light" == b.parent().data("text-style") && e.addClass("text-light"), b.parent().replaceWith(e)
        }), a('div[data-parallax-row="fast-and-slow"]').each(function() {
            var b = a(this);
            b.addClass("parallax-columns-container"), b.find("> div").each(function() {
                var b = a(this);
                "parallax-content" == b.data("parallax") ? b.find("> .vc_column-inner > .wpb_wrapper").addClass("parallax-content") : (b.find("> .vc_column-inner").addClass("parallax-col-wrap"), b.find("> .vc_column-inner > .wpb_wrapper").addClass("parallax-column"))
            })
        }), a('div[data-parallax-row="parallax"]').each(function() {
            var b = a(this);
            b.addClass("sticky-parent"), b.find("> div").each(function() {
                var b = a(this);
                b.addClass("sticky-column"), b.find("> .vc_column-inner").addClass("theiaStickySidebar")
            })
        }), a(document).ready(function() {
            if ("CSS" in window && "supports" in window.CSS) {
                var c = window.CSS.supports("mix-blend-mode", "multiply");
                c || a(".fs-slide.fn-slide").addClass("no-blend-mode")
            }
            a("nav.main-nav li:has(> ul)").addClass("menu-item-has-children"), a("nav.main-nav").find(".menu-item-mega").each(function() {
                var b = a(this),
                    c = a("nav.main-nav").offset().left;
                c -= b.offset().left, b.find("> ul").css({
                    left: c + "px",
                    width: a("nav.main-nav").width() + "px"
                })
            }), a(window).resize(function() {
                a("nav.main-nav").find(".menu-item-mega").each(function() {
                    var b = a(this),
                        c = a("nav.main-nav").offset().left;
                    c -= b.offset().left, b.find("> ul").css({
                        left: c + "px",
                        width: a("nav.main-nav").width() + "px"
                    })
                })
            }), a(".burger-menu").on("click", function() {
                a(this).hasClass("pm-right") ? a(".push-menu").hasClass("pm-right") ? (a(".push-menu").addClass("show-pm"), a("html,body").addClass("opened-push-sidebar")) : (a(".push-menu").addClass("pm-right"), setTimeout(function() {
                    a(".push-menu").addClass("show-pm"), a("html,body").addClass("opened-push-sidebar")
                }, 200)) : a(".push-menu").hasClass("pm-right") ? (a(".push-menu").removeClass("pm-right"), setTimeout(function() {
                    a(".push-menu").addClass("show-pm"), a("html,body").addClass("opened-push-sidebar")
                }, 200)) : (a(".push-menu").addClass("show-pm"), a("html,body").addClass("opened-push-sidebar"))
            }), a(".push-menu .close-menu").on("click", function() {
                a(".push-menu").removeClass("show-pm"), a("html,body").removeClass("opened-push-sidebar")
            }), a(".push-menu .pm-overlay").on("mouseup", function(b) {
                var c = a(".push-menu .pm-container");
                c.is(b.target) || 0 !== c.has(b.target).length || a(".push-menu .close-menu").trigger("click")
            }), a(document).keyup(function(b) {
                27 == b.keyCode && a(".push-menu").hasClass("show-pm") && a(".push-menu .close-menu").trigger("click")
            }), a("body").hasClass("fixed-footer") && (a("body > .wrapper > .content-area").css({
                "margin-bottom": a("#footer").outerHeight() + "px"
            }), a(window).resize(function() {
                a("body > .wrapper > .content-area").css({
                    "margin-bottom": a("#footer").outerHeight() + "px"
                })
            })), a(".scroll-to-top").on("click", function() {
                return a("html,body").animate({
                    scrollTop: 0
                }, "slow"), !1
            }), a(".scroll-to").on("click", function(b) {
                return a("html,body").animate({
                    scrollTop: a(a(this).attr("href")).offset().top
                }, "slow"), !1
            }), a(".one-page-menu a").on("click", function() {
                var b = a(this),
                    c = b.attr("href") + "";
                c = c.replace("#", "");
                var d = a('div[data-onepage-slug="' + c + '"]');
                if (d.length) {
                    var e = d.offset().top;
                    e < 0 && (e = 0), a("html, body").animate({
                        scrollTop: e
                    }, "slow")
                }
                return !1
            }), a(".image").each(function() {
                "undefined" != typeof a(this).data("src") && "" != a(this).data("src") && a(this).css("background-image", "url(" + a(this).data("src") + ")")
            }), a("body:not(.disable-video-lightbox) .video-player:not(.playpermalink),.player-popup").each(function() {
                var b = a(this);
                b.magnificPopup({
                    type: "iframe",
                    
                    preloader: !1,
                    fixedContentPos: !1
                }), b.on("click", function() {
                    return !1
                })
            }), a(".video-frame").on("click", function(b) {
                var c = a(this);
                return c.find("body:not(.disable-video-lightbox) .video-player:not(.playpermalink)").length ? (b.preventDefault(), a.magnificPopup.open({
                    items: {
                        src: c.find(".video-player").attr("href")
                    },
                    type: "iframe"
                }), !1) : void(c.find(".video-player").length && (window.location = c.find(".video-player").attr("href")))
            });
            var d = function(c) {
                c.find(".animate-element").each(function(c) {
                    var d = a(this),
                        e = d.data("anim");
                    d.css({
                        "-webkit-animation-duration": "0.5s",
                        "-moz-animation-duration": "0.5s",
                        "-ms-animation-duration": "0.5s",
                        "-o-animation-duration": "0.5s",
                        "animation-duration": "0.5s"
                    }), d.css({
                        "-webkit-animation-delay": .2 * c + "s",
                        "-moz-animation-delay": .2 * c + "s",
                        "-ms-animation-delay": .2 * c + "s",
                        "-o-animation-delay": .2 * c + "s",
                        "animation-delay": .2 * c + "s"
                    }), d.addClass("animated " + e), d.one(b, function() {
                        a(this).removeClass("animated " + e)
                    })
                })
            };
            if (a(".news-slider").each(function() {
                    var b = a(this),
                        c = b.find(".master-slider").attr("id"),
                        e = new MasterSlider,
                        f = 640,
                        g = b.find(".master-slider").data("autoplay");
                    e.control("circletimer", {
                        color: "#FFFFFF",
                        stroke: 9
                    }), b.hasClass("news-slider-hover") ? (e.control("thumblist", {
                        autohide: !1,
                        dir: "v",
                        type: "tabs",
                        align: "right",
                        margin: 0,
                        space: 25,
                        width: 0,
                        height: 105,
                        hideUnder: 640
                    }), e.control("scrollbar", ""), f = 600) : (e.control("arrows"), e.control("thumblist", {
                        autohide: !1,
                        dir: "v",
                        type: "tabs",
                        align: "right",
                        margin: 10,
                        space: 25,
                        width: 280,
                        height: 175,
                        hideUnder: 640
                    }), e.control("scrollbar", {
                        dir: "v"
                    })), e.setup(c, {
                        width: 1170,
                        height: f,
                        space: 0,
                        speed: 100,
                        view: "fade",
                        autoplay: g
                    }), setTimeout(function() {
                        e.api.addEventListener(MSSliderEvent.CHANGE_END, function() {
                            d(b.find(".ms-slide.ms-sl-selected"))
                        })
                    }, 400)
                }), a(".entertainment-slider").each(function() {
                    var b = a(this),
                        c = b.find(".master-slider").attr("id"),
                        e = new MasterSlider,
                        f = 840,
                        g = b.find(".master-slider").data("autoplay");
                    e.control("thumblist", {
                        autohide: !1,
                        dir: "v",
                        type: "tabs",
                        align: "right",
                        margin: 0,
                        space: 10,
                        width: 0,
                        height: 150,
                        hideUnder: 640
                    }), e.control("scrollbar", ""), e.setup(c, {
                        width: 1170,
                        height: f,
                        space: 0,
                        view: "fade",
                        layout: "fillwidth",
                        autoplay: g
                    }), setTimeout(function() {
                        e.api.addEventListener(MSSliderEvent.CHANGE_END, function() {
                            d(b.find(".ms-slide.ms-sl-selected"))
                        })
                    }, 400)
                }), a(".gallery-slider").each(function() {
                    var b = a(this),
                        c = b.find(".master-slider").attr("id"),
                        e = new MasterSlider,
                        f = 640,
                        g = parseInt(b.data("speed"), 10);
                    g = g > 0 ? g : 0;
                    var h = 90,
                        i = 60,
                        j = 10,
                        k = b.find(".master-slider").data("autoplay");
                    b.hasClass("movie-slider") && (h = 270, i = 160, j = 30), e.control("thumblist", {
                        autohide: !1,
                        dir: "h",
                        type: "tabs",
                        width: h,
                        height: i,
                        align: "bottom",
                        space: j,
                        margin: 0,
                        hideUnder: 400
                    }), e.control("arrows", {
                        autohide: !1
                    }), e.control("scrollbar", {
                        dir: "h",
                        color: "#444",
                        align: "bottom",
                        autohide: !1,
                        margin: 20,
                        width: 2
                    });
                    var l = {
                        width: 1170,
                        height: f,
                        space: 0,
                        preload: "all",
                        view: "basic",
                        autoplay: k
                    };
                    g > 0 && (l = a.extend(l, {
                        speed: g
                    })), e.setup(c, l), setTimeout(function() {
                        e.api.addEventListener(MSSliderEvent.CHANGE_END, function() {
                            d(b.find(".ms-slide.ms-sl-selected"))
                        })
                    }, 400)
                }), setTimeout(function() {
                    a(".fs-slide").each(function() {
                        var c = a(this),
                            d = a(this).find(".swiper-container").data("autoplay");
                        c.find(".swiper-container").swiper({
                            slidesPerView: 1,
                            spaceBetween: 0,
                            speed: 800,
                            loop: !0,
                            autoHeight: !0,
                            autoplay: d,
                            nextButton: c.find(".fs-arrow-next"),
                            prevButton: c.find(".fs-arrow-prev"),
                            pagination: c.find(".fs-pagination"),
                            paginationClickable: !0,
                            onSlideChangeStart: function(a) {
                                if (c.hasClass("fn-slide")) {
                                    var b = c.find(".swiper-slide").eq(a.activeIndex);
                                    c.find(".fn-meta-views").text(b.find(".fs-item").data("views")), c.find(".fn-meta-comments").text(b.find(".fs-item").data("comments"))
                                }
                            },
                            onSlideNextStart: function(d) {
                                var e = c.find(".swiper-slide").eq(d.activeIndex);
                                e.find(".fs-animate-text").each(function(c) {
                                    var d = a(this);
                                    d.css({
                                        "-webkit-animation-delay": .2 * c + "s",
                                        "-moz-animation-delay": .2 * c + "s",
                                        "-ms-animation-delay": .2 * c + "s",
                                        "-o-animation-delay": .2 * c + "s",
                                        "animation-delay": .2 * c + "s"
                                    }), d.addClass("animated fadeInRight"), d.one(b, function() {
                                        a(this).removeClass("animated fadeInRight")
                                    })
                                })
                            },
                            onSlidePrevStart: function(d) {
                                var e = c.find(".swiper-slide").eq(d.activeIndex);
                                e.find(".fs-animate-text").each(function(c) {
                                    var d = a(this);
                                    d.css({
                                        "-webkit-animation-delay": .2 * c + "s",
                                        "-moz-animation-delay": .2 * c + "s",
                                        "-ms-animation-delay": .2 * c + "s",
                                        "-o-animation-delay": .2 * c + "s",
                                        "animation-delay": .2 * c + "s"
                                    }), d.addClass("animated fadeInLeft"), d.one(b, function() {
                                        a(this).removeClass("animated fadeInLeft")
                                    })
                                })
                            }
                        })
                    }), a(".fn-fullslide").each(function() {
                        var b = a(this);
                        b.find(".swiper-container").swiper({
                            slidesPerView: "auto",
                            centeredSlides: !0,
                            spaceBetween: 80,
                            speed: 800,
                            loop: !0,
                            nextButton: b.find(".fn-arrow-next"),
                            prevButton: b.find(".fn-arrow-prev"),
                            pagination: b.find(".fn-pagination"),
                            paginationClickable: !0
                        })
                    }), a(".wslider").each(function() {
                        var b = a(this);
                        b.find(".swiper-container").swiper({
                            slidesPerView: "auto",
                            centeredSlides: !0,
                            spaceBetween: 80,
                            speed: 800,
                            loop: !0,
                            nextButton: b.find(".ws-arrow-next"),
                            prevButton: b.find(".ws-arrow-prev"),
                            pagination: b.find(".ws-pagination"),
                            paginationClickable: !0
                        })
                    }), a(".fslider").each(function() {
                        var b = a(this);
                        b.find(".swiper-container").swiper({
                            slidesPerView: "auto",
                            centeredSlides: !0,
                            spaceBetween: 30,
                            speed: 800,
                            loop: !0,
                            nextButton: b.find(".fd-arrow-next"),
                            prevButton: b.find(".fd-arrow-prev"),
                            pagination: b.find(".fd-pagination"),
                            paginationClickable: !0
                        })
                    }), a(".gallery-slideshow").each(function() {
                        var b = a(this);
                        b.find(".gallery-container").swiper({
                            nextButton: b.find(".swiper-button-next"),
                            prevButton: b.find(".swiper-button-prev")
                        })
                    }), a(".m-dimension-carousel").each(function() {
                        var b = a(this),
                            c = b.data("col"),
                            d = b.data("row");
                        b.find(".swiper-container").css("width", "100%"), b.find(".swiper-container").swiper({
                            slidesPerView: c,
                            slidesPerGroup: c,
                            slidesPerColumn: d,
                            spaceBetween: 30,
                            nextButton: b.find(".swiper-button-next"),
                            prevButton: b.find(".swiper-button-prev"),
                            breakpoints: {
                                768: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3
                                },
                                640: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2
                                },
                                480: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1
                                }
                            }
                        })
                    }), a(".footer-instagram .swiper-container").swiper({
                        slidesPerView: 6,
                        breakpoints: {
                            1024: {
                                slidesPerView: 6
                            },
                            768: {
                                slidesPerView: 3
                            },
                            640: {
                                slidesPerView: 3
                            },
                            320: {
                                slidesPerView: 2
                            }
                        }
                    }), a(".carousel-travel").each(function() {
                        var b = a(this),
                            c = b.data("columns"),
                            d = b.data("space"),
                            e = parseInt(b.data("autoplay"), 10);
                        b.find(".swiper-container").swiper({
                            slidesPerView: c,
                            spaceBetween: d,
                            autoplay: e,
                            nextButton: b.find(".swiper-button-next"),
                            prevButton: b.find(".swiper-button-prev"),
                            breakpoints: {
                                996: {
                                    slidesPerView: 3
                                },
                                767: {
                                    slidesPerView: 2
                                },
                                500: {
                                    slidesPerView: 1
                                }
                            }
                        }), b.addClass("loaded")
                    }), a(".tana-slider-with-thumb").each(function() {
                        var c = a(this),
                            d = 0,
                            e = parseInt(c.data("autoplay"), 10);
                        e > 0 && (e *= 1e3), c.find(".ts-main-panel").find(".swiper-slide").length > 2 && (d = 2);
                        var f = c.find(".ts-main-panel").swiper({
                                slidesPerView: 1,
                                nextButton: c.find(".swiper-button-next"),
                                prevButton: c.find(".swiper-button-prev"),
                                spaceBetween: 0,
                                autoHeight: !0,
                                initialSlide: d,
                                autoplay: e,
                                onSlideNextStart: function(d) {
                                    var e = c.find(".ts-main-panel").find(".swiper-slide").eq(d.activeIndex);
                                    e.find(".animate-element").each(function(c) {
                                        var d = a(this);
                                        d.css({
                                            "-webkit-animation-duration": "0.5s",
                                            "-moz-animation-duration": "0.5s",
                                            "-ms-animation-duration": "0.5s",
                                            "-o-animation-duration": "0.5s",
                                            "animation-duration": "0.5s"
                                        }), d.css({
                                            "-webkit-animation-delay": .2 * c + "s",
                                            "-moz-animation-delay": .2 * c + "s",
                                            "-ms-animation-delay": .2 * c + "s",
                                            "-o-animation-delay": .2 * c + "s",
                                            "animation-delay": .2 * c + "s"
                                        }), d.addClass("animated fadeInRight"), d.one(b, function() {
                                            a(this).removeClass("animated fadeInRight")
                                        })
                                    })
                                },
                                onSlidePrevStart: function(d) {
                                    var e = c.find(".ts-main-panel").find(".swiper-slide").eq(d.activeIndex);
                                    e.find(".animate-element").each(function(c) {
                                        var d = a(this);
                                        d.css({
                                            "-webkit-animation-duration": "0.5s",
                                            "-moz-animation-duration": "0.5s",
                                            "-ms-animation-duration": "0.5s",
                                            "-o-animation-duration": "0.5s",
                                            "animation-duration": "0.5s"
                                        }), d.css({
                                            "-webkit-animation-delay": .2 * c + "s",
                                            "-moz-animation-delay": .2 * c + "s",
                                            "-ms-animation-delay": .2 * c + "s",
                                            "-o-animation-delay": .2 * c + "s",
                                            "animation-delay": .2 * c + "s"
                                        }), d.addClass("animated fadeInLeft"), d.one(b, function() {
                                            a(this).removeClass("animated fadeInLeft")
                                        })
                                    })
                                }
                            }),
                            g = c.find(".ts-thumbs-panel").swiper({
                                centeredSlides: !0,
                                slidesPerView: "auto",
                                spaceBetween: 30,
                                touchRatio: .2,
                                slideToClickedSlide: !0,
                                initialSlide: d
                            });
                        f.params.control = g, g.params.control = f
                    })
                }, 400), a(".tt-el-ticker").each(function() {
                    var b = a(this),
                        c = [];
                    0 == b.find(".entry-ticker").find("span").length && b.find(".entry-ticker").append("<span>Hello, Tana Wordpress Theme - Customizer/Ticker Options</span>"), b.find(".entry-ticker").find("span").each(function() {
                        c.push(a(this).html())
                    }), b.find(".entry-ticker").html("");
                    var d = {
                        strings: c,
                        startDelay: 0,
                        typeSpeed: -500,
                        backSpeed: -800,
                        backDelay: 5e3,
                        loop: !0,
                        onStringTyped: function(a) {},
                        preStringTyped: function(a) {
                            b.attr("data-current", a)
                        }
                    };
                    b.find(".entry-ticker").typed(d), b.find(".ticker-arrow-prev").on("click", function() {
                        b.attr("data-current", 0);
                        var e = parseInt(b.attr("data-current"), 10),
                            f = [];
                        e = 0 == e ? c.length - 1 : e - 1;
                        for (var g = e; g < c.length; g++) f.push(c[g]);
                        for (var g = 0; g < e; g++) f.push(c[g]);
                        d = a.extend(d, {
                            strings: f
                        }), b.find(".entry-ticker").html(f[0]), b.find(".entry-ticker").typed(d)
                    }), b.find(".ticker-arrow-next").on("click", function() {
                        b.attr("data-current", 0);
                        var e = parseInt(b.attr("data-current"), 10),
                            f = [];
                        e = e == c.length - 1 ? 0 : e + 1;
                        for (var g = e; g < c.length; g++) f.push(c[g]);
                        for (var g = 0; g < e; g++) f.push(c[g]);
                        d = a.extend(d, {
                            strings: f
                        }), b.find(".entry-ticker").html(f[0]), b.find(".entry-ticker").typed(d)
                    })
                }), a("#header").hasClass("header-sticky")) {
                var e = a("#header.sticky").height(),
                    f = a(window).scrollTop;
                a(window).scroll(function() {
                    var b = a(window).scrollTop();
                    b > 400 ? (a("#header").addClass("sticky"), a("#header").hasClass("sticky-permanent") ? a("#header.sticky").addClass("unpinned") : b > f && e < f ? a("#header.sticky").removeClass("unpinned") : (b < f && b < f - 20 || b < e) && a("#header.sticky").addClass("unpinned")) : (a("#header.sticky").removeClass("unpinned"), setTimeout(function() {
                        a("#header").removeClass("sticky")
                    }, 300)), f = b
                })
            }
            a("#header .user-profile .entry-name").on("click", function() {
                a(this).find(".entry-dropdown").toggleClass("open")
            }), a(document).on("mouseup", function(b) {
                if (a("#header .user-profile .entry-name").find(".entry-dropdown").hasClass("open")) {
                    var c = a("#header .user-profile .entry-name");
                    c.is(b.target) || 0 !== c.has(b.target).length || a("#header .user-profile .entry-name").find(".entry-dropdown").toggleClass("open")
                }
            }), a("#search_handler").on("click", function() {
                a("#header").toggleClass("show-search"), setTimeout(function() {
                    a("#header .search-panel input").eq(0).focus()
                }, 100)
            }), a("#header .search-panel a.close-search").on("click", function() {
                a("#header").removeClass("show-search")
            }), a(".search-handler.search-fashion").on("click", function() {
                a(this).parent().toggleClass("show-form"), a(this).parent().hasClass("show-form") && a(this).parent().find('form input[type="text"]').eq(0).focus()
            }), a(".simple-tab-space").each(function() {
                var b = a(this);
                b.find(".tab-title a").on("click", function(c) {
                    c.preventDefault(), b.find(".tab-title a").removeClass("active"), a(this).addClass("active"), b.find(".tab-panel .tab-content").removeClass("active"), b.find(".tab-panel .tab-content").eq(b.find(".tab-title a").index(a(this))).addClass("active")
                })
            }), a(".circle-chart").each(function(b) {
                var c = a(this),
                    d = "circle-chart" + b,
                    e = c.data("circle-width"),
                    f = c.data("percent"),
                    g = c.data("text");
                f = (f + "").replace("%", ""), e = parseInt(e, 10), c.attr("id", d);
                Circles.create({
                    id: d,
                    value: f,
                    text: g,
                    radius: 100,
                    width: e,
                    colors: ["rgba(255,255,255, .05)", "#f84432"]
                })
            }), a(".twitter-shareable").on("click", function() {
                var b = a(this),
                    c = window.location.href;
                window.open("http://twitter.com/share?url=" + c + "&text=" + b.text(), "twitterwindow", "height=450, width=550, top=" + (a(window).height() / 2 - 225) + ", left=" + (a(window).width() / 2 - 275))
            }), a(".fs-blog-carousel").each(function() {
                var b = a(this),
                    c = b.data("col"),
                    d = b.data("row"),
                    e = b.data("responsive") + "",
                    f = 0,
                    g = c * d,
                    h = [3, 2, 1],
                    i = b.data("autoplay"),
                    j = 30;
                if (1 == b.hasClass("testimonial-slider") && (j = 0), "undefined" !== e) {
                    var k = e.split(",");
                    k.length > 2 ? (h[0] = parseInt(k[0], 10), h[1] = parseInt(k[1], 10), h[2] = parseInt(k[2], 10)) : 2 == k.length ? (h[0] = parseInt(k[0], 10), h[1] = parseInt(k[1], 10), h[2] = parseInt(k[1], 10)) : 1 == k.length && (h[0] = parseInt(k[0], 10), h[1] = parseInt(k[0], 10), h[2] = parseInt(k[0], 10))
                }
                f = b.find(".swiper-slide").length % g > 0 ? parseInt(b.find(".swiper-slide").length / g, 10) + 1 : parseInt(b.find(".swiper-slide").length / g, 10), b.find(".fs-current-total").html(f), b.find(".swiper-container").swiper({
                    pagination: ".swiper-pagination",
                    slidesPerView: c,
                    slidesPerGroup: c,
                    slidesPerColumn: d,
                    paginationClickable: !0,
                    spaceBetween: j,
                    autoplay: i,
                    prevButton: b.find(".swiper-prev"),
                    nextButton: b.find(".swiper-next"),
                    onSlideChangeEnd: function(a) {
                        var d = a.activeIndex % c > 0 ? parseInt(a.activeIndex / c) + 2 : parseInt(a.activeIndex / c) + 1;
                        b.find(".fs-current-index").html(d)
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: h[0]
                        },
                        640: {
                            slidesPerView: h[1]
                        },
                        320: {
                            slidesPerView: h[2]
                        }
                    }
                })
            }), a(window).scroll(function() {
                var b = a(document).height(),
                    c = a(window).height(),
                    d = a(window).scrollTop(),
                    e = 0;
                e = 100 * d / (b - c), a(".scroll-window-indicator").find("> div").width(e + "%")
            }), a(".animated-blocks").each(function() {
                var c = a(this);
                c.waypoint({
                    handler: function(d) {
                        c.hasClass("ab-animated") || (c.find(".ab-item").each(function(c) {
                            var d = a(this);
                            d.css({
                                "-webkit-animation-delay": .1 * c + "s",
                                "-moz-animation-delay": .1 * c + "s",
                                "-ms-animation-delay": .1 * c + "s",
                                "-o-animation-delay": .1 * c + "s",
                                "animation-delay": .1 * c + "s"
                            }), d.addClass("animated fadeInUp ab-visible"), d.one(b, function() {
                                a(this).removeClass("animated fadeInUp")
                            })
                        }), c.addClass("ab-animated"))
                    },
                    continuous: !1,
                    offset: "95%"
                })
            }), a("a.ms-love").on("click", function() {
                a(this).toggleClass("active")
            }), a(".weather-update-required").length && a.post(theme_options.ajax_url, {
                action: "tana_get_weather_info",
                renew: !0
            }, function(b) {
                var c = parseInt(b, 10);
                a(".weather-update-required").find("span").eq(0).html(c)
            }), a(".woocommerce.single-product .content-area .product .images .thumbnails").length ? (a(".woocommerce.single-product .content-area .product .images").append('<a href="javascript:;" class="woo-single-arrow-up"><i class="fa fa-angle-up"></i></a>'), a(".woocommerce.single-product .content-area .product .images").append('<a href="javascript:;" class="woo-single-arrow-down"><i class="fa fa-angle-down"></i></a>'), a(".woo-single-arrow-up").on("click", function() {
                var b = a(".woocommerce.single-product .content-area .product .images .thumbnails").scrollTop();
                b -= 100, a(".woocommerce.single-product .content-area .product .images .thumbnails").stop().animate({
                    scrollTop: b + "px"
                })
            }), a(".woo-single-arrow-down").on("click", function() {
                var b = a(".woocommerce.single-product .content-area .product .images .thumbnails").scrollTop();
                b += 100, a(".woocommerce.single-product .content-area .product .images .thumbnails").stop().animate({
                    scrollTop: b + "px"
                })
            })) : (a(".woocommerce.single-product .content-area .product .images").length && a(".woocommerce.single-product .content-area .product .images").addClass("no-thumbnails"), a(".woocommerce.single-product .content-area div.product .onsale").length && a(".woocommerce.single-product .content-area div.product .onsale").addClass("no-thumbnails")), a(".music-single .action-play-list").on("click", function() {
                a(".music-single .mejs-play button").length && a(".music-single .mejs-play button").eq(0).trigger("click")
            })
        }), a("#msplayer").length) {
        var d = new SVGMorpheus("#ms_play_pause"),
            e = new SVGMorpheus("#ec_volume");
        a("#msplayer").mediaelementplayer({
            features: ["current", "progress", "duration", "tracks"],
            success: function(b, c, f) {
                var g = ["loadstart", "play", "pause", "ended"],
                    h = {
                        playing: 0,
                        list: []
                    };
                a("#music_player .pl-list").find(".tr-item").each(function() {
                    var b = a(this),
                        c = b.data("id"),
                        d = b.find(".pl-audio-item").data("url"),
                        e = b.find(".pl-audio-item").data("thumb"),
                        f = b.find(".pl-audio-item").find(".pl-item-title").text(),
                        g = b.find(".pl-audio-item").find(".pl-item-artist").text();
                    h.list.push({
                        id: c,
                        audio: d,
                        thumb: e,
                        title: f,
                        artist: g
                    })
                });
                var i = function(c) {
                        if (h.list.length > 0 && h.list.length > c && c > -1) {
                            var d = h.list[c];
                            h.playing = c, b.setSrc(d.audio), b.load(), a("#music_player .ms-nowplaying").find(".np-thumb").css("background-image", "url(" + d.thumb + ")"), a("#music_player .ms-nowplaying").find(".np-title").text(d.title), a("#music_player .ms-nowplaying").find(".np-artist").text(d.artist), a("#music_player .pl-list").find(".tr-item .td-num .number.playing").removeClass("playing"), a("#music_player .pl-list").find(".tr-item").eq(c).find(".td-num .number").addClass("playing")
                        }
                    },
                    j = function() {
                        b.play()
                    },
                    k = function() {
                        0 == h.playing && h.list.length > 0 ? h.playing = h.list.length - 1 : h.playing = h.playing - 1, i(h.playing), j()
                    },
                    l = function() {
                        h.list.length > 0 && h.playing == h.list.length - 1 ? h.playing = 0 : h.playing = h.playing + 1, a("#music_player .ms-control-shuffle").hasClass("active") && (h.playing = Math.floor(Math.random() * h.list.length - 1)), i(h.playing), j()
                    };
                h.list.length && i(0);
                for (var m = 0, n = g.length; m < n; m++) {
                    g[m];
                    b.addEventListener(g[m], function(b) {
                        if ("play" == b.type) a("#music_player .ms-play").addClass("ms-pause"), d.to("ms_pause", {
                            duration: 400,
                            rotation: "none"
                        });
                        else if ("pause" == b.type) a("#music_player .ms-play").removeClass("ms-pause"), d.to("ms_play", {
                            duration: 400,
                            rotation: "none"
                        });
                        else if ("loadstart" == b.type);
                        else if ("ended" == b.type) {
                            var c = h.playing;
                            h.playing == h.list.length - 1 ? c = a("#music_player .ms-control-repeat").hasClass("active") ? 0 : -1 : a("#music_player .ms-control-shuffle").hasClass("active") ? c = Math.floor(Math.random() * h.list.length - 1) : c += 1, console.log("ended", c), c > -1 && (i(c), j())
                        }
                    })
                }
                a("#music_player .ms-play").on("click", function() {
                    b.paused ? b.play() : b.pause()
                }), a("#music_player .ms-prev").on("click", function() {
                    k()
                }), a("#music_player .ms-next").on("click", function() {
                    l()
                }), a("#music_player .ec-vol-el").slider({
                    orientation: "vertical",
                    range: "min",
                    min: 0,
                    max: 100,
                    value: 80,
                    slide: function(a, c) {
                        b.setVolume(c.value / 100)
                    }
                }), a("#music_player .ms-controls .ec-volume a").on("click", function() {
                    a(this).toggleClass("ec-vol-mute"), a(this).hasClass("ec-vol-mute") ? (b.setVolume(0), e.to("vol_mute", {
                        duration: 400,
                        rotation: "none"
                    }), a("#music_player .ec-vol-el").slider("value", 0)) : (b.setVolume(.8), e.to("vol_max", {
                        duration: 400,
                        rotation: "none"
                    }), a("#music_player .ec-vol-el").slider("value", 80))
                }), a("#music_player .ms-control-shuffle").on("click", function() {
                    a(".ms-control-shuffle").toggleClass("active")
                }), a("#music_player .ms-control-repeat").on("click", function() {
                    a(this).toggleClass("active")
                }), a("#music_player .pl-list .tr-item .pl-audio-item").on("click", function() {
                    var b = a("#music_player .pl-list .tr-item").index(a(this).parents(".tr-item"));
                    i(b), j()
                })
            }
        })
    }
    a(window).load(function() {
        a("body").addClass("page-loaded"), a(".parallax-columns-container").parallaxColumn(), a(".sticky-parent").each(function() {
            var b = a(this),
                c = this;
            b.find(".sticky-column").theiaStickySidebar({
                containerSelector: c,
                additionalMarginTop: 30,
                minWidth: 768
            })
        }), a(".masonry-layout").each(function() {
            var b = a(this),
                c = b.data("col-width") + "";
            c.indexOf("col-") < 0 && (c = ".col-sm-2"), b.isotope({
                itemSelector: ".masonry-item",
                masonry: {
                    columnWidth: c
                }
            }), b.find(".fs-post-filter a").on("click", function() {
                var c = a(this).data("filter");
                b.isotope({
                    filter: c
                }), b.find(".fs-post-filter li").removeClass("active"), a(this).parent().addClass("active")
            })
        }), a(".masonry-layout-alternate").each(function() {
            var b = a(this);
            b.isotope({
                itemSelector: ".masonry-item",
                masonry: {
                    columnWidth: 1
                }
            })
        });
        var b = function() {
            a(".fullwidth-section, .fullscreen-section").each(function() {
                var b = a(this),
                    c = a("body");
                b.css("margin-left", "0px");
                var d = b.offset().left - c.offset().left,
                    e = c.width();
                b.css({
                    "margin-left": -d,
                    width: e + "px"
                }), b.hasClass("fullscreen-section") && !b.hasClass("tt-slider") && b.height(a(window).height())
            })
        };
        b(), a(window).resize(function() {
            b()
        }), a('[data-section-type="parallax"]').each(function() {
            var b = a(this),
                c = b.css("background-image") + "";
            c = c.replace('url("', "").replace('")', ""), b.attr("data-stellar-ratio", "2"), b.attr("data-stellar-background-ratio", "0.5"), b.css("background-attachment", "fixed")
        }), !c() && a('[data-section-type="parallax"]').length && a(window).stellar({
            horizontalScrolling: !1,
            verticalScrolling: !0,
            responsive: !0,
            verticalOffset: 0,
            parallaxBackgrounds: !0,
            parallaxElements: !1
        }), a(".welcome-folio").each(function() {
            var b = a(this);
            b.find(".wpf-viewport").isotope({
                itemSelector: ".masonry-item",
                masonry: {
                    columnWidth: ".col-lg-3"
                }
            }), b.find(".wpf-filter a").on("click", function() {
                var c = a(this).data("filter");
                b.find(".wpf-viewport").isotope({
                    filter: c
                }), b.find(".wpf-filter a.active").removeClass("active"), a(this).addClass("active")
            })
        });
        var d = function(a) {
                a.find(".entry-big-text").css({
                    "-webkit-transition-duration": "0s",
                    "-moz-transition-duration": "0s",
                    "-ms-transition-duration": "0s",
                    "-o-transition-duration": "0s",
                    "transition-duration": "0s",
                    "-webkit-transform": "translateX(0px)",
                    "-moz-transform": "translateX(0px)",
                    "-ms-transform": "translateX(0px)",
                    "-o-transform": "translateX(0px)",
                    transform: "translateX(0px)"
                }), a.load(), e(a)
            },
            e = function(a) {
                var b = 0;
                if (a.find(".entry-title-wrap").width() < a.find(".entry-big-text").width()) {
                    if (0 == a.find(".entry-big-text").find("span").length) {
                        var c = a.find(".entry-big-text").text();
                        a.find(".entry-big-text").html("<span>" + c + "</span><span>" + c + "</span>")
                    }
                    var e = a.find(".entry-big-text").width() - 60;
                    e = parseInt(e / 2, 10), e += 60, b = e / 80, a.find(".entry-big-text").css({
                        "-webkit-transition-duration": b + "s",
                        "-moz-transition-duration": b + "s",
                        "-ms-transition-duration": b + "s",
                        "-o-transition-duration": b + "s",
                        "transition-duration": b + "s",
                        "-webkit-transform": "translateX(-" + e + "px)",
                        "-moz-transform": "translateX(-" + e + "px)",
                        "-ms-transform": "translateX(-" + e + "px)",
                        "-o-transform": "translateX(-" + e + "px)",
                        transform: "translateX(-" + e + "px)"
                    }), setTimeout(function() {
                        d(a)
                    }, 1e3 * b)
                }
            };
        a(".title-block[data-title]").each(function() {
            var b = a(this),
                c = b.data("title");
            b.append(a('<span class="entry-title-wrap"></span>').append(a('<span class="entry-big-text"></span>').text(c))), e(b)
        }), a(".wp-playlist.wp-audio-playlist, .wp-playlist.wp-video-playlist, .wp-audio-shortcode, .wp-video-shortcode").each(function() {
            var b = a(this);
            b.find(".mejs-playpause-button button").html('<svg class="ms_icon_play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 26" enable-background="new 0 0 20 26" xml:space="preserve"> \t\t\t\t\t\t\t\t\t\t\t\t\t                <path d="M19.2,12.5L1.5,0.1C1.3,0,1,0,0.8,0.1C0.6,0.2,0.5,0.4,0.5,0.6v24.8c0,0.2,0.1,0.4,0.3,0.5C0.9,26,1,26,1.1,26c0.1,0,0.2,0,0.3-0.1l17.8-12.4c0.2-0.1,0.3-0.3,0.3-0.5C19.5,12.8,19.4,12.6,19.2,12.5z"/> \t\t\t\t\t\t\t\t\t\t\t\t\t            </svg> \t\t\t\t\t\t\t\t\t\t\t\t\t            <svg class="ms_icon_pause" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 26" enable-background="new 0 0 20 26" xml:space="preserve"> \t\t\t\t\t\t\t\t\t\t\t\t\t                <path d="M8.3,25.1c0,0.5-0.4,0.9-0.9,0.9h-5c-0.5,0-0.9-0.4-0.9-0.9V0.9C1.5,0.4,1.9,0,2.4,0h5c0.5,0,0.9,0.4,0.9,0.9V25.1L8.3,25.1z"/> \t\t\t\t\t\t\t\t\t\t\t\t\t                <path d="M18.5,25.1c0,0.5-0.4,0.9-0.9,0.9h-5c-0.5,0-0.9-0.4-0.9-0.9V0.9c0-0.5,0.4-0.9,0.9-0.9h5c0.5,0,0.9,0.4,0.9,0.9V25.1z"/> \t\t\t\t\t\t\t\t\t\t\t\t\t            </svg>'), b.find(".mejs-volume-button button").html('<svg class="ec_volume_max" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 16" xml:space="preserve"> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d="M18.2,15.3c-0.2,0-0.4-0.1-0.6-0.3c-0.3-0.3-0.3-0.9,0-1.2C19.1,12.3,20,10.2,20,8c0-2.2-0.9-4.3-2.4-5.9c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0c1.9,1.9,2.9,4.4,2.9,7.1c0,2.7-1,5.2-2.9,7.1C18.6,15.2,18.4,15.3,18.2,15.3L18.2,15.3z M15.1,13.7c-0.2,0-0.4-0.1-0.6-0.3c-0.3-0.3-0.3-0.9,0-1.2c2.3-2.3,2.3-6.1,0-8.5c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0C17.2,4,18,5.9,18,8c0,2.1-0.8,4-2.3,5.5C15.6,13.6,15.4,13.7,15.1,13.7L15.1,13.7L15.1,13.7z M12.1,12.1c-0.2,0-0.4-0.1-0.6-0.3c-0.3-0.3-0.3-0.9,0-1.2c1.4-1.4,1.4-3.8,0-5.3c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0c2.1,2.1,2.1,5.6,0,7.7C12.5,12,12.3,12.1,12.1,12.1z"/>                                                                 <path d="M9.7,16c-0.1,0-0.3-0.1-0.4-0.2l-4.4-4.4h-2c-0.3,0-0.6-0.3-0.6-0.6V5.1c0-0.3,0.3-0.6,0.6-0.6h2l4.4-4.4C9.5,0,9.7,0,9.9,0c0.2,0.1,0.4,0.3,0.4,0.5v14.9c0,0.2-0.1,0.4-0.4,0.5C9.9,16,9.8,16,9.7,16z"/>                                                             </svg>                                                             <svg class="ec_volume_mute" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 16" xml:space="preserve">                                                                 <path d="M15.4,16c-0.1,0-0.3-0.1-0.4-0.2l-4.4-4.4h-2c-0.3,0-0.6-0.3-0.6-0.6V5.1c0-0.3,0.3-0.6,0.6-0.6h2L15,0.2C15.2,0,15.4,0,15.6,0C15.9,0.1,16,0.3,16,0.6v14.9c0,0.2-0.1,0.4-0.4,0.5C15.6,16,15.5,16,15.4,16z"/>                                                             </svg>')
        }), a(".wp-playlist.wp-audio-playlist, .wp-playlist.wp-video-playlist").each(function() {
            var b = a(this),
                c = b.find("script.wp-playlist-script").text(),
                d = a.parseJSON(c);
            b.find(".wp-playlist-prev").html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 15" xml:space="preserve">                                                         <path d="M0.1,7.2l9.5-6.7c0.1-0.1,0.2-0.1,0.4,0c0.1,0.1,0.2,0.2,0.2,0.3v6.3l9.3-6.6c0.1-0.1,0.2-0.1,0.4,0C19.9,0.5,20,0.6,20,0.8v13.5c0,0.1-0.1,0.3-0.2,0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2-0.1l-9.3-6.6v6.3c0,0.1-0.1,0.3-0.2,0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2-0.1L0.1,7.8C0.1,7.7,0,7.6,0,7.5C0,7.4,0.1,7.3,0.1,7.2z"/>                                                     </svg>'), b.find(".wp-playlist-next").html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 15" xml:space="preserve"> \t                                                    <path d="M19.9,7.2l-9.5-6.7c-0.1-0.1-0.2-0.1-0.4,0C9.9,0.5,9.8,0.6,9.8,0.8v6.3L0.6,0.5c-0.1-0.1-0.2-0.1-0.4,0C0.1,0.5,0,0.6,0,0.8v13.5c0,0.1,0.1,0.3,0.2,0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2-0.1l9.3-6.6v6.3c0,0.1,0.1,0.3,0.2,0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2-0.1l9.5-6.7C19.9,7.7,20,7.6,20,7.5C20,7.4,19.9,7.3,19.9,7.2z"/> \t                                                </svg>');
            var e = a('<table class="wp-pl-head"></table>');
            e.append('<tr> \t\t\t\t\t\t\t<th class="wp-pl-th1">' + themeton_playlist_label.art + '</th> \t\t\t\t\t\t\t<th class="wp-pl-th2">#</th> \t\t\t\t\t\t\t<th class="wp-pl-th3">' + themeton_playlist_label.title + '</th> \t\t\t\t\t\t\t<th class="wp-pl-th4">' + themeton_playlist_label.artist + '</th> \t\t\t\t\t\t\t<th class="wp-pl-th5">' + themeton_playlist_label.time + "</th> \t\t\t\t\t\t   </tr>"), b.find(".wp-playlist-tracks").prepend(e), a.each(d.tracks, function(c, d) {
                var e = a("<table></table>"),
                    f = "",
                    g = a('<span class="entry-pl-number"></span>');
                g.append(a('<span class="pl-index"></span>').html(c + 1)), g.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 26" enable-background="new 0 0 20 26" xml:space="preserve"> \t\t\t\t\t                <path d="M19.2,12.5L1.5,0.1C1.3,0,1,0,0.8,0.1C0.6,0.2,0.5,0.4,0.5,0.6v24.8c0,0.2,0.1,0.4,0.3,0.5C0.9,26,1,26,1.1,26c0.1,0,0.2,0,0.3-0.1l17.8-12.4c0.2-0.1,0.3-0.3,0.3-0.5C19.5,12.8,19.4,12.6,19.2,12.5z"/> \t\t\t\t\t            </svg>'), e.append("<tr></tr>"), e.find("tr").append(a('<td class="wp-pl-td1"></td>').append(a("<img>").attr("src", d.thumb.src))), e.find("tr").append(a('<td class="wp-pl-td2"></td>').append(g)), e.find("tr").append(a('<td class="wp-pl-td3"></td>').html(d.title)), "undefined" != typeof d.meta && "undefined" != typeof d.meta.artist && (f = d.meta.artist), e.find("tr").append(a('<td class="wp-pl-td4"></td>').html(f)), e.find("tr").append('<td class="wp-pl-td5">' + d.meta.length_formatted + "</td>"), b.find(".wp-playlist-tracks").find(".wp-playlist-item").eq(c).html("").append(e)
            })
        })
    })
}(jQuery);