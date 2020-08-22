import express from 'express'
import cors from "cors"
import compression from 'compression'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(express.static('./public'))
app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz'
	res.set('Content-Encoding', 'gzip')
	next()
})

//TODO : ADD ROUTES AND MAP REACT ROUTE TO CALL DATA FETCH

app.listen(4040, () => {
	console.log(`Server is listening`)
})
