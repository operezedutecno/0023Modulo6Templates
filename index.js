const express = require("express")
const app = express()
const port = 3000

//Integrar Handlebars
const hbs = require("hbs")
app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)
hbs.registerPartials(`${__dirname}/views/partials`)

//Middleware para tener disponibles los archivos de Bootstrap en el Front
app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist`))
//Middleware para tener disponibles los archivos de acceso público del proyecto (css, js, img, etc)
app.use(express.static(`${__dirname}/public`))

app.listen(port, () => console.log(`Servidor ejecutando en el puerto ${port}`))

const itemsMenu = [
    { label: 'Inicio', url: "/", active: false},
    { label: 'Galería', url: "/galeria", active: false},
    { label: 'Contacto', url: "/contacto", active: false}
]

const itemsGaleria = [
    "/img/galeria/galeria1.jpg",
    "/img/galeria/galeria2.jpg",
    "/img/galeria/galeria3.jpg",
    "/img/galeria/galeria1.jpg",
    "/img/galeria/galeria2.jpg",
    "/img/galeria/galeria3.jpg",
    "/img/galeria/galeria1.jpg",
    "/img/galeria/galeria2.jpg",
    "/img/galeria/galeria3.jpg",
    "/img/galeria/galeria1.jpg",
    "/img/galeria/galeria2.jpg",
    "/img/galeria/galeria3.jpg",
    "/img/galeria/galeria1.jpg",
    "/img/galeria/galeria2.jpg",
    "/img/galeria/galeria3.jpg",
]

app.get("/", (req, resp) => {
    itemsMenu.map(item => {
        item.active = item.url === '/'
        return item
    })
    const itemsBreadcrumbs = ["Inicio"]
    resp.render("index", { itemsMenu, itemsBreadcrumbs })
})

app.get("/galeria", (req, resp) => {
    itemsMenu.map(item => {
        item.active = item.url === '/galeria'
        return item
    })
    const itemsBreadcrumbs = ["Inicio","Galería"]
    resp.render("galeria", { itemsMenu, itemsBreadcrumbs, itemsGaleria})
})

app.get("/contacto", (req, resp) => {
    itemsMenu.map(item => {
        item.active = item.url === '/contacto'
        return item
    })
    const itemsBreadcrumbs = ["Inicio","Contacto"]
    resp.render("contacto", {itemsMenu, itemsBreadcrumbs})
})