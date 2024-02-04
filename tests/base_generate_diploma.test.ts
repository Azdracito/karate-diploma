import DefaultGenerateDiploma from '../script/DefaultGenerateDiploma'

describe('base_generate_diploma', () => {
  test('baseMember', () => {
    const defaultGenerateDiploma = new DefaultGenerateDiploma({
      clubCity: 'hello-world',
      clubName: 'hello-world',
      date: new Date()
    })
    expect(defaultGenerateDiploma.baseMember).toStrictEqual({
      clubName: 'hello-world',
      city: 'hello-world'
    })
  })
})
