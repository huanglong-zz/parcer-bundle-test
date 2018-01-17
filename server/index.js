const { resolve } = require('path')
const Koa = require('koa')
const views = require('koa-views')
const serve = require('koa-static')
const app = new Koa()

app.use(serve(resolve(__dirname, '../public')))
app.use(views(resolve(__dirname, './views'), {
  extension: 'pug',
  options: {
    online: process.env.NODE_ENV === 'production'
  }
}))

app.use(async function (ctx) {
  if (ctx.path === '/detail/1') {
    await ctx.render('detail', {})
  }
  else {
    await ctx.render('index', {})
  }
})

app.listen(3000)

console.log('http://127.0.0.1:3000 server started')
