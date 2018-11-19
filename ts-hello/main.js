"use strict";
// let msg;
// msg = 'abc';
// let endsWithC =(<string>msg).endsWith('c');
// let alternativeWay = (msg as string).endsWith('c');
Object.defineProperty(exports, "__esModule", { value: true });
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
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likeCount: " + component.likesCount + ", isSelected: " + component.isSelected);
