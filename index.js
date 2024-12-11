import express from "express"
import userRouter from './routes/user.js'
const app = express()
const PORT = 4000

app.use(express.json())
app.use("/user", userRouter)

function middleware(req, res, next) {
    req.accepted = true
    res.status(403).send("Good")
    next()
}

app.get('/', middleware, (req, res) => {
     res.send("Hello NodeJS")
})

app.get('/:id', (req, res) => {
     res.send('Hello' + req.params.id)
})

app.listen(PORT, () => {
    console.log('app listening at PORT ', PORT)
})
