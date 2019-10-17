let app = new PIXI.Application({
  width: 1344,
  height: 750
});
//这一步相当于flash，导入了素材
const loader = new PIXI.loaders.Loader();
loader.add('bg1', '../images/0.png')

// target.progress会根据上面图片的多少真实的实现loading效果， 返回0~100 的小数， 然后需要用parseInt() 格式化整数。
loader.on("progress", function (target, resource) { //加载进度
  console.log(target.progress + "%")
});
loader.once('complete', function (target, resource) { //加载完成
    document.body.appendChild(app.view)

    //初始化场景
    initScenes();
    //初始化精灵
    initSprites();
    //初始化动画
    initAnimation();

  },
  loader.load()) // 开始加载资源

// ================================================================
// 这句话document.body.appendChild(app.view)写完，才可以显示舞台
// 这句话loader.load()写完，才可以监听到加载进度;
// complete事件中，完成我们一镜到底要完成的事情