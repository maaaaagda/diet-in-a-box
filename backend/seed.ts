require('dotenv-safe').config()
const { Seeder } = require('mongo-seeding')
import path from 'path'

const config = {
  database:
    process.env.NODE_ENV === 'test'
      ? process.env.MONGO_TEST_URI
      : process.env.MONGO_URI,
  inputPath: path.resolve(__dirname, './data'),
  dropDatabase: false
}
const seeder = new Seeder(config)
const collections = seeder.readCollectionsFromPath(path.resolve('./data'))

const main = async () => {
  try {
    await seeder.import(collections)
    console.log('Seed complete!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
}

main()
