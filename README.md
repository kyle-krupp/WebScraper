# Web Scraper w MongoDB
This application uses the Cheerio NPM package to scrape the New York Times, and save to a Mongo database. Users get a preview of the article headline, along with the ability to save the headline and attach notes. 

The save headlines are added to a page where users can see what they have saved, and add or delete notes specific to their saved articles. 

All HTML is rendered using Handlebars. 

Live demo: [Mongo Scraper](https://floating-brushlands-72782.herokuapp.com/)



### Node Dependencies
- [ ] express
- [ ] express-handlebars
- [ ] mongoose
- [ ] body-parser
- [ ] cheerio
- [ ] request


## Cloning this repo
- [ ] Clone the repo to your local machine
- [ ] Run `npm install`
- [ ] Change the `MOGO_URI` variable to a Mongo DB of your own, either locally or with mLab
- [ ] Run `npm start`
