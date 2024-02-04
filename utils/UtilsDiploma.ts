import { type IDiploma } from '../types/IDiploma'

const sortedDiplomas = (diplomas: IDiploma[]): IDiploma[] =>
  diplomas.sort((a, b) => {
    return a.type.localeCompare(b.type)
  })

export { sortedDiplomas }
