//————————————————————————————————————————————
// * 首页精灵加动画-
//————————————————————————————————————————————
function cutSceneNext1() {
  // 星星
  // RenderingStars();
  var tl = new TimelineLite();
  console.log('已经将Loding页所有DIV删除');
  loadingBackground.remove();
  app.stage.addChild(sprite.img37, sprite.img5, sprite.img4, sprite.img2, sprite.img3, sprite.img1, sprite.img6, sprite.img7, sprite
    .img0);
  sprite.img0.position.set(680, 850);
  sprite.img1.position.set(-730, 200);
  sprite.img2.position.set(-560, 500);
  sprite.img3.position.set(800, 180);
  sprite.img4.position.set(0, 980);
  sprite.img6.position.set(50, 1000);
  sprite.img7.position.set(40, 978);
  // 首页四张卡牌出现
  tl.to(sprite.img2, 1, {
      ease: Elastic.easeOut.config(1, 0.5),
      x: -60
    }, 0)
    .to(sprite.img3, 2, {
      ease: Elastic.easeOut.config(1, 0.2),
      x: 400,
    }, 1)
    .to(sprite.img0, 2, {
      ease: Elastic.easeOut.config(1, 0.2),
      x: 480,
    }, 1)
    .to(sprite.img1, 2.5, {
      ease: Elastic.easeOut.config(1, 0.3),
      x: 30
    }, 1)
    //星星循环透明度
    .to([sprite.img5, sprite.img37], 1, {
      alpha: 0.1,
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone,
    }, 0)
    //小人光效循环透明度
    .to(sprite.img7, 0.5, {
      alpha: 0,
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone,
    }, 0)
    //首页英文出现
    .to(sprite.img4, 1, {
      alpha: 0,
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone,
      onStart: () => {
        setTimeout(function () {
          console.log('正在进入缩放');
          // 缩放前先清除类名
          body.classList.remove('scale-max');
          body.classList.remove('scale-min');
          body.classList.add('scale-max');
          setTimeout(function () {
            cutSceneNext2();
          }, 1000)
        }, 4000);
      }
    }, 0);
}
//————————————————————————————————————————————
// * 首页过渡完毕-放大-缩小-加载信息条弹出页
//————————————————————————————————————————————
function cutSceneNext2() {
  var tl = new TimelineLite();
  body.classList.add('scale-min');
  body.style.transformOrigin = '70% 60%';
  var alphaSpr = [sprite.img11, sprite.img12, sprite.img13, sprite.img14, sprite.img15];
  var spriteArr = [...alphaSpr, sprite.img8, sprite.img9, sprite.img10, sprite.img16];
  app.stage.removeChild(sprite.img0, sprite.img1, sprite.img2, sprite.img3, sprite.img4, sprite.img6, sprite.img7);
  alphaSet(alphaSpr);
  app.stage.addChild(...spriteArr);
  sprite.img8.position.set(-200, -200);
  sprite.img9.position.set(400, -200);
  sprite.img10.position.set(-100, -200);
  sprite.img11.position.set(-45, 210);
  sprite.img12.position.set(-45, 330);
  sprite.img13.position.set(-45, 450);
  sprite.img14.position.set(-45, 620);
  sprite.img15.position.set(-45, 790);
  sprite.img16.position.set(50, 60);
  //页面缩放比例恢复正常1s后开始出现信息条/0.7秒每条/最后一个动画结束后转场
  setTimeout(() => {
      TweenMax.staggerTo([...alphaSpr], 7, {
        ease: Elastic.easeOut.config(1, 0.1),
        x: 65,
        alpha: 1,
        onComplete: () => {
          TweenMax.staggerTo([spriteArr], 2, {
            ease: Elastic.easeOut.config(1, 1),
            x: -500,
            alpha: 0,
            onStart: () => {
              cutSceneNext3();
              // “篇章1”出现
              writings.style.opacity = 1;
            },
            onComplete: () => {
              app.stage.removeChild(...alphaSpr, ...spriteArr);
            }
          });
        }
      }, 0.7);
    },
    1000)
  tl.to(sprite.img8, 7, {
      ease: Elastic.easeOut.config(1, 0.5),
      y: 900,
      x: 200
    }, 1)
    .to(sprite.img9, 8, {
      ease: Elastic.easeOut.config(1, 0.5),
      y: 1000,
      x: 100
    }, 1)
    .to(sprite.img10, 9, {
      ease: Elastic.easeOut.config(1, 0.5),
      y: 1150,
      x: 100,
    }, 1);
}

//————————————————————————————————————————————
// * PAGE-1 堵车
//————————————————————————————————————————————
function cutSceneNext3() {
  var tl = new TimelineLite();
  //随机数组生成两组题目
  for (var i = 0; i < problem.length; i++) {
    problem[i].innerHTML = optionsRandom(Q1.opations[i])
  }
  var alphaSpr = [sprite.img17, sprite.img18, sprite.img19, sprite.img20, sprite.img21, sprite.img22, sprite.img23, sprite.img27, sprite.img30]
  app.stage.addChild(sprite.img26, sprite.img37, sprite.img24, sprite.img28, sprite.img17, sprite.img18, sprite.img19, sprite.img20, sprite.img21, sprite.img27, sprite.img30, sprite.img29, sprite.img22, sprite.img23, );
  alphaSet(alphaSpr); //透明度组
  sprite.img17.position.set(110, 1400)
  sprite.img18.position.set(110, 1550)
  sprite.img19.position.set(110, 1700)
  sprite.img20.position.set(110, 1850)
  sprite.img21.position.set(150, 1100)
  sprite.img22.position.set(80, 300)
  sprite.img23.position.set(200, 800)
  sprite.img24.position.set(-28, 400)
  sprite.img26.position.set(170, 180)
  sprite.img27.position.set(170, 220)
  sprite.img28.position.set(-500, -500)
  sprite.img29.position.set(600, 120)
  sprite.img30.position.set(200, 1200)
  //堵车图渐渐出现
  // 雨
  rainSwitch();
  TweenMax.fromTo([sprite.img24], 2, {
    alpha: 0,
  }, {
    alpha: 1,
  });

  //上班堵车优先高亮
  TweenMax.fromTo([sprite.img26], 2, {
    alpha: 0,
  }, {
    alpha: 1,
  });
  //星星透明度
  TweenMax.fromTo([sprite.img5, sprite.img37], 2, {
    alpha: 1,
  }, {
    alpha: 0.2,
    onComplete: () => {
      //交通播报出现
      TweenMax.fromTo([sprite.img27], 1, {
        alpha: 0,
      }, {
        alpha: 1,
      })
      //上班堵车-变暗-往左
      TweenMax.fromTo([sprite.img26], 0.2, {
        alpha: 1,
      }, {
        alpha: 0.4,
        x: 80,
        onComplete: () => {
          sprite.img28.position.set(350, 670);
          sprite.img28.width = 0;
          sprite.img28.height = 0;
          // “阿” 弹出
          TweenMax.staggerTo([sprite.img28], 1.5, {
              ease: Elastic.easeOut.config(1, 0.1),
              x: 330,
              width: 90,
              height: 90,
              onComplete: () => {
                //主要精灵透明度-降低
                TweenMax.fromTo([sprite.img27, sprite.img28, sprite.img24], 1, {
                  alpha: 1,
                }, {
                  alpha: 0.4,
                  onComplete: () => {
                    //人物对话右边滑进
                    TweenMax.fromTo([sprite.img29], 1.5, {
                      x: 500
                    }, {
                      x: -100,
                      onComplete: () => {
                        //对话框1
                        TweenMax.fromTo([sprite.img22, ], 1.5, {
                          alpha: 0,
                        }, {
                          alpha: 1,
                          onComplete: () => {
                            //对话框2
                            TweenMax.fromTo([sprite.img23, ], 1.5, {
                              alpha: 0,
                            }, {
                              alpha: 1,
                              //整体精灵往上推动
                              onComplete: () => {
                                var questionQ1 = [sprite.img21, sprite.img30]
                                new TweenMax(questionQ1, 1.5, {
                                  alpha: 1
                                });
                                console.log('开始往上推动')
                                new TweenMax(app.stage, 1.5, {
                                  y: -800,
                                  onComplete: () => {
                                    //让题目显示出来 0.5s过渡
                                    quesitionBox.style.opacity = 1;
                                    //调用选择答案反馈函数
                                    clickAnswer();
                                  }
                                });
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                });
              }
            },
            1);
        }
      })
    }
  });
}


//选择答案
function clickAnswer() {
  for (var i = 0; i < 4; i++) {
    //Q1 题目点击反馈
    problem[i].addEventListener('click', (e) => {
      for (var x = 0; x < 2; x++) {
        if (e.target) {
          //选择任何一个答案那一瞬间都让透明度变为0.6
          e.target.style.opacity = 0.6;
        }
        if (e.target.innerText == Q1.opations[3][x].front.title) {
          //选择答案并且答案对应后出现反馈 2s后执行调转Q3 避免影响到后续点击事件
          setTimeout(() => {
            cutSceneNext3s()
          }, 1500)
          //遮罩出现
          shade.style.display = 'flex';
          //雷佳音表情包同时出现
          new TweenMax('#Lei', 1, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 404,
            height: 375
          });
          //emoji表情包同时弹出
          new TweenMax('.emoji-item', 2.5, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 419,
            height: 140
          });
        } else if (e.target.innerText == Q1.opations[0][x].front.title) {
          //选择答案并且答案对应后出现反馈 2s后执行调转Q3 避免影响到后续点击事件
          setTimeout(() => {
            cutSceneNext3s()
          }, 1500)
          //遮罩出现
          shade.style.display = 'flex';
          //替换雷佳音表情包
          lei.src = '/images/52.png';
          //替换emoji路径
          emoji.style.backgroundImage = "url('../images/60.png')";
          //雷佳音表情包同时出现
          new TweenMax('#Lei', 1, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 412,
            height: 298
          });
          //emoji表情包同时弹出
          new TweenMax('.emoji-item', 2.5, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 245,
            height: 143,
            x: 40,
            y: 30
          });
        } else if (e.target.innerText == Q1.opations[1][x].front.title) {
          //选择答案并且答案对应后出现反馈 2s后执行调转Q3 避免影响到后续点击事件
          setTimeout(() => {
            cutSceneNext3s()
          }, 1500)
          //遮罩出现
          shade.style.display = 'flex';
          //替换雷佳音表情包
          lei.src = '/images/48.png';
          //替换emoji路径
          emoji.style.backgroundImage = "url('../images/59.png')";
          //雷佳音表情包同时出现
          new TweenMax('#Lei', 1, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 406,
            height: 314
          });
          //emoji表情包同时弹出
          new TweenMax('.emoji-item', 2.5, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 402,
            height: 255,
          });
        } else if (e.target.innerText == Q1.opations[2][x].front.title) {
          //选择答案并且答案对应后出现反馈 2s后执行调转Q3 避免影响到后续点击事件
          setTimeout(() => {
            cutSceneNext3s()
          }, 1500)
          //遮罩出现
          shade.style.display = 'flex';
          //替换雷佳音表情包
          lei.src = '/images/44.png';
          //替换emoji路径
          emoji.style.backgroundImage = "url('../images/58.png')";
          //雷佳音表情包同时出现
          new TweenMax('#Lei', 1, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 438,
            height: 317
          });
          //emoji表情包同时弹出
          new TweenMax('.emoji-item', 2.5, {
            ease: Elastic.easeOut.config(1, 0.3),
            width: 203,
            height: 40,
            x: 5,
            y: -55
          });
        }
      }
    })
  }
}


//Q2-场景- 准备切换场景偶遇
function cutSceneNext3s() {
  console.log('准备切换Q2场景-偶遇');
  //遮罩透明度降至0,准备画面切换,此时不能再次点击答案
  shade.style.opacity = 0;

  //Q1画面进行位置变化并移动,透明度降低,准备清除精灵
  //堵车画面-往下位移
  TweenMax.fromTo(sprite.img24, 1.5, {
    alpha: 1,
  }, {
    alpha: 0,
    y: 1300,
    onStart: () => {
      //开车画面往下至左移动
      TweenMax.fromTo(sprite.img29, 1.5, {
        alpha: 1,
        rotation: 0,
      }, {
        alpha: 0,
        y: 600,
        rotation: -0.1,
      }, 1);
      //无关精灵透明度降至0 包括雨水 星星除外
      TweenMax.fromTo([sprite.img21, sprite.img22, sprite.img23, sprite.img30, sprite.img26, sprite.img27, sprite.img28], 1, {
        alpha: 1,
      }, {
        alpha: 0,
      }, 1);
      console.log('题目画面往上至右位移')
      //题目画面往上至右位移
      TweenMax.fromTo('#quesitionQ1-box', 2, {
        alpha: 1,
      }, {
        alpha: 0,
        y: -800,
        x: 1,
        scale: 0.6,
        rotation: -8,
        onComplete: () => {
          //题目往上飘走时，同时遮罩去掉 以防影响后面点击事件
          shade.style.display = 'none';
          // 场景恢复上去 (未被顶时-正常状态)
          new TweenMax(app.stage, 1.5, {
            y: 0,
            onComplete: () => {
              console.log('场景恢复未被顶状态')
            }
          });
          //Q1画面变化后的版本 逐渐出现
          app.stage.addChild(sprite.img71);
          sprite.img71.position.set(0.0);
          TweenMax.fromTo(sprite.img71, 2, {
            alpha: 0,
          }, {
            alpha: 1,
          }, 1);
          //大金表从左边出现逐渐放大,其余精灵透明度逐渐降低,此页面精灵全部清除
          console.log('大金表,时间从左边出现逐渐放大');
          app.stage.addChild(sprite.img61, sprite.img72);
          sprite.img61.position.set(-1000, 500)
          sprite.img72.position.set(-1000, 400)
          //大金表出现
          TweenMax.fromTo(sprite.img61, 1.5, {
            alpha: 0.5,
          }, {
            alpha: 1,
            x: 100,
            rotation: -0.1,
          }, 1);
          //时间PM 3:09 出现
          TweenMax.fromTo(sprite.img72, 0.5, {
            alpha: 0.5,
          }, {
            alpha: 1,
            x: 100,
          }, 1);
          setTimeout(() => {
            // 篇章更换为2
            writings.style.background = "url('../images/writings2.png') no-repeat";
            //整个盒子放大 (大金表放大)
            body.style.transformOrigin = '70% 60%';
            console.log('正在进入缩放');
            // 先清除一下上一次缩放遗留的类名，以免再次添加失效。
            body.classList.remove('scale-max');
            body.classList.remove('scale-min');
            body.classList.add('scale-max');
            setTimeout(() => {
              console.log('比例已经恢复正常')
              body.classList.add('scale-min');
              //调用Q2 偶遇场景函数 转换成功
              cutSceneNext4();
            }, 1000)
          }, 2000)
        }
      });
    }
  }, 1);


}

//Q2 偶遇场景 - 正式切换偶遇, 咖啡店, 添加精灵
function cutSceneNext4() {
  console.log('已经进入L记咖啡');
  //让刚刚选择的答案透明度从60 - 100 防止后面题目出来时还是60透明度
  console.log('答案透明度已从60%恢复至100%,不影响重新选用')
  for (var h = 0; h < 4; h++) {
    problem[h].style.opacity = 1;
  }
  //删除堵车页-精灵
  app.stage.removeChildren();
  // 关键切入点 - - - 连接page2动画
  // 要等大金表缩放回来之后再调用，防止精灵抢先出现
  setTimeout(() => {
    cutSceneNext5();
  }, 1000)
}