import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const plantsFilePath = path.resolve('src/data/plants.json')
const plants = JSON.parse(fs.readFileSync(plantsFilePath, 'utf-8'))

export function getPlants(_, res) {
  return res.json(plants)
}

export function addPlant(req, res) {
  const newPlant = { id: uuidv4(), ...req.body }
  plants.push(newPlant)
  fs.writeFileSync(plantsFilePath, JSON.stringify(plants, null, 2))
  return res.status(201).json(newPlant)
}

export function updatePlant(req, res) {
  const plantIndex = plants.findIndex((plant) => plant.id === req.params.id)

  if (plantIndex === -1) {
    return res.status(404).json({ error: 'Plant not found' })
  }

  plants[plantIndex] = { ...plants[plantIndex], ...req.body }
  fs.writeFileSync(plantsFilePath, JSON.stringify(plants, null, 2))
  return res.json(plants[plantIndex])
}
