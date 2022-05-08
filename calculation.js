const calculation = (req, res, next) => {
  let a = parseInt(req.query.numberone);
  let b = parseInt(req.query.numbertwo);
  switch (req.query.operation) {
    case "add":
      res.result = a + b;
      break;
    case "sub":
      res.result = a - b;
      break;
    case "mul":
      res.result = a * b;
      break;
    case "div":
      res.result = a / b;
      break;
  }
  next();
};
module.exports = calculation;
