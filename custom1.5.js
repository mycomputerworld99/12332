
//<![CDATA[
var homePage = "https://www.learn4info.com/",
numPosts = 5;
function recentPostshas(a){if(document.getElementById("recent-postshas")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-postshas");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-postshas"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPostshas';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>
