(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzPzE2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIlwiIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/admin/admin-dashboard/admin-dashboard.component.css\n");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p>Dashboard</p>\\n\\n<p>Session ID: {{ sessionId | async }}</p>\\n<a id=\\\"anchor\\\"></a>\\n<p>Token: {{ token | async }}</p>\\n\\nPreloaded Modules\\n<ul>\\n  <li *ngFor=\\\"let module of modules\\\">{{ module }}</li>\\n</ul>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWw/NGE5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHA+RGFzaGJvYXJkPC9wPlxcblxcbjxwPlNlc3Npb24gSUQ6IHt7IHNlc3Npb25JZCB8IGFzeW5jIH19PC9wPlxcbjxhIGlkPVxcXCJhbmNob3JcXFwiPjwvYT5cXG48cD5Ub2tlbjoge3sgdG9rZW4gfCBhc3luYyB9fTwvcD5cXG5cXG5QcmVsb2FkZWQgTW9kdWxlc1xcbjx1bD5cXG4gIDxsaSAqbmdGb3I9XFxcImxldCBtb2R1bGUgb2YgbW9kdWxlc1xcXCI+e3sgbW9kdWxlIH19PC9saT5cXG48L3VsPlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/admin-dashboard/admin-dashboard.component.html\n");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\nvar operators_1 = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/operators/index.js\");\nvar selective_preloading_strategy_service_1 = __webpack_require__(/*! ../../selective-preloading-strategy.service */ \"./src/app/selective-preloading-strategy.service.ts\");\nvar AdminDashboardComponent = /** @class */ (function () {\n    function AdminDashboardComponent(route, preloadStrategy) {\n        this.route = route;\n        this.modules = preloadStrategy.preloadedModules;\n    }\n    AdminDashboardComponent.prototype.ngOnInit = function () {\n        // Capture the session ID if available\n        this.sessionId = this.route\n            .queryParamMap\n            .pipe(operators_1.map(function (params) { return params.get('session_id') || 'None'; }));\n        // Capture the fragment if available\n        this.token = this.route\n            .fragment\n            .pipe(operators_1.map(function (fragment) { return fragment || 'None'; }));\n    };\n    AdminDashboardComponent = __decorate([\n        core_1.Component({\n            selector: 'app-admin-dashboard',\n            template: __webpack_require__(/*! ./admin-dashboard.component.html */ \"./src/app/admin/admin-dashboard/admin-dashboard.component.html\"),\n            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ \"./src/app/admin/admin-dashboard/admin-dashboard.component.css\")]\n        }),\n        __metadata(\"design:paramtypes\", [typeof (_a = typeof router_1.ActivatedRoute !== \"undefined\" && router_1.ActivatedRoute) === \"function\" && _a || Object, typeof (_b = typeof selective_preloading_strategy_service_1.SelectivePreloadingStrategyService !== \"undefined\" && selective_preloading_strategy_service_1.SelectivePreloadingStrategyService) === \"function\" && _b || Object])\n    ], AdminDashboardComponent);\n    return AdminDashboardComponent;\n    var _a, _b;\n}());\nexports.AdminDashboardComponent = AdminDashboardComponent;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC50cz9mNTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgIGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlbGVjdGl2ZVByZWxvYWRpbmdTdHJhdGVneVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZWxlY3RpdmUtcHJlbG9hZGluZy1zdHJhdGVneS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkbWluLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcpLFxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2Vzc2lvbklkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHRva2VuOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG1vZHVsZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByZWxvYWRTdHJhdGVneTogU2VsZWN0aXZlUHJlbG9hZGluZ1N0cmF0ZWd5U2VydmljZVxuICApIHtcbiAgICB0aGlzLm1vZHVsZXMgPSBwcmVsb2FkU3RyYXRlZ3kucHJlbG9hZGVkTW9kdWxlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIENhcHR1cmUgdGhlIHNlc3Npb24gSUQgaWYgYXZhaWxhYmxlXG4gICAgdGhpcy5zZXNzaW9uSWQgPSB0aGlzLnJvdXRlXG4gICAgICAucXVlcnlQYXJhbU1hcFxuICAgICAgLnBpcGUobWFwKHBhcmFtcyA9PiBwYXJhbXMuZ2V0KCdzZXNzaW9uX2lkJykgfHwgJ05vbmUnKSk7XG5cbiAgICAvLyBDYXB0dXJlIHRoZSBmcmFnbWVudCBpZiBhdmFpbGFibGVcbiAgICB0aGlzLnRva2VuID0gdGhpcy5yb3V0ZVxuICAgICAgLmZyYWdtZW50XG4gICAgICAucGlwZShtYXAoZnJhZ21lbnQgPT4gZnJhZ21lbnQgfHwgJ05vbmUnKSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQU9BO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQU5BO0FBdUJBOztBQUFBO0FBdkJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/admin/admin-dashboard/admin-dashboard.component.ts\n");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\nvar admin_component_1 = __webpack_require__(/*! ./admin/admin.component */ \"./src/app/admin/admin/admin.component.ts\");\nvar admin_dashboard_component_1 = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ \"./src/app/admin/admin-dashboard/admin-dashboard.component.ts\");\nvar manage_crises_component_1 = __webpack_require__(/*! ./manage-crises/manage-crises.component */ \"./src/app/admin/manage-crises/manage-crises.component.ts\");\nvar manage_heroes_component_1 = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ \"./src/app/admin/manage-heroes/manage-heroes.component.ts\");\nvar auth_guard_1 = __webpack_require__(/*! ../auth/auth.guard */ \"./src/app/auth/auth.guard.ts\");\nvar adminRoutes = [\n    {\n        path: '',\n        component: admin_component_1.AdminComponent,\n        canActivate: [auth_guard_1.AuthGuard],\n        children: [\n            {\n                path: '',\n                canActivateChild: [auth_guard_1.AuthGuard],\n                children: [\n                    { path: 'crises', component: manage_crises_component_1.ManageCrisesComponent },\n                    { path: 'heroes', component: manage_heroes_component_1.ManageHeroesComponent },\n                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }\n                ]\n            }\n        ]\n    }\n];\nvar AdminRoutingModule = /** @class */ (function () {\n    function AdminRoutingModule() {\n    }\n    AdminRoutingModule = __decorate([\n        core_1.NgModule({\n            imports: [\n                router_1.RouterModule.forChild(adminRoutes)\n            ],\n            exports: [\n                router_1.RouterModule\n            ]\n        })\n    ], AdminRoutingModule);\n    return AdminRoutingModule;\n}());\nexports.AdminRoutingModule = AdminRoutingModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluLXJvdXRpbmcubW9kdWxlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hZG1pbi9hZG1pbi1yb3V0aW5nLm1vZHVsZS50cz8wZWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluQ29tcG9uZW50IH0gICAgICAgICAgIGZyb20gJy4vYWRtaW4vYWRtaW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFkbWluRGFzaGJvYXJkQ29tcG9uZW50IH0gIGZyb20gJy4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFuYWdlQ3Jpc2VzQ29tcG9uZW50IH0gICAgZnJvbSAnLi9tYW5hZ2UtY3Jpc2VzL21hbmFnZS1jcmlzZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE1hbmFnZUhlcm9lc0NvbXBvbmVudCB9ICAgIGZyb20gJy4vbWFuYWdlLWhlcm9lcy9tYW5hZ2UtaGVyb2VzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9ICAgICAgICAgICAgICAgIGZyb20gJy4uL2F1dGgvYXV0aC5ndWFyZCc7XG5cbmNvbnN0IGFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZF0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBwYXRoOiAnY3Jpc2VzJywgY29tcG9uZW50OiBNYW5hZ2VDcmlzZXNDb21wb25lbnQgfSxcbiAgICAgICAgICB7IHBhdGg6ICdoZXJvZXMnLCBjb21wb25lbnQ6IE1hbmFnZUhlcm9lc0NvbXBvbmVudCB9LFxuICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQWRtaW5EYXNoYm9hcmRDb21wb25lbnQgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKGFkbWluUm91dGVzKVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5Sb3V0aW5nTW9kdWxlIHt9XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/admin-routing.module.ts\n");

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar common_1 = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/fesm5/common.js\");\nvar admin_component_1 = __webpack_require__(/*! ./admin/admin.component */ \"./src/app/admin/admin/admin.component.ts\");\nvar admin_dashboard_component_1 = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ \"./src/app/admin/admin-dashboard/admin-dashboard.component.ts\");\nvar manage_crises_component_1 = __webpack_require__(/*! ./manage-crises/manage-crises.component */ \"./src/app/admin/manage-crises/manage-crises.component.ts\");\nvar manage_heroes_component_1 = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ \"./src/app/admin/manage-heroes/manage-heroes.component.ts\");\nvar admin_routing_module_1 = __webpack_require__(/*! ./admin-routing.module */ \"./src/app/admin/admin-routing.module.ts\");\nvar AdminModule = /** @class */ (function () {\n    function AdminModule() {\n    }\n    AdminModule = __decorate([\n        core_1.NgModule({\n            imports: [\n                common_1.CommonModule,\n                admin_routing_module_1.AdminRoutingModule\n            ],\n            declarations: [\n                admin_component_1.AdminComponent,\n                admin_dashboard_component_1.AdminDashboardComponent,\n                manage_crises_component_1.ManageCrisesComponent,\n                manage_heroes_component_1.ManageHeroesComponent\n            ]\n        })\n    ], AdminModule);\n    return AdminModule;\n}());\nexports.AdminModule = AdminModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluLm1vZHVsZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzP2FlYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSAgICAgICAgICAgZnJvbSAnLi9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5EYXNoYm9hcmRDb21wb25lbnQgfSAgZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYW5hZ2VDcmlzZXNDb21wb25lbnQgfSAgICBmcm9tICcuL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFuYWdlSGVyb2VzQ29tcG9uZW50IH0gICAgZnJvbSAnLi9tYW5hZ2UtaGVyb2VzL21hbmFnZS1oZXJvZXMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5Sb3V0aW5nTW9kdWxlIH0gICAgICAgZnJvbSAnLi9hZG1pbi1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQWRtaW5Sb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIE1hbmFnZUNyaXNlc0NvbXBvbmVudCxcbiAgICBNYW5hZ2VIZXJvZXNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/admin.module.ts\n");

/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3M/MDJmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/admin/admin/admin.component.css\n");

/***/ }),

/***/ "./src/app/admin/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h3>ADMIN</h3>\\n<nav>\\n  <a routerLink=\\\"./\\\" routerLinkActive=\\\"active\\\"\\n    [routerLinkActiveOptions]=\\\"{ exact: true }\\\">Dashboard</a>\\n  <a routerLink=\\\"./crises\\\" routerLinkActive=\\\"active\\\">Manage Crises</a>\\n  <a routerLink=\\\"./heroes\\\" routerLinkActive=\\\"active\\\">Manage Heroes</a>\\n</nav>\\n<router-outlet></router-outlet>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuaHRtbD9lMzQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDM+QURNSU48L2gzPlxcbjxuYXY+XFxuICA8YSByb3V0ZXJMaW5rPVxcXCIuL1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIlxcbiAgICBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7IGV4YWN0OiB0cnVlIH1cXFwiPkRhc2hib2FyZDwvYT5cXG4gIDxhIHJvdXRlckxpbms9XFxcIi4vY3Jpc2VzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPk1hbmFnZSBDcmlzZXM8L2E+XFxuICA8YSByb3V0ZXJMaW5rPVxcXCIuL2hlcm9lc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5NYW5hZ2UgSGVyb2VzPC9hPlxcbjwvbmF2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/admin/admin/admin.component.html\n");

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar AdminComponent = /** @class */ (function () {\n    function AdminComponent() {\n    }\n    AdminComponent = __decorate([\n        core_1.Component({\n            selector: 'app-admin',\n            template: __webpack_require__(/*! ./admin.component.html */ \"./src/app/admin/admin/admin.component.html\"),\n            styles: [__webpack_require__(/*! ./admin.component.css */ \"./src/app/admin/admin/admin.component.css\")]\n        })\n    ], AdminComponent);\n    return AdminComponent;\n}());\nexports.AdminComponent = AdminComponent;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzPzg4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZG1pbicsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FkbWluLmNvbXBvbmVudC5odG1sJyksXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vYWRtaW4uY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCB7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFEQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/admin/admin.component.ts\n");

/***/ }),

/***/ "./src/app/admin/manage-crises/manage-crises.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/manage-crises/manage-crises.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQuY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hZG1pbi9tYW5hZ2UtY3Jpc2VzL21hbmFnZS1jcmlzZXMuY29tcG9uZW50LmNzcz80YTEyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/manage-crises/manage-crises.component.css\n");

/***/ }),

/***/ "./src/app/admin/manage-crises/manage-crises.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/manage-crises/manage-crises.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p>Manage your crises here</p>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWRtaW4vbWFuYWdlLWNyaXNlcy9tYW5hZ2UtY3Jpc2VzLmNvbXBvbmVudC5odG1sPzM1N2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxwPk1hbmFnZSB5b3VyIGNyaXNlcyBoZXJlPC9wPlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/manage-crises/manage-crises.component.html\n");

/***/ }),

/***/ "./src/app/admin/manage-crises/manage-crises.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-crises/manage-crises.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar ManageCrisesComponent = /** @class */ (function () {\n    function ManageCrisesComponent() {\n    }\n    ManageCrisesComponent = __decorate([\n        core_1.Component({\n            selector: 'app-manage-crises',\n            template: __webpack_require__(/*! ./manage-crises.component.html */ \"./src/app/admin/manage-crises/manage-crises.component.html\"),\n            styles: [__webpack_require__(/*! ./manage-crises.component.css */ \"./src/app/admin/manage-crises/manage-crises.component.css\")]\n        })\n    ], ManageCrisesComponent);\n    return ManageCrisesComponent;\n}());\nexports.ManageCrisesComponent = ManageCrisesComponent;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FkbWluL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQudHM/ZTQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1hbmFnZS1jcmlzZXMnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tYW5hZ2UtY3Jpc2VzLmNvbXBvbmVudC5odG1sJyksXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vbWFuYWdlLWNyaXNlcy5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE1hbmFnZUNyaXNlc0NvbXBvbmVudCB7IH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/admin/manage-crises/manage-crises.component.ts\n");

/***/ }),

/***/ "./src/app/admin/manage-heroes/manage-heroes.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/manage-heroes/manage-heroes.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL21hbmFnZS1oZXJvZXMvbWFuYWdlLWhlcm9lcy5jb21wb25lbnQuY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hZG1pbi9tYW5hZ2UtaGVyb2VzL21hbmFnZS1oZXJvZXMuY29tcG9uZW50LmNzcz9lZmFkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJcIiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/manage-heroes/manage-heroes.component.css\n");

/***/ }),

/***/ "./src/app/admin/manage-heroes/manage-heroes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/manage-heroes/manage-heroes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p>Manage your heroes here</p>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL21hbmFnZS1oZXJvZXMvbWFuYWdlLWhlcm9lcy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYWRtaW4vbWFuYWdlLWhlcm9lcy9tYW5hZ2UtaGVyb2VzLmNvbXBvbmVudC5odG1sPzQ3NmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxwPk1hbmFnZSB5b3VyIGhlcm9lcyBoZXJlPC9wPlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/admin/manage-heroes/manage-heroes.component.html\n");

/***/ }),

/***/ "./src/app/admin/manage-heroes/manage-heroes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-heroes/manage-heroes.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\nvar ManageHeroesComponent = /** @class */ (function () {\n    function ManageHeroesComponent() {\n    }\n    ManageHeroesComponent = __decorate([\n        core_1.Component({\n            selector: 'app-manage-hereos',\n            template: __webpack_require__(/*! ./manage-heroes.component.html */ \"./src/app/admin/manage-heroes/manage-heroes.component.html\"),\n            styles: [__webpack_require__(/*! ./manage-heroes.component.css */ \"./src/app/admin/manage-heroes/manage-heroes.component.css\")]\n        })\n    ], ManageHeroesComponent);\n    return ManageHeroesComponent;\n}());\nexports.ManageHeroesComponent = ManageHeroesComponent;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FkbWluL21hbmFnZS1oZXJvZXMvbWFuYWdlLWhlcm9lcy5jb21wb25lbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FkbWluL21hbmFnZS1oZXJvZXMvbWFuYWdlLWhlcm9lcy5jb21wb25lbnQudHM/N2FiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1hbmFnZS1oZXJlb3MnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tYW5hZ2UtaGVyb2VzLmNvbXBvbmVudC5odG1sJyksXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vbWFuYWdlLWhlcm9lcy5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE1hbmFnZUhlcm9lc0NvbXBvbmVudCB7IH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/admin/manage-heroes/manage-heroes.component.ts\n");

/***/ })

}]);