import { Component } from "angular2/core";
import { Child } from "../child/child.component";

@Component({
    selector: "modern-js",
    template: `
    <div>
        root text: <input type="text" #textInput value="{{text}}">
        <button (click)="onChange(textInput.value)">change</button>
        <child-component [text]="text" (changed)="onChange($event)"></child-component>
        <child-component [text]="text" (changed)="onChange($event)"></child-component>
        <child-component [text]="text" (changed)="onChange($event)"></child-component>
    </div>
    `,
    styles: [`
        div {
            background-color: rgb(247,247,247);
            border: solid 1px rgba(0,0,0,0.1);
            padding: 1em;
            margin: 1em;
        }
    `],
    directives: [Child]
})
export class App {
    text = "";
    
    onChange(value: string) {
        this.text = value;
    }
}
