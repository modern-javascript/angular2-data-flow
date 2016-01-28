System.register(["angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Child;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Child = (function () {
                function Child() {
                    this.showChild = false;
                    this.changed = new core_1.EventEmitter();
                    this.fireChangedEvent = false;
                }
                Child.prototype.onChange = function (value) {
                    this.text = value;
                    if (this.fireChangedEvent)
                        this.changed.emit(this.text);
                };
                Child = __decorate([
                    core_1.Component({
                        selector: "child-component",
                        template: "\n    <div class=\"child\">\n        text: <input type=\"text\" #textInput value=\"{{text}}\">\n        <button (click)=\"onChange(textInput.value)\">change</button>\n        \n        <div>\n            <input type=\"checkbox\" [(ngModel)]=\"fireChangedEvent\">\n            <label>fire changed event</label>\n        </div>\n        <div>\n            <input type=\"checkbox\" [(ngModel)]=\"showChild\">\n            <label>add child</label>\n        </div>\n        <child-component [text]=\"text\" (changed)=\"onChange($event)\" *ngIf=\"showChild\"></child-component>\n    </div>\n    ",
                        directives: [common_1.NgIf, Child],
                        styles: ["\n        div.child {\n            background-color: rgba(0,192,128,0.05);\n            border: solid 1px rgba(0,0,0,0.1);\n            padding: 1em;\n            margin: 1em;\n        }\n    "],
                        inputs: ['text'],
                        outputs: ['changed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Child);
                return Child;
            })();
            exports_1("Child", Child);
        }
    }
});
//# sourceMappingURL=child.component.js.map