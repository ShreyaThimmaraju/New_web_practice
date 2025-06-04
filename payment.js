p = new Promise((resolve, reject) => {
    payment = "success"
    if(payment === "success")
        resolve("Payment successful")
    else
    reject("Payment failed")
}                                                                                                                                                                                                                                                                             
)

p
.then()
.catch()