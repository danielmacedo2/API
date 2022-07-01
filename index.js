const app = require('express')();

app.listen(3000, () => console.log('Server running in 3000 port'))

app.get('/skills', (req, res) => {
    res.send('JavaScript and NodeJS working')
})