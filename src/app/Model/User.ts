

export class User {

    constructor(
        public id: number,
        public username: string,
        public password: string,
        public name: string,
        public surname: string,
        public email: string,
        public rol: string,
        public image: string,
        public registrationMoment: Date
    ){
        
    }


}