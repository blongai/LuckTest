
// 公用api
const PI = {
  // loader: new PIXI.Loader()
}

// console.log('scaleRatio', viewWidth/750, 'viewWidth', viewWidth)

// const imgPath = './images/'
// 图片
const Img = {
};


// 图标
const Icon = {
}


// 精灵
const Sprites = {
};

// 状态
const State = {
}

const Stage = {
  // app: PI.sence.stage
}

// 常用函数
const Fn = {
  // 初始化场景
  senceInit(el) {
    Fn.append(Fn.getEl(el), PI.sence.renderer.view)
  },
  // 精灵
  Sprite(options) {
    return new PIXI.Sprite(options)
  },
  // 精灵加载到舞台
  addStage(stage, child) {
    return stage.addChild(child)
  },
  // 添加到dom
  append(node, sence) {
    return node.appendChild(sence)
  },
  // 设置精灵的属性
  setProperty(sprite, options) {
    for(var item in options) {
      sprite[item] = options[item]
    }
  },
  // 获取指定纹理
  resources(type) {
    if(type == 'json') {
      return PI.loader.resources[arguments[1]].textures[arguments[2]]
    } else {
      return PI.loader.resources[imgPath + arguments[1]].texture
    }
  },
  getEl(el) {
    return document.querySelector(el)
  },
  // 防抖：函数在 n 秒内只执行一次，如果n秒内又触发事件，则会重新计算函数执行时间
  debounce( func, wait=500 ) {
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout( ()=>{
          func()
        }, wait)
    } 
  },
  // 节流：函数在 n 秒内只执行一次
  throttle(fn, wait = 50) {
    var lastDate = Date.now();
    return function(...args) {
        const now = Date.now();

        if(now - lastDate > wait) {
            fn.call(this, ...args);
            lastDate = now
        }
        
    }
  }

}

// 创建精灵
var create = function(selector) {
  return create.prototype.init(selector)
}

create.prototype = {
  init: function(selector) {
    this.selector = selector
    return this
  },
  unRepeat: function(obj) {

    for(let item in obj) {
      if(item == this.selector) {
        throw new Error(`'${this.selector}' alread existed`);
        break;
      }
    }

  },
  // ? @params { variable } name
  // ? @params { texture } texture
  // ? @params { object } property
  // ? @params { stage } parent
  sprite: function(options) {

    // 检查是否有重复
    this.unRepeat(Sprite)

    options = Object.assign({
      texture: '也没有纹理',
      property: '还没有属性',
      parent: Stage.app
    }, options)

    var { texture, property, parent } = options

    Sprite[this.selector] = Fn.Sprite(texture);

    Fn.setProperty(Sprite[this.selector], property)

    Fn.addStage(parent, Sprite[this.selector])
 
    return Sprite[this.selector]
    
  },
  text: function(options) {
    // 检查是否有重复
    this.unRepeat(Sprite);

    options = Object.assign({
      text: '没有文字',
      style: {},
      canvas: '',
      property: '没有属性',
      parent: Stage.app
    }, options)

    var { text, style, canvas, property, parent } = options

    Text[this.selector] = Fn.Text({text, style, canvas});

    Fn.setProperty(Text[this.selector], property)

    Fn.addStage(parent, Text[this.selector])
 
    return Text[this.selector]
    
  }
}