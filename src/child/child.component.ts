import { Component, EventEmitter} from "angular2/core";
import { NgIf } from "angular2/common";

@Component({
    selector: "child-component",
    template: `
    <div class="child">
        text: <input type="text" #textInput value="{{text}}">
        <button (click)="onChange(textInput.value)">change</button>
        
        <div>
            <input type="checkbox" [(ngModel)]="fireChangedEvent">
            <label>fire changed event</label>
        </div>
        <div>
            <input type="checkbox" [(ngModel)]="showChild">
            <label>add child</label>
        </div>
        <child-component [text]="text" (changed)="onChange($event)" *ngIf="showChild"></child-component>
    </div>
    `,
    directives: [NgIf, Child],
    styles: [`
        div.child {
            background-color: rgba(0,192,128,0.05);
            border: solid 1px rgba(0,0,0,0.1);
            padding: 1em;
            margin: 1em;
        }
    `],
    inputs: ['text'],
    outputs: ['changed']
})
export class Child {
    showChild = false;
    
    text: string;
    changed = new EventEmitter();
    fireChangedEvent = false;
    
    onChange(value: string){
        this.text = value;
        if (this.fireChangedEvent) this.changed.emit(this.text);
    }
}
