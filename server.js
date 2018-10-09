///importar  express
const express = require('express')
const ejs = require ('ejs')

const bodyParser =require('body-parser')


///////2
const app = express()
//////indicar el puerto
const PORT = 3000
// importar knex
const knex = require('knex')
const { Model } = require('objection')
const devDbConfig = require('./knexfile.js')

const passport = require('passport')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
//
//
const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy.js')
const { configDeserializeUser, configSerializeUser } = require('./src/helpers/passport-local--sessionActions.js')
//
//
const pageRouter = require ('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')
const authRouter = require('./src/routes/authRouter.js')


app.use(cookieParser() )
app.use(cookieSession({
  name: 'cookiemonster',
  secret: 'superdupersupersecret',
  httpOnly: true,
  signed: false
}))



app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser())
passport.deserializeUser(configDeserializeUser())







// configuracion data access
const appDb = knex(devDbConfig.development )
Model.knex(appDb)
app.locals.db = appDb
/////tarea tres

app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )

app.use(express.static( `${__dirname}/public`) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

//tareados
app.use('/', pageRouter)
app.use('/api', apiRouter)
app.use('/auth', authRouter)

app.use((req, res)=>{
  res.render('reactApp.ejs')
})

// app.use((req, res)=>{
//   res.send('<h3> 404 - big error - page no exist</h3>')
// })

 ///pso 3
 app.listen(PORT,()=>{
   console.log(`App listening on localhost:${PORT}`);
 })
