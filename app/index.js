const app = require('express')()

app.get('/', (req, res) => {
    res.send("Hello from lightweight container")
})

app.listen(9999, () => console.log(" listing on 9999"))