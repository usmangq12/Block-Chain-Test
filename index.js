// Write your answer here

const fs = require('fs')
const csv = require('csv-parser')

const transactions = []
const balance = []

const getBalance = async () => {
	return transactions.map(i => {
		const tokens = balance.map(j => j.token);
		if (!tokens.includes(i.token)) balance.push({ token: i.token, amount: 0 })
		balance.map(j => {
			if (j.token == i.token) {
				if (i.transaction_type == 'DEPOSIT') j.amount = j.amount + Number(i.amount)
				if (i.transaction_type == 'WITHDRAW') j.amount = j.amount - Number(i.amount)
			}
			return j
		})
	})
}

const getRate = async (coin) => fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`).then(res => res.json()).catch(error => console.error(error))

const convertMoney = async () => {
	for (const i of balance) {
    const { USD } = await getRate(i.token)
    balance.map((j) => {
      if (j.token == i.token) {
        j.rate = `${USD} Dollar/1 ${j.token}`;
				const total = Math.floor(USD * i.amount);
        j.USD = `${total} Dollar`;
      }
      return j
    })
  }
	return balance
}

fs.createReadStream('./data/transactions.csv')
  .pipe(csv())
  .on('data', data => transactions.push(data))
  .on('end', async () => {
		transactions.sort((a, b) => a.timestamp - b.timestamp)
		await getBalance()
		await convertMoney()
		console.log('Result from calculation balance transaction & multiply with current rate', balance)
	})