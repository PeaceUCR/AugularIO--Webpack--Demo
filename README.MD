# Webpack AugularIO  Official Doc Demo

followed by https://github.com/PeaceUCR/AngularIO-webpack

Tricky part of **NgModule imports and declaration**:(As mentioned in README.MD https://github.com/PeaceUCR/AngularIO-webpack)
For component like HeroDetailComponent, you can put in declaration of app.module.ts or sub module is also fine!!! then app.module.ts just import the sub module!  

# import& export in ES6/ts world vs AngularWorld

**import(es6/ts at top) vs NgModule imports???**
https://stackoverflow.com/questions/41926941/role-of-imports-exports-in-angular-2-ngmodule
https://stackoverflow.com/questions/45659771/angular-4-root-module-import-and-imports

import(es6/ts at top) is to locate the file, import code from other file....

NgModule imports: import what exported from other module
https://angular.io/guide/ngmodule-faq#what-should-i-import

**export(es6/ts at top) vs NgModule exports???**
https://stackoverflow.com/questions/41926941/role-of-imports-exports-in-angular-2-ngmodule

export(es6/ts at top) is to export the code for other file to use.....

NgModule exports: Angular world

# please read https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f

(Please note that there’s no encapsulation for components added to the entryComponents, you can use components from the A module without adding them into exports array. Of course you will still need to import the A module.)


# DI
DI for app value config example: https://angular.io/guide/dependency-injection-providers#non-class-dependencies 

1. src/app/app.module.ts

entry module

2.src/app/app-routing.module.ts

**loadChildren**: but don't know './crisis-center/crisis-center.module#CrisisCenterModule'???

https://angular.io/api/router/Route#loadChildren

laz-loading& async routing& preloading

https://angular.io/guide/router#milestone-6-asynchronous-routing

**pathMatch: 'full'** : means path covers the whole unconsumed URL,
**{ path: '',   redirectTo: '/superheroes', pathMatch: 'full' }** means router applies the redirect if and only if navigating to '/'

https://angular.io/api/router/Route#matching-strategy

path: '**': https://angular.io/api/router/Route#wild-cards
 
 
**preloadingStrategy**https://angular.io/guide/router#preloading-background-loading-of-feature-areas
preloadingStrategy is between eager loading and lazy loading

**SelectivePreloadingStrategyService** is custom strategy that only preloads routes whose data.preload flag is set to true
https://angular.io/guide/router#custom-preloading-strategy

**Why export RouterModule????**
https://stackoverflow.com/questions/41823772/angular2-export-of-routermodule-why-it-is-required
if don't exports RouterModule in app-routing.module, then need to import in RouterModule in app.module.ts

3 then switch to src/app/selective-preloading-strategy.service.ts

Syntax for Providing a singleton service  
https://angular.io/guide/singleton-services#using-providedin

        @Injectable({
          providedIn: 'root',
        })

Then strange part, the whole app don't have providers for DI??? (just import class, then use directly??)

Another way:**This is difficult, will back later**

https://angular.io/guide/singleton-services#the-forroot-pattern

# **Why forRoot????**

https://angular.io/guide/singleton-services#how-forroot-works

https://stackoverflow.com/questions/45825360/angular-2-routing-modulewithproviders-v-ngmodule

https://stackoverflow.com/questions/47524011/what-is-purpose-of-using-forroot-in-ngmodule

https://stackoverflow.com/questions/39664861/importing-modules-with-forroot

https://stackoverflow.com/questions/39653072/how-to-use-forroot-within-feature-modules-hierarchy?rq=1

https://stackoverflow.com/questions/40498081/routermodule-forrootroutes-vs-routermodule-forchildroutes

**forChild vs forRoot??? vs providers vs RouterModule.forRoot()???**
forRoot called at app.module 


#We will back later after fully go through the official documentation!







