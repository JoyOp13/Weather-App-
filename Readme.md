# This is Readme file

step1 : Go on https://share.google/RpalG3Meggmo0ZzrL and then create your api key & copy it By Creating your Account.

step2 : Then copy that key & go In API Explorer Section, Then Paste Your API Key and select One city And Change Aqi Value To yes.

step3 : Then Click On Show Respones Button And Copy Call Section Link And Import That Into Your Project Inside getData Function on This Line
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=(dc86f2b39a004c1eb0463151250254)&q=${cityname1}&aqi=yes
        `);

step4 : Run the Project On live Server Extension