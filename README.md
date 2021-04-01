# Amazon Buyer Bot
Are you tracking a product on Amazon that is currently not availble? Stop refresh the page manually, this bot can help you.

## What this bot does?
The bot will refresh a given Amazon page, check in the DOM if the product is available, based on the css on the page. 
Print the status of the product availability on the console

## How to install
- Clone this repository on your PC.
- Install Nodejs.
- Go on the directory of this project and install the dependencies with the command ```npm install```
- Link the cli app ```npm install -g .```

## How to lunch
From you shell type ```amz-check-availability --url https://your-amazon-product-to-track```

### CLI Options
The followind are the options available for the bot.

Option  | Description
------------- | -------------
--url | The url of the amazon page to truck
--debug | Enable debug logs and open the browser on window
--page-timeout | The time to wait for the product page to load before to go in error
--refresh-interval | The refresh interval to check if the product is now available

### Next Steps
- [] Add Telegram Notification Integration