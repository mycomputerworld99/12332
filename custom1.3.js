
//<![CDATA[
var homePage = "https://www.learn4info.com/",
numPosts = 5;
function recentPostshas(a){if(document.getElementById("recent-postshas")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-postshas");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-postshas"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPostshas';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>

/*<![CDATA[*/ /* Disable default Blogger cookie notice */ cookieChoices = {}; /*]]>*/

/*<![CDATA[*/ /* Cookies Consent Notice */ var ckBox=document.querySelector("#ckBox"),CaCp=document.querySelector("#CaCp"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=ckBox){CaCp.onclick=()=>{document.cookie="CookieConsentByFineshop=Accepted; max-age=2592000; path=/",document.cookie?ckBox.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("CookieConsentByFineshop=Accepted");-1!=e?ckBox.classList.add("hidden"):ckBox.classList.remove("hidden")} /*]]>*/</script><script>/*<![CDATA[*/ /* Cookies Consent Notice */ var ckBox=document.querySelector("#ckBox"),CaCp=document.querySelector("#CaCp"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=ckBox){CaCp.onclick=()=>{document.cookie="CookieConsentByFineshop=Accepted; max-age=2592000; path=/",document.cookie?ckBox.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("CookieConsentByFineshop=Accepted");-1!=e?ckBox.classList.add("hidden"):ckBox.classList.remove("hidden")} /*]]>*/
