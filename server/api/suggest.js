export default defineEventHandler(async (event) => {
  const query = getQuery(event).q?.toLowerCase().trim() || ''
  if (!query) return { suggestions: [] }

  const words = query.split(/\s+/)

  const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2016, location: 'Japan', variant: 'White' },
    { make: 'Honda', model: 'Civic', year: 2018, location: 'Japan', variant: 'Red' },
    { make: 'Suzuki', model: 'Alto', year: 2015, location: 'Pakistan', variant: 'Blue' }
  ]

  const matched = cars
    .filter(car =>
      words.every(word =>
        Object.values(car).some(val =>
          val.toString().toLowerCase().includes(word)
        )
      )
    )
    .map(car => {
      const carFields = [
        car.make,
        car.model,
        car.year.toString(),
        car.location,
        car.variant
      ]

      // Build suggestion progressively based on input words
      let suggestion = ''
      let currentIndex = 0

      for (let i = 0; i < carFields.length && currentIndex < words.length; i++) {
        const field = carFields[i].toLowerCase()
        const inputPart = words[currentIndex]

        if (field.startsWith(inputPart)) {
          suggestion += (suggestion ? ' ' : '') + carFields[i]
          currentIndex++
        }
      }

      return { value: suggestion }
    })

  // remove empty or duplicate suggestions
  const unique = matched
    .filter(s => s.value)
    .filter((v, i, a) => a.findIndex(t => t.value === v.value) === i)

  return { suggestions: unique }
})


