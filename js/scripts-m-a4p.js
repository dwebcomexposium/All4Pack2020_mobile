$(document).ready(function(){var e,n,t=$(window),a=$("body"),o={Mobile:!1,Desktop:!1,Tablet:!1,IE:!1},s={Scroll:0,WinWidth:0},D=$(".site-banner"),r=D.outerHeight(),l=$(".wrapper");function d(){r=$(".site-banner").outerHeight(),l.css("padding-top",""),l.css("padding-top",r)}function c(){$(".list-stats").each(function(){var e,i=$(this);s.Scroll+t.height()>i.offset().top&&!i.hasClass("count-animated")&&((e=i).addClass("count-animated"),e.find("li").each(function(){var i=$(this).find("span"),e=parseInt(i.data("number"),10),n=i.data("suffix")||"",t=i.data("separator");e&&$({counter:0}).animate({counter:e},{duration:2e3,step:function(e){t.length?i.text(function(e,i){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1"+i+"$2");return e}(Math.floor(e),t)+n):i.text(Math.floor(e)+n)}})}))})}function p(){s.WinWidth=t.width(),o.Desktop=1200<s.WinWidth,o.SmallDesktop=s.WinWidth<=1200&&1025<=s.WinWidth,o.Tablet=s.WinWidth<=1024&&768<=s.WinWidth,o.Mobile=s.WinWidth<=767}$("body").addClass("ready"),function(e){for(i=0;i<e.length;i++)$(e[i]).attr("data-aos","fade-up")}([".site-banner",".offre",".section-background",".block-pub",".block:not(.quicks):not(.breadcrumb-nav):not(.global-search-form):not(.qlfooter):not(.newsletter-form):not(.network):not(.comexposium-survey-question-block)",".focus-catal",".section-videos",".section-articles",".section-video","body.article_list .list-grids-with-pagin","body.article_list .la-list",".pagination",".article-wrapper",".article-content blockquote",".cl-item",".faq-content",".section-intro"]),$(".site-banner #cxpmClientAccountWidget, .site-banner .quicks, .site-banner .lang-switcher, .site-banner .global-search-form").wrapAll('<div class="nav-utilities">'),$(".site-banner .logo, .site-banner .nav-utilities, .site-banner .main-navigation").wrapAll('<div class="header-content">'),$(".list-articles .gla-item-img").wrap('<div class="gla-item-img-wrapper">'),$(".la-list .la-item-img").wrap('<div class="la-item-img-wrapper">'),$(".lien1, .link-read-more, .link-view-all, .nf-form-submit .btn-primary, .site-banner #cxpmClientAccountWidget .widget-my-selection .widget-dropdown .widget-dropdown-content .see-all-selection a, .lien3, .lien4, .cc-cookie-accept").wrapInner("<span>"),$("body.front .profil .inside").wrapInner('<div class="block-content">'),$(".an-item-illust").wrap('<div class="an-item-illust-wrapper">'),$("body.article .at-illust").length||$("body.article").addClass("missing-banner"),$(".survey-vote .sv-main-content .comexposium-survey-page").append('<div class="form-text">'+$(".survey-vote .comexposium-survey-form").clone().children("div").remove().end().text()),function(){var e=D.find(".quicklinks.mobile"),i=D.find(".socials");D.find(".main-navigation").append(e.clone()).append(i.clone()),e.remove(),i.remove();var n=$("body.front"),t=n.find(".reference"),a=n.find(".site-banner .inside");if(n.length){a.append(t.clone()),t.remove();var o=n.find(".block-revolution");n.find(".reference .inside").prepend(n.find(".block-revolution").clone()),o.remove()}var s=$("body.article_list"),r=s.find(".breadcrumb-nav"),l=$(".list-articles"),d=l.find(".main-title-with-link"),c=l.find(".intro"),p=s.find(".site-banner .inside");s.length&&(p.append(r.clone()).append(d.clone()).append(c.clone()),r.remove(),d.remove(),c.remove());var u=$("body.article"),h=u.find(".breadcrumb-nav"),m=u.find(".block-pub"),g=u.find(".article-title"),f=u.find(".site-banner .inside");u.length&&(f.append(h.clone()).append(m.clone()).append(g.clone()),h.remove(),m.remove(),g.remove());var v=$("body.survey"),b=v.find(".survey-vote"),w=v.find(".site-banner .inside"),y=v.find(".breadcrumb-nav"),k=v.find("#zone1");if(v.length){w.append(y.clone()).append(b.clone()),b.remove(),y.remove();var x=v.find(".sv-main-content"),C=w.find(".section-intro");k.append(C.clone()),C.remove(),k.append(x.clone()),x.remove()}}(),p(),$(".btn-menu").click(function(e){e.preventDefault()}),a.on("click touchstart",function(e){var i=$(e.target);i.parents(".js .site-banner .gsf-fields").length||a.removeClass("show-search"),i.parents(".main-navigation").length||$(".mn-item-has-submenu").removeClass("expanded is-open").find(".mn-menu-submenu").slideUp(),i.parents(".main-navigation").length||($(".main-navigation").slideUp(350),a.removeClass("show-nav-main")),i.parents(".js-gsf").length||$(".js-gsf").removeClass("is-visible")}),$(".js-sna-item-link").click(function(){$(this).closest(".js-sna-item").siblings().find(".js-sna-item-content").removeClass("is-open").siblings(".fc-item-title").find(".js-sna-item-link").removeClass("is-active").find(".icon-minus").removeClass("icon-minus").addClass("icon-plus")}),$(".mn-item-has-submenu > a").click(function(){var e=$(this).parent();e.hasClass("expanded")?e.removeClass("expanded is-open").find(".mn-menu-submenu").slideUp():(e.addClass("expanded").children(".mn-menu-submenu").slideDown(),e.siblings().removeClass("expanded").find(".mn-menu-submenu").slideUp())}),$(".sb-menu-trigger").click(function(){a.toggleClass("show-nav-main"),$(".main-navigation").slideDown(350)}),e=$(".newsletter-form .nf-form-item label"),n=e.clone(),$(".newsletter-form .nf-form-input").prepend(n),e.remove(),$(".newsletter-form .nf-form-item p:not([class])").html(function(e,i){return i.replace(/(\S+\s)/,"<span>$1</span>")}),$(".nf-main-content .nf-form-txt").each(function(){var e=$(this),i=e.closest(".nf-main-content");e.on("blur",function(){0==e.val()?i.removeClass("hide-label"):e.addClass("hide-label")}).on("input",function(){i.addClass("hide-label")})}),$(".nf-form-item .optin-container .nf-form-input").click(function(){var e=$(this),i=e.parent(),n=e.find("input");n.trigger("click"),n.is(":checked")?i.addClass("checked"):i.removeClass("checked")}),a.on("DOMSubtreeModified",".nf-result",function(){$(".nf-result").find("p").length||$('.newsletter-form form input[type="checkbox"]').prop("checked",!1).closest(".optin-container.checked").removeClass("checked")}),t.on("load",function(){var e;!function(){var e=window.navigator.userAgent,i=e.indexOf("MSIE "),n=e.indexOf("Edge");(0<i||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(o.IE=!0,$("html").addClass("browser-ie"));(-1<n||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&$("html").addClass("browser-ie")}(),c(),d(),(e=$(".decouvrir-exposants")).wrapInner('<div class="slider-partners">'),e.append('<span class="slider-arrow slider-arrow-prev"><i class="ico-angle-left-circle" aria-hidden="true"></i></span>'),e.append('<span class="slider-arrow slider-arrow-next"><i class="ico-angle-right-circle" aria-hidden="true"></i></span>'),e.each(function(){var e=$(this);e.find(".slider-partners").carouFredSel({width:"100%",items:2,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:1,play:!0,timeoutDuration:3e3},prev:{button:e.find(".slider-arrow-prev"),key:"left"},next:{button:e.find(".slider-arrow-next"),key:"right"}})}),function(){var e=$("#videos"),i={sourcePath:"",youtubeAppId:"AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474",facebookAppId:"",useSwipeNavigation:!1,usePagination:!1,usePlaylistAdvanceButtons:!1,transitionType:"slide",navigationDirection:"h",fadeTimeout:50,videoAutoplay:!0,thumbDefault:"data/placeholder.png",videoDisplayType:"lightbox",breakPointArr:[{width:0,column:3,row:1,gutter:10},{width:767,column:3,row:1,gutter:40}],data:[{type:"youtube_playlist",path:e.data("playlist-id")}],cacheTime:0,playlistStorageKey:"pag-playlist-storage1",useHeaderBanner:!1,useHeaderLogo:!1,useHeaderTitle:!1,useHeaderDescription:!1,useHeaderStats:!1,useHeaderFollow:!1,usePlaylistSelector:!1,showVideoPlayBtn:!0,showVideoDuration:!1,showVideoTitle:!0,showVideoDate:!1,showVideoDescription:!1,showVideoStats:!1,showLightboxControls:!0,showLightboxTitle:!1,showLightboxUploadDate:!1,showLightboxAvatar:!1,showLightboxUsername:!1,showLightboxFollow:!1,showLightboxStats:!1,showLightboxShare:!1,showLightboxDescription:!1,showLightboxComments:!1,showLightboxVimeoDownload:!1,showLightboxVimeoCategory:!1};player=e.appag(i);var n=$("#video-single"),t={sourcePath:"",youtubeAppId:"AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474",facebookAppId:"",useSwipeNavigation:!1,usePagination:!1,usePlaylistAdvanceButtons:!1,transitionType:"slide",navigationDirection:"h",fadeTimeout:50,videoAutoplay:!0,thumbDefault:"data/placeholder.png",videoDisplayType:"lightbox",breakPointArr:[{width:0,column:1,row:1,gutter:0}],data:[{type:"youtube_playlist",path:n.data("playlist-id")}],cacheTime:0,playlistStorageKey:"pag-playlist-storage1",useHeaderBanner:!1,useHeaderLogo:!1,useHeaderTitle:!1,useHeaderDescription:!1,useHeaderStats:!1,useHeaderFollow:!1,usePlaylistSelector:!1,showVideoPlayBtn:!0,showVideoDuration:!1,showVideoTitle:!0,showVideoDate:!1,showVideoDescription:!1,showVideoStats:!1,showLightboxControls:!0,showLightboxTitle:!1,showLightboxUploadDate:!1,showLightboxAvatar:!1,showLightboxUsername:!1,showLightboxFollow:!1,showLightboxStats:!1,showLightboxShare:!1,showLightboxDescription:!1,showLightboxComments:!1,showLightboxVimeoDownload:!1,showLightboxVimeoCategory:!1};player2=n.appag(t)}(),$(".partner-gallery.cxp-swiper").each(function(){var e=$(this);e.find(".pg-pagin").remove();var i=e.wrap("<div>").parent().html();e.parent().append(i),e.remove(),$(".partner-gallery .slider-content").liMarquee({direction:"left",loop:-1,scrolldelay:0,scrollamount:60,circular:!0,drag:!0})}),o.IE?setTimeout(function(){AOS.init({offset:t.height()/10,duration:600,once:!0})},400):AOS.init({offset:t.height()/10,duration:600,once:!0}),$(".ls-lang-list").append('<li class="ls-lang-item ls-lang-de"><a href="https://www.all4pack.com/de/Verpackung-und-Handling" class="ls-lang-link">DE</a></li><li class="ls-lang-item ls-lang-es"><a href="https://www.all4pack.com/es/emballage-y-manipulacion" class="ls-lang-link">ES</a></li><li class="ls-lang-item ls-lang-it"><a href="https://www.all4pack.com/it/imballaggio-e-movimentazione" class="ls-lang-link">IT</a></li>')}),t.on("resize orientationchange",function(){p(),d()}),t.on("scroll",function(){s.Scroll=t.scrollTop(),c()})});
