import util from 'util'

export default class GenerateDiplomaError extends Error {
  public readonly name: string = 'GenerateDiplomaError'
  public constructor(belt: string) {
    super(util.format('Belt "%s" not found', belt))
  }
}
