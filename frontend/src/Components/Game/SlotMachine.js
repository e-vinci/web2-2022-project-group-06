/* eslint-disable */
import jQuery from 'jquery';

function Slot(el, max, step) {
    this.speed = 0; // speed of the slot at any point of time
    this.step = step; // speed will increase at this rate
    this.si = null; // holds setInterval object for the given slot
    this.el = el; // dom element of the slot
    this.maxSpeed = max; // max speed this slot can have
}

const a = new Slot('#slot1', 30, 1);
const b = new Slot('#slot2', 45, 2);
const c = new Slot('#slot3', 70, 3);


Slot.prototype.start = function() {
    const _this = this;
    $(_this.el).addClass('motion');
    $(_this.el).spStart();
    _this.si = window.setInterval(function() {
        if(_this.speed < _this.maxSpeed) {
            _this.speed += _this.step;
            $(_this.el).spSpeed(_this.speed);
        }
    }, 100);
};

Slot.prototype.stop = function() {
    const _this = this;
    const limit = 30;
    clearInterval(_this.si);
    _this.si = window.setInterval(function() {
        if(_this.speed > limit) {
            _this.speed -= _this.step;
            $(_this.el).spSpeed(_this.speed);
        }
        if(_this.speed <= limit) {
            _this.finalPos(_this.el);
            $(_this.el).spSpeed(0);
            $(_this.el).spStop();
            clearInterval(_this.si);
            $(_this.el).removeClass('motion');
            _this.speed = 0;
        }
    }, 100);
};


Slot.prototype.start = function() {
    var _this = this;
    $(_this.el).addClass('motion');
    $(_this.el).spStart();
    _this.si = window.setInterval(function() {
        if(_this.speed < _this.maxSpeed) {
            _this.speed += _this.step;
            $(_this.el).spSpeed(_this.speed);
        }
    }, 100);
};

Slot.prototype.stop = function() {
    var _this = this,
        limit = 30;
    clearInterval(_this.si);
    _this.si = window.setInterval(function() {
        if(_this.speed > limit) {
            _this.speed -= _this.step;
            $(_this.el).spSpeed(_this.speed);
        }
        if(_this.speed <= limit) {
            _this.finalPos(_this.el);
            $(_this.el).spSpeed(0);
            $(_this.el).spStop();
            clearInterval(_this.si);
            $(_this.el).removeClass('motion');
            _this.speed = 0;
        }
    }, 100);
};


Slot.prototype.finalPos = function() {
    var el = this.el,
        pos,
        posMin = 2000000000,
        best,
        bgPos,
        i,
        j,
        k;
 
    el_id = $(el).attr('id');
    pos = document.getElementById(el_id).style.backgroundPosition;
    pos = pos.split(' ')[1];
    pos = parseInt(pos, 10);
 
    for(i = 0; i < posArr.length; i++) {
        for(j = 0;;j++) {
            k = posArr[i] + (imgHeight * j);
            if(k > pos) {
                if((k - pos) < posMin) {
                    posMin = k - pos;
                    best = k;
                }
                break;
            }
        }
    }
 
    best += imgHeight + 4;
    bgPos = "0 " + best + "px";
    $(el).animate({
        backgroundPosition:"(" + bgPos + ")"
    }, {
        duration: 200
    });
};