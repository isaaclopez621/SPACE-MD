require('dotenv').config();

module.exports = {
  //Enter your session id here (CYPHER-X:~UEsDBBQAAAgIADa5N1soB1LATwQAAHEHAAAKAAAAY3JlZHMuanNvbpVVa6+iSBD9L*1VM*IQAZObLC8FFUUFFTfzoS800ooNNg2KE**7Bu9jZpPd2bt8aopK1alzTjU*AMlxiaaoAcMfoKC4hgy1R9YUCAyBXiUJoqALYsggGIJSQxlUI8PB6dFPs5rd1zS7nWoX36yptJkt6vEULXe0FsoX8OiConrNcPSbgnqtLcs+N1ZDON3iJjQtVzLNuF45ipJcgjDObtIuoqF4D1*Ao60IMcXkYBUpOiMKsylqPIjp1+BzJpztk4XpqveYmzZIVtcJGQiOnFJLmsdetpWS2g7I6Kx8DX7HVidWEI4W7HS27V7lBJ2C688m+sGd34ScHxkTTR0XN994h1*iA0GxEyPCMGu+zLvjQaE5l7NOo6R3nr9QYi8uSqeWo3uPhFXQIzVzjTXigy8Cnx+XthGyXpnUmzDPTH7Vmdr6yZ17F8tVCj3fLXYLaBdM*Btwj3545fR*eL94xwGtK78w09D1RrCm*uDuCd75cpcuVaSp+yxthBVzNuHX4G8Or7eA0+hqbOLjYH5*DW1DbjJknC1p4a*YbreTRAGJtvULfMgq+juUGl5wC0uQLpDg6VUor51OX91kVX7ZSZ1xqjScfkv99Lbmeh7S90HR8MFYLWR1hPOJNthc*BW*vxErUYskSk56XmLzqL08JzqhxonBkH90AUUHXDIKGc5JGxNEtQtgXK9RRBF70gvucJtgabZMchRk4*oooWVC3YlijVaZorCNMHgVNuu1S7PrC+iCguYRKksU27hkOW1cVJbwgEow*PN7FxB0Y2*Cte1EvgsSTEsWkKrIchh*qPrxEUZRXhG2bkhktAdEwZD7GUaMYXIoWx4rAmmU4hoZKWQlGCYwK9HnhIiiGAwZrdDn1hp53BJvLSd9XxTHoAvOT0FwDIZAkAayMOAGqsxxQ176o*x2bcvCovhGEANdkD3TBqIqqrKqqFxf7ffbxDb++ATY1osRgzgrwRAYbuWnsmZaM291d8PxWLMOmnHQwM+BPpzxxrx4pWR+ctPptvYXU1GzfbmHREGeRrJwrXYnEpjEoBM7GIUv*1AEDIGdrc70MD+s0MFP1o2dyotTgTaBFo4nMvJPLJviukqZNbJNdWPJdrYzrn5Yycc+GTniPHTgJYykkjcEjkidfseL9lproy6IUY0j9GszR7MTs9*X3XXY0DzbXbeDfX+Rp0lVhEjx9epaUQ*KzAumPCqVqqMfFzuF06G2PatiHY+lm3OaK8VJu911EvXIDI3wu2efO5O931X46aZWqvY1wei5+gS2Av63dG*AW4dxj+4vNd4vk3*7OcTKVLrvTWedUe6O2VXnOj2RqVVDFmo5y6QJr0nXS7Pi9S14PL53QZFBluT0DIYAkpjmOAZdQPOqtaxDkvw3zQzdcczl2+QZLJn2cw18fEYlg+cCDHlZUgYDRVXEtyyP5oUNy7R1zsELJqfW041WFGsG2cdWAa19DL4DHn8BUEsBAhQDFAAACAgANrk3WygHUsBPBAAAcQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA)
  SESSION_ID: process.env.SESSION_ID || '',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
