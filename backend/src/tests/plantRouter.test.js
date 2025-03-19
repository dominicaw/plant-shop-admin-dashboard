import request from 'supertest'
import app from '../app/index.js'
import fs from 'fs'
import path from 'path'

jest.mock(
  '../app/middleware/roleValidationMiddleware.js',
  () => () => (req, res, next) => next()
)
jest.mock(
  '../app/middleware/authValidationMiddleware.js',
  () => (req, res, next) => {
    req.user = { email: 'test@user.com', roles: ['owner'] }
    next()
  }
)

const plantsFilePath = path.resolve('src/data/plants.json')

describe('Plant Router', () => {
  let originalPlants

  beforeAll(() => {
    originalPlants = JSON.parse(fs.readFileSync(plantsFilePath, 'utf-8'))
  })

  afterAll(() => {
    fs.writeFileSync(plantsFilePath, JSON.stringify(originalPlants, null, 2))
  })

  test('GET /plant should return all plants', async () => {
    const response = await request(app)
      .get('/plant')
      .set('Authorization', 'Bearer valid-token')
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThan(0)
  })

  test('POST /plant should add a new plant', async () => {
    const newPlant = {
      name: 'Test Plant',
      price: 100,
      quantity: 10,
    }

    const response = await request(app)
      .post('/plant')
      .set('Authorization', 'Bearer valid-token')
      .send(newPlant)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe(newPlant.name)
  })

  test('PUT /plant/:id should update an existing plant', async () => {
    const plantId = originalPlants[0].id
    const updatedData = { price: 200 }

    const response = await request(app)
      .put(`/plant/${plantId}`)
      .set('Authorization', 'Bearer valid-token')
      .send(updatedData)

    expect(response.status).toBe(200)
    expect(response.body.price).toBe(updatedData.price)
  })

  test('PUT /plant/:id should return 404 for non-existent plant', async () => {
    const response = await request(app)
      .put('/plant/non-existent-id')
      .set('Authorization', 'Bearer valid-token')
      .send({ price: 200 })

    expect(response.status).toBe(404)
    expect(response.body.error).toBe('Plant not found')
  })
})
