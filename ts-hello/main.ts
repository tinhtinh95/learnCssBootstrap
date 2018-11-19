// let msg;
// msg = 'abc';
// let endsWithC =(<string>msg).endsWith('c');
// let alternativeWay = (msg as string).endsWith('c');

// let log = function(msg){
//     console.log(msg);
// }
// let dogLog = msg=> console.log(msg);

// interface
// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point:Point)=>{

// }

// drawPoint({
//     // name: "Tina"
//     x: 1,
//     y: 2
// })

//classes
// class Point{
//     x: number;
//     y:number;
//     constructor(x?: number, y?: number){
//         this.x=x;
//         this.y=y;
//     }
//     draw(){
//         console.log('X: '+this.x+' , Y: ' +this.y);
//     }
// }

// let point = new Point(1,2);
// point.x = 3;
// point.draw();

import {LikeComponent} from './like.component';
let component = new LikeComponent(10, true);
component.onClick();
console.log(`likeCount: ${component.likesCount}, isSelected: ${component.isSelected}`)
