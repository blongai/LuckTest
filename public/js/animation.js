const animationsOptions = { // 精灵动画集合
  jzLeft: [{
    delay: 0,
    duration: 0.11,
    to: {
      x: 600,
      y: 200,
      ease: Power0.easeNone
    }
  }],
  jzRight: [{
    delay: 0,
    duration: 0.11,
    to: {
      x: 1746,
      y: 200,
      ease: Power0.easeNone
    }
  }]
}

function initAnimation() {
  // delay=0.1 表示滚动到10%开始播放动画
  // duration=0.1 表示运动时间占滚动的百分比
  for (let key in animationsOptions) {
    if (animationsOptions.hasOwnProperty(key)) {
      let obj = animationsOptions[key];
      for (let i = 0; i < obj.length; i++) {
        let act;
        let target;
        if (obj[i].prop) {
          target = sprites[key][obj[i].prop];
        } else {
          target = sprites[key];
        }
        if (obj[i].from & obj[i].to) {
          act = TweenMax.fromTo(target, obj[i].duration, obj[i].from, obj[i].to);
        } else if (obj[i].from) {
          act = TweenMax.from(target, obj[i].duration, obj[i].from);
        } else if (obj[i].to) {
          act = TweenMax.to(target, obj[i].duration, obj[i].to);
        }
        let tm = new TimelineMax({
          delay: obj[i].delay
        });
        tm.add(act, 0);
        tm.play();
        timeline.add(tm, 0);
      }
    }
  }
}
// ===================================================================
// let act;
// let tm;

// act = TweenMax.to(scenes.scene1,0.11,{x:2400})
// tm = new TimelineMax({delay:0});
// tm.add(act,0);
// tm.play();
// timeline.add(tm,0);