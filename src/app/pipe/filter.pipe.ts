import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByTitlePipe',
    pure: false
})
export class FilterTitlePipe implements PipeTransform {
    transform(items: any[], query: string): any {
        if (!items || !query) {
            return items;
        }
        return items.filter(item => item.title.toUpperCase().startsWith(query.toUpperCase()));
    }
}