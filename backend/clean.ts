require('dotenv-safe').config()
import initMongo from './config/mongo'
import fs from 'fs'
import { modelsPath } from './app/models'
import { removeExtensionFromFile } from './app/middleware/utils'
initMongo()

// Loop models path and loads every file as a model except index file
const models = fs.readdirSync(modelsPath).filter(file => {
  return removeExtensionFromFile(file) !== 'index'
})

const deleteModelFromDB = modelName => {
  return new Promise(async (resolve, reject) => {
    const { default: model } = await import(`./app/models/${modelName}`)
    model.deleteMany({}, (err, row) => {
      if (err) {
        reject(err)
      } else {
        resolve(row)
      }
    })
  })
}

const clean = async () => {
  try {
    const promiseArray = models.map(
      async model => await deleteModelFromDB(model)
    )
    await Promise.all(promiseArray)
    console.log('Cleanup complete!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
}

clean()
