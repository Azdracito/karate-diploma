import { slugify } from '../../utils/UtilsStr'

describe('utils_str', () => {
  test('slugify', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })
})
