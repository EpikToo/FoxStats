import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'map', component: MapComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}