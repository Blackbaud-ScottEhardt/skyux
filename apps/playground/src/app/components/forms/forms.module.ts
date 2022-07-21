import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'input-box',
    loadChildren: () =>
      import('./input-box/input-box.module').then((m) => m.InputBoxModule),
  },
  {
    path: 'radio',
    loadChildren: () =>
      import('./radio/radio.module').then((m) => m.RadioModule),
  },
  {
    path: 'toggle-switch',
    loadChildren: () =>
      import('./toggle-switch/toggle-switch.module').then(
        (m) => m.ToggleSwitchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}

@NgModule({
  imports: [FormsRoutingModule],
})
export class FormsModule {
  public static routes = routes;
}
