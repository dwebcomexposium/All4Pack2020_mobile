$(document).ready(function(){var e,n,t=$(window),o=$("body"),a={Mobile:!1,Desktop:!1,Tablet:!1,IE:!1},s={Scroll:0,WinWidth:0},N=$(".site-banner"),r=N.outerHeight(),l=$(".wrapper");function d(){r=$(".site-banner").outerHeight(),l.css("padding-top",""),l.css("padding-top",r)}function c(){$(".list-stats").each(function(){var e,n=$(this);s.Scroll+t.height()>n.offset().top&&!n.hasClass("count-animated")&&((e=n).addClass("count-animated"),e.find("li").each(function(){var n=$(this).find("span"),e=parseInt(n.data("number"),10),i=n.data("suffix")||"",t=n.data("separator");e&&$({counter:0}).animate({counter:e},{duration:2e3,step:function(e){t.length?n.text(function(e,n){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1"+n+"$2");return e}(Math.floor(e),t)+i):n.text(Math.floor(e)+i)}})}))})}function p(){s.WinWidth=t.width(),a.Desktop=1200<s.WinWidth,a.SmallDesktop=s.WinWidth<=1200&&1025<=s.WinWidth,a.Tablet=s.WinWidth<=1024&&768<=s.WinWidth,a.Mobile=s.WinWidth<=767}$("body").addClass("ready"),function(e){for(i=0;i<e.length;i++)$(e[i]).attr("data-aos","fade-up")}([".site-banner",".offre",".section-background",".block-pub",".block:not(.quicks):not(.breadcrumb-nav):not(.global-search-form):not(.qlfooter):not(.newsletter-form):not(.network):not(.comexposium-survey-question-block)",".focus-catal",".section-videos",".section-articles",".section-video","body.article_list .list-grids-with-pagin","body.article_list .la-list",".pagination",".article-wrapper",".article-content blockquote",".cl-item",".faq-content",".section-intro"]),$(".site-banner #cxpmClientAccountWidget, .site-banner .quicks, .site-banner .lang-switcher, .site-banner .global-search-form").wrapAll('<div class="nav-utilities">'),$(".site-banner .logo, .site-banner .nav-utilities, .site-banner .main-navigation").wrapAll('<div class="header-content">'),$(".list-articles .gla-item-img").wrap('<div class="gla-item-img-wrapper">'),$(".la-list .la-item-img").wrap('<div class="la-item-img-wrapper">'),$(".lien1, .link-read-more, .link-view-all, .nf-form-submit .btn-primary, .site-banner #cxpmClientAccountWidget .widget-my-selection .widget-dropdown .widget-dropdown-content .see-all-selection a, .lien3, .lien4, .cc-cookie-accept").wrapInner("<span>"),$("body.front .profil .inside").wrapInner('<div class="block-content">'),$(".an-item-illust").wrap('<div class="an-item-illust-wrapper">'),$("body.article .at-illust").length||$("body.article").addClass("missing-banner"),$(".survey-vote .sv-main-content .comexposium-survey-page").append('<div class="form-text">'+$(".survey-vote .comexposium-survey-form").clone().children("div").remove().end().text()),$('meta[name="viewport"]').attr("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),function(){var e=N.find(".quicklinks.mobile"),n=N.find(".socials");N.find(".main-navigation").append(e.clone()).append(n.clone()),e.remove(),n.remove();var i=$("body.front"),t=i.find(".reference"),o=i.find(".site-banner .inside");{var a;i.length&&(o.append(t.clone()),t.remove(),a=i.find(".block-revolution"),i.find(".reference .inside").prepend(i.find(".block-revolution").clone()),a.remove())}var s=$("body.article_list"),r=s.find(".breadcrumb-nav"),l=$(".list-articles"),d=l.find(".main-title-with-link"),c=l.find(".intro"),p=s.find(".site-banner .inside");s.length&&(p.append(r.clone()).append(d.clone()).append(c.clone()),r.remove(),d.remove(),c.remove());var u=$("body.article"),h=u.find(".breadcrumb-nav"),f=u.find(".block-pub"),m=u.find(".article-title"),g=u.find(".site-banner .inside");u.length&&(g.append(h.clone()).append(f.clone()).append(m.clone()),h.remove(),f.remove(),m.remove());var v=$("body.error404"),b=$(".main-title"),w=v.find(".site-banner .inside");v.length&&(w.append(b.clone()),b.remove());var y=$("body.sitemap"),k=$("h1"),x=y.find(".site-banner .inside");y.length&&(x.append(k.clone()),k.remove());var C=$("body.faq"),D=$(".block.faq").find(".faq-main-title"),S=C.find(".site-banner .inside");C.length&&(S.append(D.clone()),D.remove());var L=$("body.page-events"),A=$("#zone2").find("h1"),T=L.find(".site-banner .inside");L.length&&(T.append(A.clone()),A.remove());var P=$("body.catalogue"),V=$(".global-wrapper"),W=V.find("h1"),I=V.find("#zone1 .block-page.edito .inside"),H=P.find(".site-banner .inside");P.length&&(H.append(W.clone()).append(I.clone()),W.remove(),I.remove());var j=$("body.partner"),q=$(".block.partner-list"),z=q.find("h1"),M=q.find(".intro"),U=j.find(".site-banner .inside");j.length&&(U.append(z.clone()).append(M.clone()),z.remove(),M.remove());var E=$("body.survey"),B=E.find(".survey-vote"),F=E.find(".site-banner .inside"),O=E.find(".breadcrumb-nav"),_=E.find("#zone1");{var K,J;E.length&&(F.append(O.clone()).append(B.clone()),B.remove(),O.remove(),K=E.find(".sv-main-content"),J=F.find(".section-intro"),_.append(J.clone()),J.remove(),_.append(K.clone()),K.remove())}}(),p(),$(".btn-menu").click(function(e){e.preventDefault()}),o.on("click touchstart",function(e){var n=$(e.target);n.parents(".js .site-banner .gsf-fields").length||o.removeClass("show-search"),n.parents(".main-navigation").length||$(".mn-item-has-submenu").removeClass("expanded is-open").find(".mn-menu-submenu").slideUp(),n.parents(".main-navigation").length||($(".main-navigation").slideUp(350),o.removeClass("show-nav-main")),n.parents(".js-gsf").length||$(".js-gsf").removeClass("is-visible"),n.closest(".lang-switcher, .lang-switcher .js-toggle-trigger").length||$(".header-content").removeClass("lang-switcher-opened")}),$(".js-sna-item-link").click(function(){$(this).closest(".js-sna-item").siblings().find(".js-sna-item-content").removeClass("is-open").siblings(".fc-item-title").find(".js-sna-item-link").removeClass("is-active").find(".icon-minus").removeClass("icon-minus").addClass("icon-plus")}),$(".mn-item-has-submenu > a").click(function(){var e=$(this).parent();e.hasClass("expanded")?e.removeClass("expanded is-open").find(".mn-menu-submenu").slideUp():(e.addClass("expanded").children(".mn-menu-submenu").slideDown(),e.siblings().removeClass("expanded").find(".mn-menu-submenu").slideUp())}),$(".sb-menu-trigger").click(function(){o.toggleClass("show-nav-main"),$(".main-navigation").slideDown(350)}),$('[href="#newsletter"]').on("click",function(e){e.preventDefault();var n=$(".site-footer").offset().top;$("html, body").animate({scrollTop:n},2e3)}),$(document).on("touchstart",".global-search-form .js-toggle-trigger",function(e){e.preventDefault();var n=$(this).closest(".global-search-form"),i=n.find(".gsf-input-line"),t=n.find(".gsf-input-line .gsf-input");setTimeout(function(){i.trigger("click"),t.focus()},1e3)}),$(".global-search-form .js-toggle-trigger").on("click",function(e){var n=$(this).closest(".global-search-form"),i=(n.find(".gsf-input-line"),n.find(".gsf-input-line .gsf-input"));setTimeout(function(){i.trigger("click"),i.get(0).focus(),i.focus()},200)}),$(".lang-switcher .js-toggle-trigger").on("click",function(e){$(this).closest(".header-content").toggleClass("lang-switcher-opened")}),e=$(".newsletter-form .nf-form-item label"),n=e.clone(),$(".newsletter-form .nf-form-input").prepend(n),e.remove(),$(".newsletter-form .nf-form-item p:not([class])").html(function(e,n){return n.replace(/(\S+\s)/,"<span>$1</span>")}),$(".nf-main-content .nf-form-txt").each(function(){var e=$(this),n=e.closest(".nf-main-content");e.on("blur",function(){0==e.val()?n.removeClass("hide-label"):e.addClass("hide-label")}).on("input",function(){n.addClass("hide-label")})}),$(document).on("click",".optin-container .nf-form-input",function(){var e=$(this),n=e.parent(),i=e.find("input");i.trigger("click"),i.is(":checked")?n.addClass("checked"):n.removeClass("checked")}),o.on("DOMSubtreeModified",".nf-result",function(){$(".nf-result").find("div").length&&$('.newsletter-form form input[type="checkbox"]').prop("checked",!1).closest(".optin-container.checked").removeClass("checked")}),t.on("load",function(){var e;!function(){var e=window.navigator.userAgent,n=e.indexOf("MSIE "),i=e.indexOf("Edge");(0<n||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&(a.IE=!0,$("html").addClass("browser-ie"));(-1<i||navigator.userAgent.match(/Trident.*rv\:11\./)||navigator.userAgent.match(/(iPod|iPhone|iPad)/))&&$("html").addClass("browser-ie")}(),c(),d(),(e=$(".decouvrir-exposants")).wrapInner('<div class="slider-partners">'),e.append('<span class="slider-arrow slider-arrow-prev"><i class="ico-angle-left-circle" aria-hidden="true"></i></span>'),e.append('<span class="slider-arrow slider-arrow-next"><i class="ico-angle-right-circle" aria-hidden="true"></i></span>'),e.each(function(){var e=$(this);e.find(".slider-partners").carouFredSel({width:"100%",items:2,circular:!0,infinite:!0,responsive:!0,swipe:!0,auto:{items:1,play:!0,timeoutDuration:3e3},prev:{button:e.find(".slider-arrow-prev"),key:"left"},next:{button:e.find(".slider-arrow-next"),key:"right"}})}),function(){var e=$("#videos"),n={sourcePath:"",youtubeAppId:"AIzaSyC9-ccCSlXZk2tfJflKjIfxi8EuzDzPVqk",facebookAppId:"",useSwipeNavigation:!1,usePagination:!1,usePlaylistAdvanceButtons:!1,transitionType:"slide",navigationDirection:"h",fadeTimeout:50,videoAutoplay:!0,thumbDefault:"data/placeholder.png",videoDisplayType:"lightbox",breakPointArr:[{width:0,column:3,row:1,gutter:10},{width:767,column:3,row:1,gutter:40}],data:[{type:"youtube_playlist",path:e.data("playlist-id")}],cacheTime:0,playlistStorageKey:"pag-playlist-storage1",useHeaderBanner:!1,useHeaderLogo:!1,useHeaderTitle:!1,useHeaderDescription:!1,useHeaderStats:!1,useHeaderFollow:!1,usePlaylistSelector:!1,showVideoPlayBtn:!0,showVideoDuration:!1,showVideoTitle:!0,showVideoDate:!1,showVideoDescription:!1,showVideoStats:!1,showLightboxControls:!0,showLightboxTitle:!1,showLightboxUploadDate:!1,showLightboxAvatar:!1,showLightboxUsername:!1,showLightboxFollow:!1,showLightboxStats:!1,showLightboxShare:!1,showLightboxDescription:!1,showLightboxComments:!1,showLightboxVimeoDownload:!1,showLightboxVimeoCategory:!1};player=e.appag(n);var i=$("#video-single"),t={sourcePath:"",youtubeAppId:"AIzaSyC9-ccCSlXZk2tfJflKjIfxi8EuzDzPVqk",facebookAppId:"",useSwipeNavigation:!1,usePagination:!1,usePlaylistAdvanceButtons:!1,transitionType:"slide",navigationDirection:"h",fadeTimeout:50,videoAutoplay:!0,thumbDefault:"data/placeholder.png",videoDisplayType:"lightbox",breakPointArr:[{width:0,column:1,row:1,gutter:0}],data:[{type:"youtube_playlist",path:i.data("playlist-id")}],cacheTime:0,playlistStorageKey:"pag-playlist-storage1",useHeaderBanner:!1,useHeaderLogo:!1,useHeaderTitle:!1,useHeaderDescription:!1,useHeaderStats:!1,useHeaderFollow:!1,usePlaylistSelector:!1,showVideoPlayBtn:!0,showVideoDuration:!1,showVideoTitle:!0,showVideoDate:!1,showVideoDescription:!1,showVideoStats:!1,showLightboxControls:!0,showLightboxTitle:!1,showLightboxUploadDate:!1,showLightboxAvatar:!1,showLightboxUsername:!1,showLightboxFollow:!1,showLightboxStats:!1,showLightboxShare:!1,showLightboxDescription:!1,showLightboxComments:!1,showLightboxVimeoDownload:!1,showLightboxVimeoCategory:!1};player2=i.appag(t)}(),$(".partner-gallery.cxp-swiper").each(function(){var e=$(this);e.find(".pg-pagin").remove();var n=e.wrap("<div>").parent().html();e.parent().append(n),e.remove(),$(".partner-gallery .slider-content").liMarquee({direction:"left",loop:-1,scrolldelay:0,scrollamount:60,circular:!0,drag:!0})}),a.IE?setTimeout(function(){AOS.init({offset:t.height()/10,duration:600,once:!0})},400):AOS.init({offset:t.height()/10,duration:600,once:!0})}),t.on("resize orientationchange",function(){p(),d()}),t.on("scroll",function(){s.Scroll=t.scrollTop(),c()})});
