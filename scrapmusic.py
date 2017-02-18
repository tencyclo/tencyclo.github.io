from __future__ import print_function
import operator
import mechanicalsoup
from bs4 import BeautifulSoup
from urllib import request
# import urllib2
import os

browser = mechanicalsoup.Browser(soup_config={"features":"html.parser"})
page = browser.get("http://www.spicinemas.in/chennai/now-showing")
soup = BeautifulSoup(page.text,"html.parser")

nowshowing = soup.find("section",{"class":"movie__listing now-showing"})	

movie = nowshowing.find_all("dt")
for movies in movie:
	print(movies.getText())

img = nowshowing.find_all("img")
count = 0
for image in img:
	count += 1
	filename = str(count)+".jpg"
	request.urlretrieve(str(image['src']), os.path.join("images/movies",filename))


div = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Tencyclopedia</title>
    
    <!-- Favicon -->

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="vendors/bootstrap/css/bootstrap-theme.min.css">

    <!-- Fontawesome -->
    <link rel="stylesheet" type="text/css" href="vendors/font-awesome/css/font-awesome.min.css">

    <!-- Animate -->
    <link rel="stylesheet" type="text/css" href="vendors/animate.css">

    <!-- Swiper -->
    <link rel="stylesheet" type="text/css" href="vendors/swiper/css/swiper.min.css">

    <!-- Magnific-popup -->
    <link rel="stylesheet" type="text/css" href="vendors/magnific-popup/magnific-popup.css">

    <!-- Base MasterSlider style sheet -->
    <link rel="stylesheet" href="vendors/masterslider/style/masterslider.css" />
    
    <!-- Master Slider Skin -->
    <link href="vendors/masterslider/skins/default/style.css" rel='stylesheet' type='text/css'>
    
    <link rel="stylesheet" href="vendors/mediaelement/mediaelementplayer.min.css" />    
    <!-- Stylesheet -->
    <link rel="stylesheet" type="text/css" href="style.css">
<style type="text/css">
    
 ::-webkit-scrollbar {
           width:5px;

        }

     ::-webkit-scrollbar:active {
           color: #303030;

        }
      
        ::-webkit-scrollbar-track {
           
/*#333333*/
            background: white;
            /*-webkit-box-shadow: inset 3px 1px 2px rgba(0,0,0,0.5);*/
        }
        ::-webkit-scrollbar-thumb {
            /*#101010*/
            background: silver  ;
            /*border-radius: 12px;  */
            /*-webkit-box-shadow: inset 3px 1px 2px rgba(0,0,0,0.5);*/
            
            
    
        
        }
</style>

</head>

<body class="music-content">

    <div class="tana-loader">
        <div class="loader-content">
            <div class="loader-circle"></div>
            <div class="loader-line-mask">
                <div class="loader-line"></div>
            </div>
        </div>
    </div>
    <div class="wrapper">
        
        <header id="header" class="header-blog header-music">
            <div class="panel-header">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            
                            <div class="header-wrapper">

                                <!-- image logo -->
                                <div class="site-branding">
                                    <a href="index.html" rel="home" class="custom-logo-link">

                                        <img src="logo-reboot/logo-repositon.svg" alt="logo image" data-width="250px">
                                    <!-- <font color="black" size="2vw">Tagline</font> -->

                                        <!-- <img src="logo-reboot/logo-text.svg" alt="logo image" data-width="202px"> -->
                                    </a>
                                </div>

                                <!-- <nav class="main-nav"> -->
                                    <!-- <ul>
                                        <li class="menu-item-has-children current-menu-item">
                                            <a href="news2.html">Gadgets</a>
                                            <ul>
                                                <li class="menu-item-has-children">
                                                    <a href="news2.html">Mobile</a>
                                                    <ul>
                                                        <li><a href="#">Under 10k</a></li>
                                                        <li><a href="#">Under 15k</a></li>
                                                        <li><a href="#">Under 20k</a></li>
                                                        <li><a href="#">Above 25k</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="news2.html">Laptops</a>
                                                    <ul>
                                                        <li><a href="#">Under 30k</a></li>
                                                        <li><a href="#">Under 40k</a></li>
                                                        <li><a href="#">Under 45k</a></li>
                                                        <li><a href="#">Above 50k</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children current-menu-item">
                                        <a href="entertainment.html">Automobile</a>
                                            <ul>
                                                <li class="menu-item-has-children">
                                                    <a href="news2.html">Cars</a>
                                                    <ul>
                                                        <li><a href="#">Under 5lakh</a></li>
                                                        <li><a href="#">Under 6.5lakh</a></li>
                                                        <li><a href="#">Under 12lak</a></li>
                                                        <li><a href="#">Above 12lakh</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="news2.html">Bikes</a>
                                                    <ul>
                                                        <li><a href="#">Under 50k</a></li>
                                                        <li><a href="#">Under 80k</a></li>
                                                        <li><a href="#">Under 1lakh</a></li>
                                                        <li><a href="#">Above 1lakh</a></li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </li>
                                        <li  class="menu-item-has-children current-menu-item">
                                        <a href="movie.html">Entertainment</a>

                                            <ul>
                                                <li><a href="#">Movies</a></li>
                                                
                                                <li><a href="single-#">Music</a></li>
                                            </ul>

                                        </li>
                                        <li><a href="blog.html">Games</a></li>
                                    </ul> -->
                                    <!-- <ul>
                                        <li>
                                        <a>tagline</a>
                                        </li>
                                    </ul>
                                </nav> -->
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <a href="javascript:;" id="burger_menu" class="burger-menu">
                <img src="images/burger-white.png" alt="menu icon">
            </a>

            <div class="push-menu pm-entertainment">
                <div class="pm-overlay"></div>
                <div class="pm-container">
                    <div class="pm-viewport">
                        <div class="pm-wrap">
                        
                            <a href="javascript:;" class="close-menu"></a>
                            
                            <form class="search-form">
                                <input type="text" name="1" placeholder="Search">
                                <button type="submit"><img src="images/search-en.png" alt="search icon"></button>
                            </form>

                            <div class="author-info">
                                <img src="images/pages/author.jpg" alt="search icon">
                                <div class="auth-name">
                                    <h4><a href="javascript:;">Patrick Pitt</a></h4>
                                    <p><a href="javascript:;">Sign out</a></p>
                                </div>
                            </div>

                            <h4 class="pm-en-title">Menu</h4>

                            <nav class="big-menu">
                                <ul>
                                    <li>
                                        <a href="#"><i data-bg-image="images/pm-en-ico1.png"></i>News</a>
                                    </li>
                                    <li>
                                        <a href="entertainment.html"><i data-bg-image="images/pm-en-ico2.png"></i>Movies</a>
                                    </li>
                                    <li>
                                        <a href="blog.html"><i data-bg-image="images/pm-en-ico3.png"></i>TV Series</a>
                                    </li>
                                    <li>
                                        <a href="#"><i data-bg-image="images/pm-en-ico4.png"></i>Events</a>
                                    </li>
                                    <li>
                                        <a href="blog.html"><i data-bg-image="images/pm-en-ico5.png"></i>Trailers</a>
                                    </li>
                                    <li>
                                        <a href="entertainment.html"><i data-bg-image="images/pm-en-ico6.png"></i>Music</a>
                                    </li>
                                </ul>
                            </nav>

                            <h4 class="pm-en-title">Featured News</h4>

                            <div class="pm-en-recent">
                                <a href="blog.html" class="er-item">
                                    <img src="images/pages/pm-en1.png" alt="recent news">
                                </a>
                                <a href="index.html" class="er-item">
                                    <img src="images/pages/pm-en2.png" alt="recent news">
                                </a>
                            </div>

                            <h4 class="pm-en-title">Connect</h4>

                            <div class="pm-socials">
                                <a href="javascript:;"><i class="fa fa-facebook"></i></a>
                                <a href="javascript:;"><i class="fa fa-twitter"></i></a>
                                <a href="javascript:;"><i class="fa fa-youtube"></i></a>
                                <a href="javascript:;"><i class="fa fa-google-plus"></i></a>
                            </div>

                            <div class="pm-go-home">
                                <a href="entertainment.html">
                                    <i data-bg-image="images/pm-en-ico-home.png"></i>
                                    Go to home
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

<div class="content-area pvt0">

	<div class="section-full fs-slide ms-slide">

		<div class="swiper-container">
	    	<div class="swiper-wrapper">
	    			    		<div class="swiper-slide">
					<div class="fs-item" data-bg-color="#fff">
						<div class="fs-entry-bg" data-bg-image="images/music/slider-1.jpg">
							<a href="javascript:;" class="play-button">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
									<g>
										<path d="M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M16,30.9C7.8,30.9,1.1,24.2,1.1,16C1.1,7.8,7.8,1.1,16,1.1c8.2,0,14.9,6.7,14.9,14.9C30.9,24.2,24.2,30.9,16,30.9z"/>
										<path d="M22.2,15.9l-8.7-5.9c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.2,0.2-0.2,0.3v11.8c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2-0.1l8.7-5.9c0.1-0.1,0.1-0.1,0.1-0.2C22.4,16.1,22.3,16,22.2,15.9z"/>
									</g>
								</svg>
							</a>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-md-6">
									<div class="fs-entry-item">
										<h4 class="fs-title fs-animate-text">New Releases</h4>
										<h3 class="fs-animate-text"><span>S7 Edge:</span> Samsung has released a new version of the Galaxy S7 EDGE – a 128GB model in the colour scheme “black pearl”</h3>
										<a href="single.html" class="read-more fs-animate-text">read more</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
					    		<div class="swiper-slide">
					<div class="fs-item" data-bg-color="#fff">
						<div class="fs-entry-bg" data-bg-image="images/music/slider-2.jpg">
							<a href="javascript:;" class="play-button">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
									<g>
										<path d="M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M16,30.9C7.8,30.9,1.1,24.2,1.1,16C1.1,7.8,7.8,1.1,16,1.1c8.2,0,14.9,6.7,14.9,14.9C30.9,24.2,24.2,30.9,16,30.9z"/>
										<path d="M22.2,15.9l-8.7-5.9c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.2,0.2-0.2,0.3v11.8c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2-0.1l8.7-5.9c0.1-0.1,0.1-0.1,0.1-0.2C22.4,16.1,22.3,16,22.2,15.9z"/>
									</g>
								</svg>
							</a>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-md-6">
									<div class="fs-entry-item">
										<h4 class="fs-title fs-animate-text">New Releases</h4>
										<h3 class="fs-animate-text"><span>S7 Edge:</span> Samsung has released a new version of the Galaxy S7 EDGE – a 128GB model in the colour scheme “black pearl”</h3>
										<a href="single.html" class="read-more fs-animate-text">read more</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
					    		<div class="swiper-slide">
					<div class="fs-item" data-bg-color="#fff">
						<div class="fs-entry-bg" data-bg-image="images/music/slider-3.jpg">
							<a href="javascript:;" class="play-button">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
									<g>
										<path d="M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M16,30.9C7.8,30.9,1.1,24.2,1.1,16C1.1,7.8,7.8,1.1,16,1.1c8.2,0,14.9,6.7,14.9,14.9C30.9,24.2,24.2,30.9,16,30.9z"/>
										<path d="M22.2,15.9l-8.7-5.9c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.2,0.2-0.2,0.3v11.8c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2-0.1l8.7-5.9c0.1-0.1,0.1-0.1,0.1-0.2C22.4,16.1,22.3,16,22.2,15.9z"/>
									</g>
								</svg>
							</a>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-md-6">
									<div class="fs-entry-item">
										<h4 class="fs-title fs-animate-text">New Releases</h4>
										<h3 class="fs-animate-text"><span>S7 Edge:</span> Samsung has released a new version of the Galaxy S7 EDGE – a 128GB model in the colour scheme “black pearl”</h3>
										<a href="single.html" class="read-more fs-animate-text">read more</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
							</div>
		</div>
		
		<div class="fs-arrows">
			<a href="single.html" class="fs-arrow-prev"><i class="fa fa-angle-left"></i> Prev</a>
			<a href="single.html" class="fs-arrow-next">Next <i class="fa fa-angle-right"></i></a>
		</div>
	</div>

	<!-- New Videos -->
	<div class="section-full pv5 bg-cover bg-center-top" data-bg-image="images/music/box-bg.jpg">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">

					<div class="simple-tab-space ms-style text-light">
						<div class="tab-title clearfix">
							<a href="javascript:;" class="active">New Videos</a>
							<a href="javascript:;">New Singles</a> 
							<a href="javascript:;">Explore</a>
						</div>

<div class="tab-panel">

"""

moviediv = """
"""
browser = mechanicalsoup.Browser(soup_config={"features":"html.parser"})
count = 0
for movies in movie:
    name = str(movies.getText()).rstrip() + " trailer"
    words = name.replace(" ","+")
    

    url = "http://www.youtube.com/results?search_query=" +words 
    page = browser.get(str(url))     
    soup = BeautifulSoup(page.text)
    divs = soup.find("div",{"class":"yt-lockup-dismissable yt-uix-tile"})
    h3 = divs.find("h3",{"class":"yt-lockup-title "})
    href = divs.find("a",{})
    url = href['href']
    count += 1

    if count ==1:
        moviediv="""
        
         <div class="tab-content active">
         <div class="row row-has-5-columns">
    <div class="col-xs-6 col-sm-4 col-md-15">
    <div class="post boxoffice-style ms-style text-light">
    <div class="image" data-src=
    """
    elif count%10 ==1:
        moviediv="""
        
         <div class="tab-content ">
         <div class="row row-has-5-columns">
    <div class="col-xs-6 col-sm-4 col-md-15">
    <div class="post boxoffice-style ms-style text-light">
    <div class="image" data-src=
    """
    elif count%10 ==6:
         moviediv="""
         
        <div class="row row-has-5-columns">
    <div class="col-xs-6 col-sm-4 col-md-15">
    <div class="post boxoffice-style ms-style text-light">
    <div class="image" data-src=
    """
    
    else: 
        moviediv="""
	<div class="col-xs-6 col-sm-4 col-md-15">
	<div class="post boxoffice-style ms-style text-light">
	<div class="image" data-src=
    """
    div = div + moviediv
	
    div += "images/movies/"+str(count)+".jpg'"+"""
>
												<a href="single.html">
													<img src="images/1x1.png" alt="Image"/>
												</a>
												<span class="label">Feb  </span>
												<a href='
                                                """

   
    
    div += 'http://www.youtube.com'+url+"'"
    div += """

     class="play-button player-popup size-small">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                                                        <g>
                                                            <path d="M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M16,30.9C7.8,30.9,1.1,24.2,1.1,16C1.1,7.8,7.8,1.1,16,1.1c8.2,0,14.9,6.7,14.9,14.9C30.9,24.2,24.2,30.9,16,30.9z"></path>
                                                            <path d="M22.2,15.9l-8.7-5.9c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0.1-0.2,0.2-0.2,0.3v11.8c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2-0.1l8.7-5.9c0.1-0.1,0.1-0.1,0.1-0.2C22.4,16.1,22.3,16,22.2,15.9z"></path>
                                                        </g>
                                                    </svg>
                                                </a>
											</div>

											<div class="ms-meta">
	                                       <h4><a href="single.html">"""

    div += movies.getText()
    div +="""
                                           </a></h4>
												<h5><a href="single.html">Feb 2017</a></h5>
												
											</div>
										</div>
                                </div>  
    """
    if count%10 ==0 :
        div += """ 
        </div></div>
        """
        
    elif count%5==0:
        div += """
        </div>
        """

    


div += """                            

</div>

</div>
</div>
  </div>
</div></div></div></div>
</div>


    <div class="clearfix"></div>

    <footer id="footer" class="footer-entertainment">
        
        <div class="container">


            <div class="row footer-row mvt0 mv6">
                <div class="col-sm-6">
                    &nbsp;&nbsp;&nbsp;&nbsp;<img src="logo-reboot/footer-logo.svg" alt="Tencyclopedia" data-width="55px"/>
                    <div class="tt-el-info inline-style">
                           &nbsp;&nbsp;     <h4>Follow Us</h4>
                                <!-- <p>Follow Us</p> -->
                            </div>
                </div>
                <div class="col-sm-6 text-right">
                    <div class="widget subscribe">
                        <label for="newletter">NEWSLETTER</label>
                        <div class="subscribe-form">
                            <form>
                                <input id="newletter" type="text" placeholder="ENTER YOUR EMAIL">
                                <button type="submit"><i class="fa fa-envelope-o"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div class="sub-footer">
                <div class="container">

                    <div class="row footer-row mv1">
                        <div class="col-sm-6">
                           <div class="widget">
                                <div class="social-links">
                                    <a href="javascript:;"><i class="fa fa-facebook"></i></a>
                                    <a href="javascript:;"><i class="fa fa-twitter"></i></a>
                                    <a href="javascript:;"><i class="fa fa-youtube"></i></a>
                                    <a href="javascript:;"><i class="fa fa-instagram"></i></a>
                                    <a href="javascript:;"><i class="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                            
                        </div>
                      <div class="col-sm-6 text-right">
                            <div class="tt-el-info inline-style">
                                <h4>Contact Us</h4>
                                <p>support@tencyclopedia.com</p>
                            </div>
                            <!-- <div class="tt-el-info inline-style">
                                <h4>29</h4>
                                <p>APR, Wednesday</p>
                            </div> -->
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="border-line"></div>
                            <ul class="list-inline pull-left">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Mobiles</a></li>
                                <li><a href="#">Laptops</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Apps</a></li>
                                <!-- <li><a href="#">Terms of Sale</a></li> -->
                            </ul>
                            <div class="copyright-text pull-right"><i class="fa fa-chevron-up scroll-to-top"></i> Copyight &copy; 2017 Tencyclopedia</div>
                        </div>
                    </div>
                    
                </div>
            </div></div>
    </footer>    
    </div>

    <!-- end .wrapper -->


    <!-- Include jQuery and Scripts -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="vendors/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="vendors/jquery.waypoints.min.js"></script>
    <script type="text/javascript" src="vendors/isotope.pkgd.min.js"></script>
    <script type="text/javascript" src="vendors/typed.min.js"></script>
    <script type="text/javascript" src="vendors/theia-sticky-sidebar.js"></script>
    <script type="text/javascript" src="vendors/circles.min.js"></script>
    <script type="text/javascript" src="vendors/jquery.stellar.min.js"></script>
    <script type="text/javascript" src="vendors/jquery.parallax.columns.js"></script>
    <script type="text/javascript" src="vendors/svg-morpheus.js"></script>

    <!-- Swiper -->
    <script type="text/javascript" src="vendors/swiper/js/swiper.min.js"></script>

    <!-- Magnific-popup -->
    <script type="text/javascript" src="vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
    
    <!-- Master Slider -->
    <script src="vendors/masterslider/jquery.easing.min.js"></script>
    <script src="vendors/masterslider/masterslider.min.js"></script>
    
    <script src="vendors/mediaelement/mediaelement-and-player.min.js"></script>
    <script src="vendors/jquery-ui-slider.min.js"></script>
        
    <script type="text/javascript" src="js/scripts.js"></script>


</body>
</html>
"""




f = open("top-10-movies.html",'w')


f.write(div)
f.close()




	# print(os.path.join("C:\tencyclopedia - 2017\repo\tencyclo.github.io",os.path.basename(image['src'])))	
# skill = categories.find_all("label",{"class":"selectit"})