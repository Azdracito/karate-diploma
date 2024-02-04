import BaseGenerateDiploma from './BaseGenerateDiploma'
import { type IGenerateDiplomaOptions } from '../types/IGenerateDiplomaOptions'

export default class DefaultGenerateDiploma extends BaseGenerateDiploma {
  public readonly CLUB_CITY: string
  public readonly CLUB_NAME: string
  public constructor(options: IGenerateDiplomaOptions) {
    super(options)

    this.CLUB_CITY = options.clubCity
    this.CLUB_NAME = options.clubName
  }
}
