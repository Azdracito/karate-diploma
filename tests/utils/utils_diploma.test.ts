import { sortedDiplomas } from '../../utils/UtilsDiploma'
import { type IDiploma } from '../../types/IDiploma'
import DefaultGenerateDiploma from '../../script/DefaultGenerateDiploma'

describe('utils_diploma', () => {
  test('sortedDiplomas with type of diploma', () => {
    const defaultGenerateDiploma = new DefaultGenerateDiploma({
      clubCity: 'hello-world',
      clubName: 'hello-world',
      date: new Date()
    })
    const diplomas: IDiploma[] = [
      {
        ...defaultGenerateDiploma.baseMember,
        firstName: 'hello-world',
        lastName: 'hello-world',
        type: 'jaune'
      },
      {
        ...defaultGenerateDiploma.baseMember,
        firstName: 'hello-world',
        lastName: 'hello-world',
        type: 'blanche-jaune'
      }
    ]
    expect(sortedDiplomas(diplomas)).toStrictEqual([
      {
        ...defaultGenerateDiploma.baseMember,
        firstName: 'hello-world',
        lastName: 'hello-world',
        type: 'blanche-jaune'
      },
      {
        ...defaultGenerateDiploma.baseMember,
        firstName: 'hello-world',
        lastName: 'hello-world',
        type: 'jaune'
      }
    ] as IDiploma[])
  })
})
