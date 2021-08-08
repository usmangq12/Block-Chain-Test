## Question 1 - Programming
_We're looking at your programming ability. It must not only work, it should be maintainable._

Let us assume you are a crypto investor. You have made transactions over a period of time which is logged in a CSV file at the data directory. Write a command line program that returns the latest portfolio value per token in USD

The program should be ran like this

```
npm run start
```

On running, it should return the latest portfolio value per token in USD

The CSV file has the following columns
 - timestamp: Integer number of seconds since the Epoch
 - transaction_type: Either a DEPOSIT or a WITHDRAWAL
 - token: The token symbol
 - amount: The amount transacted

Portfolio means the balance of the token where you need to add deposits and subtract withdrawals. You may obtain the exchange rates from [cryptocompare](https://min-api.cryptocompare.com/documentation) where the API is free. You should write it in Node.js as our main stack is in Javascript/Typescript and we need to assess your proficiency.


## Submission

Please take no more than 2 hours to finish. We do not track time, hence you can start and end at your own time. Your answers should comprise of the following

  - Source code that you used for deriving the results
  - README that explains various design decisions that you took.

Commit your answers in a private Github repository(it's free) and add Zan(liangzan), Linh(phamtamlinh), Kyle(kyled7), Thanh(thanhnpp), Viswanath(viswanathkgp12) as collaborators. Inform us that it is done at zan@propine.com, linh.pham@propine.com, kyle.dinh@propine.com, thanh.nguyen@propine.com, viswanath.kapavarapu@propine.com.
