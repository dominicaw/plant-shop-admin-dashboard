import fs from 'fs'
import path from 'path'

const plantsFilePath = path.resolve('src/data/plants.json')

export const getPlants = (_, res) => {
  const plants = JSON.parse(fs.readFileSync(plantsFilePath, 'utf-8'))
  return res.json(plants)
}
