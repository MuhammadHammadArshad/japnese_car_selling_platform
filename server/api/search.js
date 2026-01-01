import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event)
  const search = (q || '').toLowerCase().trim()

  const file = await readFile(join(process.cwd(), 'data/cars.json'), 'utf8')
  const cars = JSON.parse(file)

  if (!search) return { data: [] }

  const terms = search.split(/\s+/) // split by space

  const filtered = cars.filter(car =>
    terms.every(term =>
      Object.values(car).some(val =>
        val.toString().toLowerCase().includes(term)
      )
    )
  )

  return {
    data: filtered,
    message: filtered.length ? 'Cars found' : 'No cars found'
  }
})
