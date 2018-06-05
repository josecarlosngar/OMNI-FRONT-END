import {Tag} from '../Model/Tag'
import {User} from '../Model/User'

export class Post {
    constructor(
        public id: number,
        public creationDate: Date,
        public edited: boolean,
        public editionDate: Date,
        public text: string,
        public tags: Tag[],
        public user: User
    ){

    }



}
