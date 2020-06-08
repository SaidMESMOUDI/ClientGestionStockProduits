

export class Principal {
  //constructor(public authorities?: any) {}
  constructor(public accountNonExpired?: boolean,
              public accountNonLocked?: boolean,
              public authorities?: any,
              public credentialsNonExpired?: boolean,
              public enabled?: boolean,
              public username?: string) {}

}
