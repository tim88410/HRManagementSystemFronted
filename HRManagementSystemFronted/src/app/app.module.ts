import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeavesComponent } from './leaves/leaves.component';
import { EditComponent } from './edit/edit.component';
import { EditModule } from './edit/edit.module';
import { LeaveNameDropdownComponent } from './shared/leave-name-dropdown/leave-name-dropdown.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { leavesReducer } from './store/leaves/leaves.reducer';
import { LeavesEffects } from './store/leaves/leaves.effects';

import { AppRoutingModule } from './app-routing.module';
import { JwtAuthInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LeavesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
    EditModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('leaves', leavesReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([LeavesEffects]),
    AppRoutingModule, // <-- 一定要匯入路由模組
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
