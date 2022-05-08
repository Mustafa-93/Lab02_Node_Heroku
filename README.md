# ***Lab02_Node_Heroku***

## Deployed application:

## Name of the endpoint (About Endpoint)
  

## Short description
We have mainly four operations in the cloud calculator web app to handle. We have two javascript files to handle this scenario. In the index.js file, we imported express.js to create an express app that will run on port 3000 of our machine. We can access this web app by running localhost:3000 or http://127.0.0.1:3000 using any browser on my machine. We also created a middleware named calculation.js and imported it into our index.js. And also called the middleware module by app.use(). So any route called on this web app will go through this middleware. In the calculation.js file, we extracted the operation type and two numbers. As the numbers and operation type are passed in the query string, we easily extract them using req.query. After extraction, we used a switch statement to handle each operation and stored the result in the response object, which can be accessed by res.result. So finally, if we hit /calc route from our web-browser with the correct operation type and two numbers, it will return the result as a response. Then I deployed my project on GitHub and Heroku. I used Heroku CLI to host my project.

## Screenshots
