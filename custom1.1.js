
//<![CDATA[
var homePage = "https://www.learn4info.com/",
numPosts = 5;
function recentPostshas(a){if(document.getElementById("recent-postshas")){var e=a.feed.entry,title,link,content="",ct=document.getElementById("recent-postshas");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<li class="recent-postshas"><a href="'+link+'" title="'+title+'" target="_blank" rel="nofollow">'+title+'</a></li>'}ct.innerHTML=content}}var rcp=document.createElement('script');rcp.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results='+numPosts+'&callback=recentPostshas';document.getElementsByTagName('head')[0].appendChild(rcp);
//]]>

var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
  timeOut = timeOut - 20;
  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 20);
}

function prevSlide() {
  timeOut = 2000;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;
  
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex == 0) {
    slideIndex = 4
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
        }
  
function showSlides() {
  timeOut = 2000;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
