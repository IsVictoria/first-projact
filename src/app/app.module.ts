import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateHistoryComponent } from './modules/update-history/update-history.component';
import { NgZorroAntdModule, NZ_I18N, en_US, NzButtonModule } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {UpdateHistoryState} from './store/update-history.state';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ItemComponent } from './modules/item/item.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TitleComponent } from './modules/title/title.component';
import { CommitAuthorComponent } from './modules/commit-author/commit-author.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UpdateHistoryComponent,
    ItemComponent,
    TitleComponent,
    CommitAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzTagModule,
    NzDividerModule,
    NzAvatarModule,
    NgxsModule.forRoot([
        UpdateHistoryState
      ]
    ),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
