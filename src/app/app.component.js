System.register(["angular2/core", "../child/child.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, child_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.text = "";
                }
                App.prototype.onChange = function (value) {
                    this.text = value;
                };
                App = __decorate([
                    core_1.Component({
                        selector: "modern-js",
                        template: "\n    <div>\n        root text: <input type=\"text\" #textInput value=\"{{text}}\">\n        <button (click)=\"onChange(textInput.value)\">change</button>\n        <child-component [text]=\"text\" (changed)=\"onChange($event)\"></child-component>\n        <child-component [text]=\"text\" (changed)=\"onChange($event)\"></child-component>\n        <child-component [text]=\"text\" (changed)=\"onChange($event)\"></child-component>\n    </div>\n    ",
                        styles: ["\n        div {\n            background-color: rgb(247,247,247);\n            border: solid 1px rgba(0,0,0,0.1);\n            padding: 1em;\n            margin: 1em;\n        }\n    "],
                        directives: [child_component_1.Child]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.component.js.map