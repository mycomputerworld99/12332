
//<![CDATA[
var homePage = "https://www.learn4info.com/",
numPosts = 5;
function recentPostshas(a){if(document.getElementById("recent-postshas")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-postshas");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-postshas"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPostshas';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>

/* Cookies Consent Notice */
.CwR{position:fixed;right:0;left:0;bottom:-600px;z-index:50;width:100%;padding:20px;background:rgba(255, 255, 255, 0.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:30px 30px 0 0;box-shadow:0 -10px 25px -5px rgba(0,0,0,.1);align-items:center;justify-content:center;text-align:center;animation:ckUp 2.5s forwards;animation-delay:1s;-webkit-animation:ckUp 2.5s forwards;-webkit-animation-delay:1s}
.CwR.acptd{animation:ckDn 2.5s backwards;animation-delay:.3s;-webkit-animation:ckDn 2.5s backwards;-webkit-animation-delay:.3s}
.CwR.hidden{display:none}
.CwR .CcN svg{width:50px;height:50px;fill:#08102b;stroke:#08102b;stroke-width:.8}
.CcN h2{margin:0;color:#08102b;font-size:1.5rem;font-weight:800;font-family:inherit}
.CcN p{margin:10px 0;line-height:1.7em;color:#08102b;font-size:0.9rem;font-weight:400;font-family:inherit}
.CwR .btn{display:inline-flex;align-items:center;margin:0;padding:10px 15px;outline:0;border:0;border-radius:2px;line-height:20px;color:#fefefe;background-color:#482dff;font-size:13px;font-family:inherit;text-decoration:none;white-space:nowrap;overflow:hidden;max-width:100%;cursor:pointer;transition:all 0.3s ease}
.CwR .btn:hover{opacity:.8;transform:scale(0.97)}
.CwR .btn.outl{color:#08102b;margin-left:8px;background-color:transparent;border:1px solid #767676}
.CwR .btn.outl:hover{border-color:#482dff}
@media screen and (min-width:768px){.CwR{max-width:450px;border-radius:10px;left:auto;right:30px;bottom:-500px;box-shadow:0 5px 35px rgba(0,0,0,.1);animation:ckdeskUp 2.5s forwards;animation-delay:1s;-webkit-animation:ckdeskUp 2.5s forwards;-webkit-animation-delay:1s}.CwR.acptd{animation:ckdeskDn 2.5s backwards;animation-delay:.3s;-webkit-animation:ckdeskDn 2.5s backwards;-webkit-animation-delay:0.3s}}
@-webkit-keyframes ckUp{100%{bottom:0}}
@keyframes ckUp{100%{bottom:0}}
@-webkit-keyframes ckdeskUp{100%{bottom:30px}}
@keyframes ckdeskUp{100%{bottom:30px}}
@-webkit-keyframes ckDn{0%{bottom:0}100%{bottom:-600px}}
@keyframes ckDn{0%{bottom:0}100%{bottom:-600px}}
@-webkit-keyframes ckdeskDn{0%{bottom:30px}100%{bottom:-600px}}
@keyframes ckdeskDn{0%{bottom:30px}100%{bottom:-600px}}
.drK .CwR{background:rgba(50, 50, 50, 0.8)}
.drK .CwR .CcN svg{fill:#fefefe;stroke:#fefefe}
.drK .CcN h2, .drK .CcN p, .drK .btn.outl{color:#fefefe}
