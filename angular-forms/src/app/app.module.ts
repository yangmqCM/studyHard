import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

/*
 
 * 
 * 如果某个组件、指令或管道是属于 imports 中所导入的某个模块的，
 * 那就不能再把它再声明到本模块的 declarations 数组中。
 * 如果它是你自己写的，并且确实属于当前模块，
 * 才应该把它声明在 declarations 数组中
 * */
@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
