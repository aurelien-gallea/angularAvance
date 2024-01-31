import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../../core/models/Person.model";

@Pipe({
    name: 'presenter'
})

export class PresenterPipe implements PipeTransform {

    transform(person: Person) {
        return person.lastName.toUpperCase() + " " + person.firstName.substring(0,1).toUpperCase() + person.firstName.substring(1);
    }
}