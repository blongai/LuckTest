// 
// -------------------打电话场景-----------------
// 

function cutSceneNext6() {

  console.log('暂时-已经将Loding页所有DIV删除');
  loadingBackground.remove();

  // 找不到精灵踩坑点
  //因为偶遇场景把画面连续顶了两次 为了后续精灵的坐标好控制 所以回归到0点 整体画面开始往下拉回原始比例
  new TweenMax(app.stage, 2, {
    y: 0,
    onComplete: () => {
      console.log('整体画面已经往下拉回Y=0的原始比例');
      //闹钟时间 闪烁两次
      TweenMax.fromTo([sprite.img111], 0.8, {
        alpha: 0,
      }, {
        alpha: 1,
        onComplete: () => {
          TweenMax.fromTo([sprite.img111], 0.8, {
            alpha: 0,
          }, {
            alpha: 1,
          })
        }
      })
    }
  })
  // 篇章更换为3
  writings.style.background = "url('../images/writings3.png') no-repeat";
  console.log('已经从偶遇场景-进入打电话场景');
  console.log('已经从page2-进入page3 ');
  app.stage.removeChildren();
  console.log("页面精灵已经全部清除");
  quesitionBox.style.display = 'none';
  console.log('题目整体盒子消失');

  console.log('添加打电话场景精灵')
  app.stage.addChild(sprite.img5, sprite.img75, sprite.img110, sprite.img91, sprite.img111, sprite.img89, sprite.img112, sprite.img76,
    sprite.img77, sprite.img88, sprite.img90, sprite.img92, sprite.img83, sprite.img84, sprite.img85, sprite.img86, sprite.img87, sprite.img81, sprite.img93, sprite.img82, sprite.img78, sprite.img79, sprite.img80);
  sprite.img75.anchor.set(0.5);
  sprite.img75.scale.set(0.9);
  sprite.img75.position.set(435, 720);
  sprite.img110.anchor.set(0.5);
  sprite.img110.position.set(375, 300);
  sprite.img91.anchor.set(0.5);
  sprite.img91.position.set(375, 500);
  sprite.img111.anchor.set(0.5);
  sprite.img111.position.set(385, 505);
  sprite.img89.anchor.set(0.5);
  sprite.img89.position.set(375, 655);
  sprite.img112.anchor.set(0.5);
  sprite.img112.scale.set(0.9);
  sprite.img112.position.set(375, 910);
  sprite.img76.anchor.set(0.5);
  sprite.img76.position.set(185, 780);
  sprite.img77.anchor.set(0.5);
  sprite.img77.position.set(535, 1070);
  sprite.img88.anchor.set(0.5);
  sprite.img88.position.set(375, 1220);
  sprite.img90.anchor.set(0.5);
  sprite.img90.alpha = 0;
  sprite.img90.position.set(375, 800);
  sprite.img92.anchor.set(0.5);
  sprite.img92.alpha = 0;
  sprite.img92.position.set(150, 1300);
  sprite.img83.anchor.set(0.5);
  sprite.img83.alpha = 0;
  sprite.img83.position.set(220, 600);
  sprite.img84.anchor.set(0.5);
  sprite.img84.alpha = 0;
  sprite.img84.position.set(400, 750);
  sprite.img85.anchor.set(0.5);
  sprite.img85.alpha = 0;
  sprite.img85.position.set(400, 880);
  sprite.img86.anchor.set(0.5);
  sprite.img86.alpha = 0;
  sprite.img86.position.set(280, 1000);
  sprite.img87.anchor.set(0.5);
  sprite.img87.alpha = 0;
  sprite.img87.position.set(430, 1150);

  sprite.img81.anchor.set(0.5);
  sprite.img81.alpha = 0;
  sprite.img81.position.set(375, 1400);
  sprite.img93.anchor.set(0.5);
  sprite.img93.alpha = 0;
  sprite.img93.position.set(375, 1470);
  sprite.img82.anchor.set(0.5);
  sprite.img82.alpha = 0;
  sprite.img82.position.set(375, 935);

  // 选项反馈黑幕
  sprite.img78.anchor.set(0.5);
  sprite.img78.alpha = 0;
  sprite.img78.position.set(290, 1935);
  sprite.img79.anchor.set(0.5);
  sprite.img79.alpha = 0;
  sprite.img79.position.set(290, 1935);
  sprite.img80.anchor.set(0.5);
  sprite.img80.alpha = 0;
  sprite.img80.position.set(290, 1935);

  //全部元素透明度0-1
  TweenMax.fromTo([sprite.img75, sprite.img110, sprite.img91, sprite.img111, sprite.img89, sprite.img112, sprite.img76,
    sprite.img77, sprite.img88,
  ], 4, {
    alpha: 0,
  }, {
    alpha: 1,
    onComplete: () => {
      console.log('整体页面出现1-2s左右，嘟嘟...响起（省略号出动效）');
      // 嘟嘟...动效 无限震动
      TweenMax.staggerTo([sprite.img76], 0.6, {
        ease: Elastic.easeOut.config(1, 0.1),
        x: 175,
        repeat: -1,
        onStart: () => {
          TweenMax.staggerTo([sprite.img77], 0.6, {
            ease: Elastic.easeOut.config(1, 0.1),
            x: 545,
            repeat: -1,
            onStart: () => {
              //让周边射线精灵震动一次
              TweenMax.staggerTo([sprite.img75], 0.6, {
                ease: Elastic.easeOut.config(1, 0.1),
                x: 445,
                onComplete: () => {
                  setTimeout(() => {
                    console.log('射线震动完毕2s，即将切通话中页面。无关精灵透明度降至0');
                    //全部元素透明度1-0
                    TweenMax.staggerTo([sprite.img75, sprite.img110, sprite.img91, sprite.img111, sprite.img89, sprite.img112, sprite.img76,
                      sprite.img77, sprite.img88
                    ], 2, {
                      alpha: 0,
                    })
                    // 通话中出现，“跳过剧情”按钮出现。
                    // 严重踩坑,BUG.使用staggerTo中调用onComplete的次数取决于对象数组里面有多少个就调用多少次.
                    new TweenMax([sprite.img90, sprite.img92], 2, {
                      alpha: 1,
                      onComplete: () => {
                        // 通话字幕台词一条一条出现 1.5s一条 其中有两条停留较长
                        // BUG 会重新再来一次 已经解决
                        var tl = new TimelineLite();
                        tl.to(sprite.img83, 1.5, {
                          alpha: 1,
                        }).to(sprite.img84, 3.5, {
                          alpha: 1,
                        }).to(sprite.img85, 1.5, {
                          alpha: 1,
                        }).to(sprite.img86, 3.5, {
                          alpha: 1,
                        }).to(sprite.img87, 1.5, {
                          alpha: 1,
                          onComplete: () => {
                            // 调用函数 宠物问题准备往上顶。
                            console.log('这里出问题了吗？')
                            petFn();
                          }
                        })
                      }
                    })
                  }, 2000)
                }
              }, )
            }
          }, )
        }
      }, )
    }
  })

}

// '整体画面往上拉，Q3宠物问题往上顶。' 给Q3题目注册点击事件
function petFn() {
  console.log('整体画面往上拉，Q3宠物问题往上顶。');
  new TweenMax(app.stage, 1, {
    y: -700,
    onComplete: () => {
      // 让Q3题目模板显示 位置 透明度
      quesitionBox.style.opacity = 0;
      quesitionBox.style.display = 'block';
      quesitionBox.style.top = 75 + '%';
      TweenMax.staggerTo('#quesitionQ1-box', 0.5, {
        alpha: 1
      })
    }
  })
  // 将Q2遗留的题目内容改为Q3题库内容
  for (var i = 0; i < 4; i++) {
    console.log('题目已经更改为Q3题库，题目透明度恢复') //
    problem[i].innerHTML = optionsRandom(Q3.opations[i])
    // 让每道题 题目透明度变回1 避免上一次选择后未恢复
    problem[i].style.opacity = 1;
  }
  // 给题目注册点击事件
  for (var j = 0; j < 4; j++) {
    problem[j].addEventListener('click', (e) => {
      for (var x = 0; x < 2; x++) {
        console.log(e.target.innerText);
        console.log(e.srcElement.className);
        if (e.target) {
          e.target.style.opacity = 0.6;
          // 点击一次之后调用此方法添加类名让DIV点击禁用。
          quesitionBox.classList.add('removeClick');
          // 每点击一次都再次往上拉
          new TweenMax(app.stage, 0.5, {
            y: -1300,
            onStart: () => {
              //改变题目的位置和透明度，给反馈空间
              quesitionBox.style.top = 35 + '%';
              TweenMax.staggerTo('#quesitionQ1-box', 0.5, {
                alpha: 0.1
              })
            }
          })
          // 只要有点击，等动画结束调用此函数放大画面准备切入page4占卜页面
          setTimeout(() => {
            // 从窗帘处放大转场
            body.style.transformOrigin = '80% 100%';

            console.log('正在进入缩放');
            body.classList.remove('scale-max');
            body.classList.remove('scale-min');
            body.classList.add('scale-max');
            setTimeout(() => {
              console.log('缩放比例已经恢复正常')
              body.classList.add('scale-min');
              // 关键点 切入page4 - 占卜场景
              cutSceneNext7(); // 进入page4 
            }, 1000);
          }, 2000)
        }
        if (e.target.innerText === Q3.opations[0][x].front.title) {
          TweenMax.staggerTo([sprite.img80], 1, {
            alpha: 1
          })
        } else if (e.target.innerText === Q3.opations[2][0].front.title) {
          TweenMax.staggerTo([sprite.img78], 1, {
            alpha: 1
          })
        } else {
          // 无选项型反馈画面
          TweenMax.staggerTo([sprite.img79], 1, {
            alpha: 1
          })
        }
      }
    })
  }

  // 准备顶上,当前精灵透明度逐渐消失;
  // 通话中,跳过剧情,相关对话
  TweenMax.fromTo([sprite.img90, sprite.img92, sprite.img83, sprite.img84, sprite.img85, sprite.img86, sprite.img87], 1, {
    alpha: 1
  }, {
    alpha: 0
  })
  //同时 让quesition3 和 文字 和 挂断 出现
  TweenMax.staggerTo([sprite.img81, sprite.img82, sprite.img93], 0.5, {
    alpha: 1
  });
}