const spritesOptions = [{ // 第一个场景的精灵
    bg1: {
      position: {
        x: 0,
        y: 0
      }
    },
  },
  { // 第二个场景的精灵
    bg2: {
      position: {
        x: 0,
        y: 0
      }
    },
  }
]

function initSprites() { // new出所有精灵对象，并交给函数initSprite分别赋值
  for (let i = 0; i < spritesOptions.length; i++) {
    let obj = spritesOptions[i];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        sprites[key] = PIXI.Sprite.fromImage(key);
        initSprite(sprites[key], obj[key], i + 1);
      }
    }
  }
  initSpecialProp();
}

function initSprite(sprite, prop, i) { // 初始化单个精灵的属性并加入对应的场景中
  for (let key in prop) {
    if (prop.hasOwnProperty(key)) {
      sprite[key] = prop[key];
    }
  }
  scenes['scene' + i].addChild(sprite);
}
// =========================================================
// 这句话如果不封装，其实很好理解就是这么几句话
// sprites.bg1 = PIXI.Sprite.fromImage('bg1');
// bg1.position.x = 0;
// bg1.position.y = 0;
// scenes.scenes1.addChild('bg1');把精灵给到场景