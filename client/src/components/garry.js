import React, {Component} from 'react';
import './garry.css';
import Draggable from 'react-draggable';

var attentionSeekers = {
    bounce : "bounce",
    flash : "flash",
    pulse : "pulse",
    rubberBand : "rubberBand",
    shake : "shake",
    headShake : "headShake",
    swing : "swing",
    tada : "tada",
    wobble : "wobble",
    jello : "jello"
}

var bounceIn = "bounceIn"
var bounceInDown = "bounceInDown"
var bounceInLeft = "bounceInLeft"
var bounceInRight = "bounceInRight"
var bounceInUp = "bounceInUp"
var bounceOut = "bounceOut"
var bounceOutDown = "bounceOutDown"
var bounceOutLeft = "bounceOutLeft"
var bounceOutRight = "bounceOutRight"
var bounceOutUp = "bounceOutUp"
var fadeIn = "fadeIn"
var fadeInDown = "fadeInDown"
var fadeInDownBig = "fadeInDownBig"
var fadeInLeft = "fadeInLeft"
var fadeInLeftBig = "fadeInLeftBig"
var fadeInRight = "fadeInRight"
var fadeInRightBig = "fadeInRightBig"
var fadeInUp = "fadeInUp"
var fadeInUpBig = "fadeInUpBig"
var fadeOut = "fadeOut"
var fadeOutDown = "fadeOutDown"
var fadeOutDownBig = "fadeOutDownBig"
var fadeOutLeft = "fadeOutLeft"
var fadeOutLeftBig = "fadeOutLeftBig"
var fadeOutRight = "fadeOutRight"
var fadeOutRightBig = "fadeOutRightBig"
var fadeOutUp = "fadeOutUp"
var fadeOutUpBig = "fadeOutUpBig"
var flipInX = "flipInX"
var flipInY = "flipInY"
var flipOutX = "flipOutX"
var flipOutY = "flipOutY"
var lightSpeedIn = "lightSpeedIn"
var lightSpeedOut = "lightSpeedOut"
var rotateIn = "rotateIn"
var rotateInDownLeft = "rotateInDownLeft"
var rotateInDownRight = "rotateInDownRight"
var rotateInUpLeft = "rotateInUpLeft"
var rotateInUpRight = "rotateInUpRight"
var rotateOut = "rotateOut"
var rotateOutDownLeft = "rotateOutDownLeft"
var rotateOutDownRight = "rotateOutDownRight"
var rotateOutUpLeft = "rotateOutUpLeft"
var rotateOutUpRight = "rotateOutUpRight"
var hinge = "hinge"
var jackInTheBox = "jackInTheBox"
var rollIn = "rollIn"
var rollOut = "rollOut"
var zoomIn = "zoomIn"
var zoomInDown = "zoomInDown"
var zoomInLeft = "zoomInLeft"
var zoomInRight = "zoomInRight"
var zoomInUp = "zoomInUp"
var zoomOut = "zoomOut"
var zoomOutDown = "zoomOutDown"
var zoomOutLeft = "zoomOutLeft"
var zoomOutRight = "zoomOutRight"
var zoomOutUp = "zoomOutUp"
var slideInDown = "slideInDown"
var slideInLeft = "slideInLeft"
var slideInRight = "slideInRight"
var slideInUp = "slideInUp"
var slideOutDown = "slideOutDown"
var slideOutLeft = "slideOutLeft"
var slideOutRight = "slideOutRight"
var slideOutUp = "slideOutUp"



class Garry extends Component {
    constructor(){
        super()
        this.state = {
            animation : '',
            pos: {
                x: null,
                y: null
            }
        }
        this.isHeld = false
        
    }
    pressDown = () => {
        this.isHeld = true
        this.setState({animation : ''})
        
       
    }
    pressUp = () => {
        this.isHeld = false
        var keys = Object.keys(attentionSeekers)
        
        this.setState({animation : attentionSeekers[keys[ keys.length * Math.random() << 0]]})
    }
    drag = (evt) => {
        
        if(this.isHeld){
            console.log(evt);
            this.setState({pos : {
                top: evt.screenX + 'px',
                left: evt.screenY + 'px'
            }})
            
        }

    }
  render(){
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            <div id="boundary">
                
                <Draggable
                bounds="parent"
                handle=".wrapper"
                onStart={this.pressDown}
                onStop={this.pressUp}
                onDrag={this.drag}
                defaultPosition={{x: 0, y: 0}}
                >   
                        <div className={`wrapper`}>
                            <div className={`garry animated ${this.state.animation}`}>
                                 <div className="eye oval" id="left">
                                    <div className="pupil oval"></div>
                                </div>
                                <div className="eye oval" id="right">
                                    <div className="pupil oval"></div>
                                </div>
                                <div className="arm oval" id="left">
                                </div>
                                <div className="arm oval" id="right">
                                </div> 
                            </div>
                        </div>
                    
                </Draggable>
                
            </div>
        </div>
        
    )
  }
    
}

export default Garry;
