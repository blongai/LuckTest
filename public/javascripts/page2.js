// 
// --------------------------------------------------
// 

// 第二部分 - L记咖啡开始

function cutSceneNext5() {

  console.log('暂时-已经将Loding页所有DIV删除');
  loadingBackground.remove();


  console.log('缩放坐标点已经预设成偶遇选择题中心点=>=>(50% 70%)');
  body.style.transformOrigin = '50% 70%';
  app.stage.addChild(sprite.img37, sprite.img73, sprite.img61, sprite.img62, sprite.img63, sprite.img64, sprite.img65, sprite.img67, sprite.img68, sprite.img69, sprite.img74);
  sprite.img73.position.set(130, 150);
  sprite.img61.position.set(78, 50);
  sprite.img61.scale.set(0.95, 0.95);
  sprite.img62.position.set(120, 950);
  sprite.img62.alpha = 0;
  sprite.img63.position.set(-30, 1400)
  sprite.img63.alpha = 0;
  //心线
  sprite.img64.position.set(100, 2300);
  sprite.img65.position.set(100, 2293);
  sprite.img64.alpha = 0;
  sprite.img65.alpha = 0;
  // sprite.img66.position.set(100, 2300);
  // 心
  sprite.img67.position.set(380, 2330);
  sprite.img68.position.set(385, 2330);
  sprite.img69.position.set(390, 2330);
  sprite.img67.alpha = 0;
  sprite.img68.alpha = 0;
  sprite.img69.alpha = 0;
  //设置精灵的控制点为其中心(包括宽高 位置 旋转的参考点)
  sprite.img67.anchor.set(0.5);
  sprite.img68.anchor.set(0.5);
  sprite.img69.anchor.set(0.5);
  // quesiton-2
  sprite.img74.position.set(150, 2500);
  sprite.img74.alpha = 0;

  //动画部分---------PM:3.09 大金表 星星 从上缓下
  TweenMax.fromTo([sprite.img61], 0.5, {
    alpha: 0,
    rotation: 0.1
  }, {
    alpha: 1,
    y: 250,
    rotation: 0
  })
  TweenMax.fromTo([sprite.img37], 2, {
    alpha: 0,
    y: -150
  }, {
    alpha: 1,
    y: 0
  })
  //度过了....旁白出现
  TweenMax.staggerTo([sprite.img62], 1, {
    ease: Elastic.easeOut.config(1, 0.2),
    y: 850,
    alpha: 1,
  })
  TweenMax.fromTo([sprite.img73], 0.5, {
    alpha: 0,
    y: -100
  }, {
    alpha: 1,
    y: 150,
    onComplete: () => {
      setTimeout(() => {
        // L记咖啡出现
        TweenMax.staggerTo([sprite.img63], 2, {
          ease: Elastic.easeOut.config(1, 0.2),
          y: 1120,
          alpha: 1,
        })
        //星星留下 往下走 效果较佳
        TweenMax.staggerTo([sprite.img37], 15, {
          y: 1620,
          alpha: 1,
        })
        //同时画面往上缓动推动
        new TweenMax(app.stage, 4, {
          y: -1100,
          onComplete: () => {
            console.log('画面推动完成，对话框出现------开始出现心线---心');
            TweenMax.fromTo([sprite.img65], 2, {
              alpha: 0.1,
              repeat: -1,
              onComplete: () => {
                //定时器控制红色心线出现的时差
                setTimeout(() => {
                  TweenMax.fromTo([sprite.img64], 2, {
                    alpha: 0.1,
                    repeat: -1,
                  }, {
                    alpha: 1,
                    repeat: -1,
                  })
                }, 1000)
              }
            }, {
              alpha: 1,
              repeat: -1,
            });
            // 心 左右来回摆动
            // 蓝色
            TweenMax.fromTo([sprite.img67], 0.5, {
              ease: Elastic.easeOut.config(1, 0.1),
              alpha: 0.5,
              repeat: -1,
              width: 70,
              height: 70
            }, {
              alpha: 1,
              repeat: -1,
              x: 375,
              width: 80,
              height: 80
            })
            //红色
            TweenMax.fromTo([sprite.img68], 1, {
              ease: Elastic.easeOut.config(1, 0.1),
              alpha: 0.5,
              repeat: -1,
              width: 70,
              height: 70,
              onComplete: () => {
                console.log('quesiton-2 准备顶上,调用clickAnswer2函数');
                clickAnswer2();
              }
            }, {
              alpha: 1,
              repeat: -1,
              width: 80,
              height: 80,
            })
            // 绿色
            TweenMax.fromTo([sprite.img69], 0.5, {
              ease: Elastic.easeOut.config(1, 0.1),
              alpha: 0.5,
              repeat: -1,
              width: 70,
              height: 70
            }, {
              alpha: 1,
              repeat: -1,
              x: 395,
              width: 80,
              height: 80
            })
          }
        });
      }, 2000)
    }
  })
}

//问题quesition 偶遇 选择题阶段
function clickAnswer2() {
  //随机数组生成两组题目
  for (var i = 0; i < problem.length; i++) {
    problem[i].innerHTML = optionsRandom(Q2.opations[i])
  }

  //恢复上个页面的题目被位移的问题---原路返回
  TweenMax.fromTo('#quesitionQ1-box', 1, {
    y: -800,
    alpha: 0,
    rotation: -8,
    scale: 0.6,
  }, {
    alpha: 1,
    rotation: 0,
    scale: 1,
    y: -250,
    x: -270,
    //严重踩坑，此函数放到上面会调用五次
    onComplete: () => {
      console.log('开始进入选择反馈函数')
      clickAnswerCase();
    }
  })


  quesitionBox.style.top = 65 + "%";
  console.log('进入偶遇选择题阶段')
  //同时画面继续往上缓动推动
  TweenMax.fromTo([sprite.img74], 1, {
    alpha: 0,
  }, {
    alpha: 1,
  })
  new TweenMax(app.stage, 2, {
    y: -2000,
    onComplete: () => {
      TweenMax.fromTo('#quesitionQ1-box', 1, {
        alpha: 0,
      }, {
        alpha: 1,
      })
    }
  })
}

//选择题选择之后 反馈表现
function clickAnswerCase() {
  for (var i = 0; i < 4; i++) {
    problem[i].addEventListener('click', (e) => {
      for (var x = 0; x < 4; x++) {
        //整个盒子放大---根据用户选择的答案-改变放大坐标 调用缩放函数Zoom
        if (e.target.innerText === Q2.opations[0][x].front.title) {
          body.style.transformOrigin = '50% 60%';
          Zoom();
        } else if (e.target.innerText === Q2.opations[1][x].front.title) {
          body.style.transformOrigin = '50% 70%';
          Zoom();
        } else if (e.target.innerText === Q2.opations[2][x].front.title) {
          body.style.transformOrigin = '50% 80%';
          Zoom();
        } else if (e.target.innerText === Q2.opations[3][x].front.title) {
          body.style.transformOrigin = '50% 90%';
          Zoom();
        }
        //根据答案给出不同音效 暂未实现
        if (e.target) {
          //选择任何一个答案那一瞬间都让透明度变为0.6
          e.target.style.opacity = 0.6;
          // 点击一次之后调用此方法添加类名让DIV点击禁用。
          console.log('点击禁用类名已添加,当前不可再次点击.');
          quesitionBox.classList.add('removeClick');
        }
      }
    })
  }
}

// 缩放函数
function Zoom() {

  // // 首先清除一下函数类名，防止Q3题库选择时判断条件还是相同。会导致两套动画同时进行。严重踩坑BUG。
  // for (var h = 0; h < 4; h++) {
  //   console.log('已经删除类名');
  //   problem[h].classList.remove("quesitionQ1-item" + h);
  // }
  console.log('ZOOM函数')
  console.log('正在进入缩放');
  body.classList.remove('scale-max');
  body.classList.remove('scale-min');
  body.classList.add('scale-max');
  setTimeout(() => {
    console.log('缩放比例已经恢复正常');
    body.classList.add('scale-min');
    // 每一次缩放完将坐标点回归到题目那块位置中心左右
    body.style.transformOrigin = '80% 100%';
    // 每一次缩放完把点击禁用类名去掉,否则下一道题点击不了.
    console.log('点击禁用类名已清除,下次可再次点击.');
    quesitionBox.classList.remove('removeClick');
    // 关键点 切入page3 - 打电话场景
    cutSceneNext6(); // 进入page3 
  }, 1000);


}