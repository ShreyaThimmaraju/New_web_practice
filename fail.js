prom = new  Promise((resolve , reject) => {
    payment  = "fail"
   if(payment == "success")
   resolve("Payment successful")
       else
   reject("Payment failed")
}
)

prom
   .then((result) => {
       console.log(result);
})
   .catch((result) => {
       console.log(result);
   })
