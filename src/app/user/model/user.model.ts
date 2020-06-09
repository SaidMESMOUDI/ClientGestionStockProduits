

export class User{
  constructor(
    id?: number,
    username?: string,
    /*password?: string,*/ // Je le désactive pour des raison d sécurité (je ne l'utilise pas de toute façon)
    enable?: boolean
  ){}
}
