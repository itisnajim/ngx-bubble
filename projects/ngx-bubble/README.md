# ngx-bubble

An angular bubble component inspired from facebook chat heads, with the help of [interactjs](https://www.npmjs.com/package/interactjs).

## Preview

![preview](https://github.com/itisnajim/ngx-bubble/blob/master/preview.gif)  

## Installation
```
npm i -S ngx-bubble
```

## Usage Example
### Import the module first
```typescript
import { NgxBubbleModule } from 'ngx-bubble';
@NgModule({
    ...
    imports: [
        NgxBubbleModule,
        ...
    ],
    ...
```

```html
<div class="container" style="position: relative; width: 100vw; height: 260px;">
    <ngx-bubble 
    x="20" y="20"
    *ngIf="!hidden">
        <button style="width: 4rem; height: 4rem; border-radius: 100%;" (click)="hidden=true">Hide</button>
    </ngx-bubble>
</div>
```

## Inputs and Outputs
```typescript 
// Initial position x relative to the parent(container), default = 0
x: number;

// Initial position y relative to the parent(container), default = 0
y: number;

// see https://interactjs.io/docs/action-options
dragOptions: Object;

// Callback/Event fired when the bubble draging start.
bubbleMoveStart: ({x: number, y: number}) => void; 

// Callback/Event fired whenever the bubble is on dragging and moving.
bubbleMoving : ({x: number, y: number}) => void;

// Callback/Event fired when the bubble draging end.
bubbleMoveEnd : ({x: number, y: number}) => void;
```
### Full usage !
```html
<button (click)="hidden=false">Show the bubble</button>
<div class="container" style="position: relative; width: 100vw; height: 260px;">
    <ngx-bubble 
    x="20" y="20"
    dragOptions="{{dragOptions}}"
    (bubbleMoveStart)="bubbleMoveStart($event)"
    (bubbleMoving)="bubbleMoving($event)"
    (bubbleMoveEnd)="bubbleMoveEnd($event)"
    *ngIf="!hidden">
        <button style="width: 4rem; height: 4rem; border-radius: 100%;" (click)="hidden=true">Hide</button>
    </ngx-bubble>
</div>
```
```typescript
hidden = false;

dragOptions = {
    speed: 300 // milliseconds
}

bubbleMoveStart(position: {x: number, y: number}): void{
    console.log('the bubble start move from (' + String(position.x) + ',' + String(position.y) + ')');
}

bubbleMoving(position: {x: number, y: number}): void{
    console.log('the bubble position is (' + String(position.x) + ',' + String(position.y) + ')');
}

bubbleMoveEnd(position: {x: number, y: number}): void{
    console.log('the bubble moved to (' + String(position.x) + ',' + String(position.y) + ')');
}
```


## Author

itisnajim, itisnajim@gmail.com

## License

ngx-bubble is available under the MIT license. See the LICENSE file for more info.