# ***Lab02_Node_Heroku***

## Deployed application:
https://mustafa93-lab02.herokuapp.com/calc?operation=add&numberone=4&numbertwo=2


## Name of the endpoint (About Endpoint)

### Addition

https://mustafa93-lab02.herokuapp.com/calc?operation=add&numberone=4&numbertwo=2

### Substraction

https://mustafa93-lab02.herokuapp.com/calc?operation=sub&numberone=4&numbertwo=2

### Multiplication

https://mustafa93-lab02.herokuapp.com/calc?operation=mul&numberone=4&numbertwo=2

### Division

https://mustafa93-lab02.herokuapp.com/calc?operation=div&numberone=8&numbertwo=2
  

## Short description
We have mainly four operations in the cloud calculator web app to handle. We have two javascript files to handle this scenario. In the index.js file, we imported express.js to create an express app that will run on port 3000 of our machine. We can access this web app by running localhost:3000 or http://127.0.0.1:3000 using any browser on my machine. We also created a middleware named calculation.js and imported it into our index.js. And also called the middleware module by app.use(). So any route called on this web app will go through this middleware. In the calculation.js file, we extracted the operation type and two numbers. As the numbers and operation type are passed in the query string, we easily extract them using req.query. After extraction, we used a switch statement to handle each operation and stored the result in the response object, which can be accessed by res.result. So finally, if we hit /calc route from our web-browser with the correct operation type and two numbers, it will return the result as a response. Then I deployed my project on GitHub and Heroku. I used Heroku CLI to host my project.

## Screenshots
 **Add Operation**
<p>
    <img src="https://i.ibb.co/pZ5T0cv/Add.png"/>
</p>

 **Sub Operation**
<p>
    <img src="https://i.ibb.co/KFQm7rb/Sub.png"/>
</p>

**Mul Operation**
<p>
    <img src="https://i.ibb.co/Fm3XVrd/Mul.png"/>
</p>

**Div Operation**
<p>
    <img src="https://i.ibb.co/sgrTryt/Screenshot-2022-05-09-at-2-00-48-AM.png"/>
</p>