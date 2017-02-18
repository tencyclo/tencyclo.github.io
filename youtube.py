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
	name = str(movies.getText()).rstrip() + " trailer"
	words = name.replace(" ","+")
	

	url = "http://www.youtube.com/results?search_query=" +words	
	page = browser.get(url)		
	soup = BeautifulSoup(page.text,"html.parser")
	div = soup.find("div",{"class":"yt-lockup-dismissable yt-uix-tile"})
	h3 = div.find("h3",{"class":"yt-lockup-title "})
	href = div.find("a",{})
	print(href["href"])
	# print("http://youtu.be/"+href['href'].replace("/watch?v=",""))
	# page = browser.get(url)		


# url = "http://www.youtube.com/results?search_query=SI+III+trailer" 
# page = browser.get("http://www.youtube.com/results?search_query=SI+III+trailer")		
# soup = BeautifulSoup(page.text,"html.parser")
# div = soup.find("div",{"class":"yt-lockup-dismissable yt-uix-tile"})
# h3 = div.find("h3",{"class":"yt-lockup-title "})
# href = div.find("a",{})
# print(href['href'])


# page = browser.get("http://www.youtube.com"+str(href['href']))		
# soup = BeautifulSoup(page.text,"html.parser")
# div = soup.find("div",{"class":"action-panel-content"})

# share = div.find("div",{"id":"watch-actions-share-panel"})

# panel = share.find("span",{"class":"share-panel-url-input-container yt-uix-form-input-container yt-uix-form-input-text-container  yt-uix-form-input-non-empty"})
# inp = panel.find("input",{"class":"yt-uix-form-input-text share-panel-url"})

# print(inp)

