import { Routes, RouterModule } from '@angular/router';
import { VistaPorDefectoComponent } from './vista-por-defecto/vista-por-defecto.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
    { path: '', component: VistaPorDefectoComponent },
    { path: 'tag/:id', component: TagComponent }
];

export const routing = RouterModule.forRoot(routes);
