const scenesOptions = [ // 场景数据：定义每个场景的宽高,x/y距离
  {
    name: "scene1",
    x: 1000,
    y: 0,
    width: 3554,
    height: 750
  },
  {
    name: "scene2",
    x: 1000,
    y: 0,
    width: 3554,
    height: 750
  }
];
// ================================================================
// name:就是场景的名字
// x,y就是它初始化的位置
// width,height就是设计稿场景1的宽度和高度

const scenes = {}; // 场景集合 - pixi对象

function initScenes() { // 初始化场景
  for (let i = scenesOptions.length - 1; i >= 0; i--) {
    scenes[scenesOptions[i].name] = new PIXI.Container({
      width: scenesOptions[i].width,
      height: scenesOptions[i].height
    });
    scenes[scenesOptions[i].name].x = scenesOptions[i].x;
    app.stage.addChild(scenes[scenesOptions[i].name]);
  }
}
// =========================================================
// 这句话如果不封装，其实很好理解就是这么几句话
// const scenes = {}; 
// scenes.scene1 = new PIXI.Container({
//       width:1344,
//       height:750
// });
// scenes.scene1.x = 0;
// app.stage.addChild(scenes.scene1);把场景添加到舞台