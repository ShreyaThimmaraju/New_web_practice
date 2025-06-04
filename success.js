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
            return "Message from 1st then()"
  })


        .then((result) => {
            console.log(result);
            return "Message from 2nd then()"
})
        .catch((result) => {
            console.log(result);
            return "Message from 1st catch()"

})

        .catch((result) => {
            console.log(result);
            return "Message from 2nd catch()"

})
