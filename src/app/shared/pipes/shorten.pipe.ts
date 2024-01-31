import { Pipe, PipeTransform } from "@angular/core";
import { retry } from "rxjs";

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value : string, maxLength = 50) : string {
        if (value.length <= 50) {
            return value;
        }
        return value.substring(0, maxLength) + '...';
    }
}