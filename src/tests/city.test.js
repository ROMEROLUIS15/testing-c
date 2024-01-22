const request = require('supertest')
const app = require('../app')


//este id es creado para correr el test delete, representa el id creado con metodo POST (se declaro el id en le metodo POST)
let id

// TEST GET CITIES
test('GET /cities should return all cities', async () => {
  const res = await request(app).get('/cities') // respuesta
  expect(res.status).toBe(200)    // evaluacion
  expect(res.body).toBeInstanceOf(Array)  // evaluacion
})

// TEST POST CITY
test('POST /cities should add a new city', async () => {
    const newCity = {
        name: 'Caracas',
        country: 'Venezuela',
        isCapital: true,
    }
    const res = await request(app).post('/cities').send(newCity)
    id = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.id).toBeDefined()
    expect(res.body.name).toBe(newCity.name)
    // expect(res.body.country).toBe(newCity.country)
})


// TEST GET CITY BY ID
test('GET /cities/:id should return a city by id', async () => {
    const res = await request(app).get(`/cities/${id}`)
    expect(res.status).toBe(200)
})


// TEST PUT UPDATE CITY
test('PUT /cities/:id should update a city by id', async () => {
    const city = {
        name: "Medellin"
    }
    const res = await request(app).put(`/cities/${id}`).send(city)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(city.name)
})


// TEST DELETE CITY
test('DELETE /cities/:id should delete a city', async () => {
    const res = await request(app).delete(`/cities/${id}`)
    expect(res.status).toBe(204)
})


