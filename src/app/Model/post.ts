import {Tag} from '../Model/Tag'

export class Post {
    constructor(
        public id: number,
        public creationDate: Date,
        public editionDate: Date,
        public text: string,
        public tags: Tag[]
    ){

    }



}
