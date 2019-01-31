import { NamesComponent } from '../names/names.component';
import { FileNameListComponent } from '../file-name-list/file-name-list.component';

export const routes = [  

    {
        path: 'app-names', 
        label: 'Names',
        component: NamesComponent
    }
    ,
    {
        path: 'app-file-name-list', 
        label: 'File Names', 
        component: FileNameListComponent
    }
];