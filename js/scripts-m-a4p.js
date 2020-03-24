$(document).ready(function(){
    var $win = $(window);
    var $body = $('body');

    var is = {
        Mobile  : false,
        Desktop : false,
        Tablet  : false,
        IE      : false
    };

    var get = {
        Scroll   : 0,
        WinWidth : 0
    };

    var $header = $('.site-banner');
    var headerHeight = $header.outerHeight();
    var $wrapper = $('.wrapper');

	$('body').addClass('ready'); // shows the body - it's invisible by default to prevent showing the elements before initialization of the animations below

	addAnimateAttr([
        '.site-banner',
        '.offre',
        '.section-background',
        '.block-pub',
        '.block:not(.quicks):not(.breadcrumb-nav):not(.global-search-form):not(.qlfooter):not(.newsletter-form):not(.network):not(.comexposium-survey-question-block)',
        '.focus-catal',
        '.section-videos',
        '.section-articles',
        '.section-video',
        // List Article page
        'body.article_list .list-grids-with-pagin',
        'body.article_list .la-list',
        '.pagination',
        // Article page
        '.article-wrapper',
        '.article-content blockquote',
        '.cl-item',
        '.faq-content',
        // LP Exposer
        '.section-intro'
    ]);


    $('.site-banner #cxpmClientAccountWidget, .site-banner .quicks, .site-banner .lang-switcher, .site-banner .global-search-form').wrapAll('<div class="nav-utilities">')
    $('.site-banner .logo, .site-banner .nav-utilities, .site-banner .main-navigation').wrapAll('<div class="header-content">');

    $('.list-articles .gla-item-img').wrap('<div class="gla-item-img-wrapper">');
    $('.la-list .la-item-img').wrap('<div class="la-item-img-wrapper">');

    $('.lien1, .link-read-more, .link-view-all, .nf-form-submit .btn-primary, .site-banner #cxpmClientAccountWidget .widget-my-selection .widget-dropdown .widget-dropdown-content .see-all-selection a, .lien3, .lien4, .cc-cookie-accept').wrapInner('<span>');

    $('body.front .profil .inside').wrapInner('<div class="block-content">');

    $('.an-item-illust').wrap('<div class="an-item-illust-wrapper">');

    if (!$('body.article .at-illust').length) {
        $('body.article').addClass('missing-banner');
    }

    $('.survey-vote .sv-main-content .comexposium-survey-page').append('<div class="form-text">' + $('.survey-vote .comexposium-survey-form').clone().children('div').remove().end().text());

    moveElementsToHeader();
    addDeviceResolution();
    addBaseClickEvents();
    newsletterLabel();
    
    $win.on('load', function(){
        detectBrowsersIE();

        countUp();
        headerGutterCalc();
        initSliders();
        videoLightboxInit();
        reInitSwiper();

        if (is.IE) {
            setTimeout(function(){
                AOS.init({
                    offset: $win.height() / 10,
                    duration: 600,
                    once: true
                });
            },400);
        } else {
            AOS.init({
                offset: $win.height() / 10,
                duration: 600,
                once: true
            });
        }

        $('.ls-lang-list').append('<li class="ls-lang-item ls-lang-de"><a href="https://www.all4pack.com/de/Verpackung-und-Handling" class="ls-lang-link">DE</a></li><li class="ls-lang-item ls-lang-es"><a href="https://www.all4pack.com/es/emballage-y-manipulacion" class="ls-lang-link">ES</a></li><li class="ls-lang-item ls-lang-it"><a href="https://www.all4pack.com/it/imballaggio-e-movimentazione" class="ls-lang-link">IT</a></li>');

    });

    $win.on('resize orientationchange', function(){
        addDeviceResolution();
        headerGutterCalc();
    });

    $win.on('scroll', function(){
        get.Scroll = $win.scrollTop();
        countUp();
    });

    function videoLightboxInit() {
        var $videosContainer = $('#videos');
        var videosPlaylistID = $videosContainer.data('playlist-id');

        var videosSources = [
            {type:"youtube_playlist", path: videosPlaylistID}
        ]

        var videosSettings = {
            sourcePath:"",
            youtubeAppId:"AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474",
            facebookAppId:"",
            useSwipeNavigation:false,
            usePagination:false,
            usePlaylistAdvanceButtons:false,
            transitionType:"slide", 
            navigationDirection:"h",
            fadeTimeout:50,
            videoAutoplay:true,
            thumbDefault:"data/placeholder.png",
            videoDisplayType:"lightbox",
            breakPointArr:[
                {width:0, column:3, row:1, gutter:10},
                {width:767, column:3, row:1, gutter:40}
            ],

            data:videosSources,//playlist data to load
            cacheTime:0,
            playlistStorageKey:"pag-playlist-storage1",

            useHeaderBanner:false,
            useHeaderLogo:false,
            useHeaderTitle:false,
            useHeaderDescription:false,
            useHeaderStats:false,
            useHeaderFollow:false,

            usePlaylistSelector:false,

            showVideoPlayBtn:true,
            showVideoDuration:false,
            showVideoTitle:true,
            showVideoDate:false,
            showVideoDescription:false,
            showVideoStats:false,

            showLightboxControls:true,

            showLightboxTitle:false,
            showLightboxUploadDate:false,
            showLightboxAvatar:false,
            showLightboxUsername:false,
            showLightboxFollow:false,
            showLightboxStats:false,
            showLightboxShare:false,
            showLightboxDescription:false,
            showLightboxComments:false,

            showLightboxVimeoDownload:false,
            showLightboxVimeoCategory:false
        };

        player = $videosContainer.appag(videosSettings);


        // Video Single
        var $videoSingle = $('#video-single');
        var videoPlaylistID = $videoSingle.data('playlist-id');

        var videoSources = [
            {type:"youtube_playlist", path: videoPlaylistID}
        ]

        var videoSettings = {
            sourcePath:"",
            youtubeAppId:"AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474",
            facebookAppId:"",
            useSwipeNavigation:false,
            usePagination:false,
            usePlaylistAdvanceButtons:false,
            transitionType:"slide", 
            navigationDirection:"h",
            fadeTimeout:50,
            videoAutoplay:true,
            thumbDefault:"data/placeholder.png",
            videoDisplayType:"lightbox",
            breakPointArr:[
                {width:0, column:1, row:1, gutter:0}
            ],

            data:videoSources,//playlist data to load
            cacheTime:0,
            playlistStorageKey:"pag-playlist-storage1",

            useHeaderBanner:false,
            useHeaderLogo:false,
            useHeaderTitle:false,
            useHeaderDescription:false,
            useHeaderStats:false,
            useHeaderFollow:false,

            usePlaylistSelector:false,

            showVideoPlayBtn:true,
            showVideoDuration:false,
            showVideoTitle:true,
            showVideoDate:false,
            showVideoDescription:false,
            showVideoStats:false,

            showLightboxControls:true,

            showLightboxTitle:false,
            showLightboxUploadDate:false,
            showLightboxAvatar:false,
            showLightboxUsername:false,
            showLightboxFollow:false,
            showLightboxStats:false,
            showLightboxShare:false,
            showLightboxDescription:false,
            showLightboxComments:false,

            showLightboxVimeoDownload:false,
            showLightboxVimeoCategory:false
        };

        player2 = $videoSingle.appag(videoSettings);
    }

     function reInitSwiper() {
        $('.partner-gallery.cxp-swiper').each(function(){
            var $this = $(this);
            $this.find('.pg-pagin').remove();

            var data = $this.wrap('<div>').parent().html();

            // Create new html
            $this.parent().append(data);

            // Delete old slider
            $this.remove();


            // Marquee Init
            $('.partner-gallery .slider-content').liMarquee({
                direction: 'left',  
                loop: -1,            
                scrolldelay: 0,     
                scrollamount: 60,   
                circular: true,     
                drag: true          
            });
        });
    }

    function initSliders() {
        var $sliderWrapper = $('.decouvrir-exposants');
        $sliderWrapper.wrapInner('<div class="slider-partners">');
        $sliderWrapper.append('<span class="slider-arrow slider-arrow-prev"><i class="ico-angle-left-circle" aria-hidden="true"></i></span>')
        $sliderWrapper.append('<span class="slider-arrow slider-arrow-next"><i class="ico-angle-right-circle" aria-hidden="true"></i></span>')

        $sliderWrapper.each(function(){
            var $this = $(this);

             $this.find('.slider-partners').carouFredSel({
                width: '100%',
                items: 2,
                circular: true,
                infinite: true,
                responsive: true,
                swipe: true,
                auto: {
                    items: 1,
                    play: true,
                    timeoutDuration: 3000
                },
                prev : {
                    button: $this.find('.slider-arrow-prev'),
                    key: 'left'
                },
                next : {
                    button: $this.find('.slider-arrow-next'),
                    key: 'right'
                }
            });
        });
    }

    function headerGutterCalc() {
        headerHeight = $('.site-banner').outerHeight();

        $wrapper.css('padding-top', '');
        $wrapper.css('padding-top', headerHeight);
    }

    function moveElementsToHeader() {
        // Mobile Nav
        var $quicklinks = $header.find('.quicklinks.mobile');
        var $socials = $header.find('.socials');

        $header.find('.main-navigation')
            .append($quicklinks.clone())
            .append($socials.clone());

        $quicklinks.remove();
        $socials.remove();


        // Homepage
        var $bodyFront = $('body.front');
        var $reference = $bodyFront.find('.reference');
        var $bodyFrontHeader = $bodyFront.find('.site-banner .inside');

        if ($bodyFront.length) {
            $bodyFrontHeader.append($reference.clone());
            $reference.remove();

            var $blockRevolution = $bodyFront.find('.block-revolution');

            $bodyFront.find('.reference .inside').prepend($bodyFront.find('.block-revolution').clone());
            $blockRevolution.remove();
        }

        // List Articles page
        var $bodyListArticles = $('body.article_list');
        var $breadcrumbsListArticles = $bodyListArticles.find('.breadcrumb-nav');
        var $blockArticles = $('.list-articles');
        var $blockArticlesTitle = $blockArticles.find('.main-title-with-link');
        var $blockArticlesIntro = $blockArticles.find('.intro');
        var $bodyListArticlesHeader = $bodyListArticles.find('.site-banner .inside');

        if ($bodyListArticles.length) {
            $bodyListArticlesHeader
                .append($breadcrumbsListArticles.clone())
                .append($blockArticlesTitle.clone())
                .append($blockArticlesIntro.clone());
                        
            $breadcrumbsListArticles.remove();
            $blockArticlesTitle.remove();
            $blockArticlesIntro.remove();
        }

        // Article page
        var $bodyArticle = $('body.article');
        var $breadcrumbsArticle = $bodyArticle.find('.breadcrumb-nav');
        var $pubArticle = $bodyArticle.find('.block-pub');
        var $articleTitleArticle = $bodyArticle.find('.article-title');
        var $bodyArticleHeader = $bodyArticle.find('.site-banner .inside');

        if ($bodyArticle.length) {
            $bodyArticleHeader
                .append($breadcrumbsArticle.clone())
                .append($pubArticle.clone())
                .append($articleTitleArticle.clone());

            $breadcrumbsArticle.remove();
            $pubArticle.remove();
            $articleTitleArticle.remove();
        }

        // Survey Vote
        var $bodyExposant = $('body.survey');
        var $blockForm = $bodyExposant.find('.survey-vote');
        var $bodyExposantHeader = $bodyExposant.find('.site-banner .inside');
        var $breadcrumbsExposant = $bodyExposant.find('.breadcrumb-nav');

        var $zone1Exposant = $bodyExposant.find('#zone1');

        if ($bodyExposant.length) {
            $bodyExposantHeader
                .append($breadcrumbsExposant.clone())
                .append($blockForm.clone());

            $blockForm.remove();
            $breadcrumbsExposant.remove();

            var $formExposant = $bodyExposant.find('.sv-main-content');

            // Move Section Intro outiside the header
            var $sectionIntroExposant = $bodyExposantHeader.find('.section-intro');
            $zone1Exposant.append($sectionIntroExposant.clone());
            $sectionIntroExposant.remove();

            $zone1Exposant.append($formExposant.clone());
            $formExposant.remove();
        }
    }

    function countUp() {
        $('.list-stats').each(function(){
            var $this = $(this);

            if (get.Scroll + $win.height() > $this.offset().top && !$this.hasClass('count-animated')) {
                count($this);
            }
        });

        function count(element) {
            element.addClass('count-animated');

            element.find('li').each(function(){
                var $this      = $(this).find('span');
                var startValue = 0;
                var finalValue = parseInt(($this.data('number')), 10);
                var suffix     = $this.data('suffix') || '';
                var separator   = $this.data('separator');

                if (!finalValue) {
                    return;
                }

                $({ counter: 0 }).animate({
                    counter: finalValue
                }, {
                    duration: 2000,
                    step: function(now) {
                        if (separator.length) {
                            $this.text(spaceSeparateNumber(Math.floor(now), separator) + suffix);
                        } else {
                            $this.text(Math.floor(now) + suffix);
                        }
                    }
                });
            });
        }
    }

    function spaceSeparateNumber(val, divider) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + divider + '$2');
        }

        return val;
    }

    function addAnimateAttr(input) {
        for (i = 0; i < input.length; i++) {
            $(input[i]).attr('data-aos', 'fade-up');
        }
    }

    function newsletterLabel() {
        // Move Newsletter label to Input container
        var $newsletterLabel = $('.newsletter-form .nf-form-item label');
        var newsletterLabelData = $newsletterLabel.clone();
        $('.newsletter-form .nf-form-input').prepend(newsletterLabelData);
        $newsletterLabel.remove();

        // Wrap first word in <span>
        $('.newsletter-form .nf-form-item p:not([class])').html(function (i, html) {
            return html.replace(/(\S+\s)/, '<span>$1</span>')
        });

        // Form Handler
        $('.nf-main-content .nf-form-txt').each(function(){
            var $this = $(this);
            var $container = $this.closest('.nf-main-content');

            $this.on('blur', function(){
                if ($this.val() == 0) {
                    $container.removeClass('hide-label');
                } else {
                    $this.addClass('hide-label');
                }
            }).on('input', function(){
                $container.addClass('hide-label');
            });
        });

        // Checkbox
        $('.nf-form-item .optin-container .nf-form-input').click(function(){
            var $this = $(this);
            var $parent = $this.parent();
            var $input = $this.find('input');

            $input.trigger('click');

            if (!$input.is(':checked')) {
                $parent.removeClass('checked');
            } else {
                $parent.addClass('checked');
            }
        });

        $body.on('DOMSubtreeModified', '.nf-result', function() {
            if (!$('.nf-result').find('p').length) {
                $('.newsletter-form form input[type="checkbox"]').prop('checked', false).closest('.optin-container.checked').removeClass('checked');
            }
        });
    }

    function addBaseClickEvents() {
        $('.btn-menu').click(function(e){
            e.preventDefault();
        }); 

        $body.on('click touchstart', function(event){
            var $target = $(event.target);

            if(!$target.parents('.js .site-banner .gsf-fields').length){
                $body.removeClass('show-search');
            }

            if (!$target.parents('.main-navigation').length) {
                $('.mn-item-has-submenu').removeClass('expanded is-open').find('.mn-menu-submenu').slideUp();
            }

            if (!$target.parents('.main-navigation').length) {
                $('.main-navigation').slideUp(350);
                $body.removeClass('show-nav-main');
            }

            if (!$target.parents('.js-gsf').length) {
                $('.js-gsf').removeClass('is-visible');
            }
        });

        $('.js-sna-item-link').click(function(){
            var $this = $(this);
            $this.closest('.js-sna-item').siblings().find('.js-sna-item-content').removeClass('is-open').siblings('.fc-item-title').find('.js-sna-item-link').removeClass('is-active').find('.icon-minus').removeClass('icon-minus').addClass('icon-plus');
        });

        $('.mn-item-has-submenu > a').click(function(){
            var $this = $(this);
            var $parent = $this.parent();

            if (!$parent.hasClass('expanded')) {
                $parent.addClass('expanded').children('.mn-menu-submenu').slideDown();

                $parent.siblings().removeClass('expanded').find('.mn-menu-submenu').slideUp();
            } else {
                $parent.removeClass('expanded is-open').find('.mn-menu-submenu').slideUp();
            }
        });

        $('.sb-menu-trigger').click(function(){
            $body.toggleClass('show-nav-main');
            $('.main-navigation').slideDown(350);
        });
    }
 
    function addDeviceResolution() {
        get.WinWidth = $win.width();

        is.Desktop = (get.WinWidth > 1200); 
        is.SmallDesktop = (get.WinWidth <= 1200 && get.WinWidth >= 1025);
        is.Tablet  = (get.WinWidth <= 1024 && get.WinWidth >= 768);
        is.Mobile  = (get.WinWidth <= 767);
    }

    function detectBrowsersIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var msedge = ua.indexOf("Edge");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { 
            is.IE = true;
            $('html').addClass("browser-ie");
        }

        if (msedge > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) { 
            $('html').addClass("browser-ie");
        }
    }
});