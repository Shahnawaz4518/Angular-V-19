import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Book } from './book';


export class Testdata implements InMemoryDbService {

    createDb() {
        let bookDetails:Book[]=[
            {id:1, name:'Angular', category:'Programming', year:'2023'},
            {id:2, name:'React', category:'Web Dev', year:'2022'},
            {id:3, name:'Vue', category:'Programming', year:'2021'},
            {id:4, name:'JavaScript', category:'Programming', year:'2020'},
            {id:5, name:'TypeScript', category:'Programming', year:'2019'}
        ];
        return {books:bookDetails};
    }
}