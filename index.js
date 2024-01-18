const price = document.querySelectorAll(".coin-list .coin article h3");
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogcoin&vs_currencies=usd")
.then(
    data => data.json()
)
.then(
    data => {
        const {bitcoin, dogcoin, ethereum} = data;
        const x = [bitcoin, dogcoin, ethereum];
        price.forEach(
            (coin, index) => {
                coin.innerHTML += `${x[index].usd}`
                console.log(x[index].usd)
            }
        )
    }
)
.catch(
    error => console.log(error)
)