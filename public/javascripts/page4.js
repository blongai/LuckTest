// 
// -----------------占卜页面----------------------

// 
var spriteArr = [sprite.img100, sprite.img99, sprite.img103, sprite.img102, sprite.img101, sprite.img98, sprite.img96, sprite.img97]
var messageBox = ['.messageItem1', '.messageItem2', '.messageItem3', '.messageItem4', '.messageItem5', '.messageItem6', '.messageItem7']
// 删除上一个页面的精灵-准备转场-拉回比例-添加占卜页精灵 ------让卡牌点击层出现，注册点击事件。
function cutSceneNext7() {
  // // 提前随机一张塔罗牌
  answerJudge(ChooseFour.title);
  // 禁用点击类名去掉,以免下次不可选择答案
  quesitionBox.classList.remove('removeClick');
  console.log('暂时-已经将Loding页所有DIV删除');
  loadingBackground.remove();

  // 篇章更换为4
  writings.style.background = "url('../images/writings4.png') no-repeat";
  // 让cardBox卡牌翻转层DIV显示出来
  cardBox.style.display = 'block';
  //删除上页所有精灵
  app.stage.removeChildren();
  console.log('精灵再次全部清除');
  // 题目透明度逐渐下降并消失，避免影响后面卡牌选择层
  console.log('题目透明度逐渐下降-消失')
  TweenMax.to('#quesitionQ1-box', 1, {
    alpha: 0,
    onComplete: () => {
      quesitionBox.style.display = 'none'; 
    }
  })

  // 遮罩出现
  console.log('遮罩出现')
  shade.style.display = 'flex';

  //因为打电话...场景把画面连续顶了两次 为了后续精灵的坐标好控制 所以回归到0点 整体画面开始往下拉回原始比例
  new TweenMax(app.stage, 4, {
    y: 0,
    onComplete: () => {
      console.log('整体画面已经往下拉回Y=0的原始比例')
    }
  })
  //预先给卡牌层注册点击事件
  for (var g = 0; g < pokerItems.length; g++) {
    pokerItems[g].addEventListener('click', (e) => {
      if (e.srcElement.className) {
        console.log('进入占卜牌点击反馈函数');
        choosePokerCar();
        console.log('选卡成功,点击层已经关闭,禁止点击')
        poker.style.display = 'none';
      }
      if (e.srcElement.className == 'poker-left poker-item') {
        console.log('YouChoose-left!')
        // 选择卡牌后让卡牌抖动-透明度降低-消失 --- 后续大卡牌出现切入点为水晶球旋转动画处
        TweenMax.to(sprite.img103, 1, {
          ease: Elastic.easeOut.config(1, 0.1),
          x: 175,
          onStart: () => {
            TweenMax.to(sprite.img103, 1, {
              alpha: 0,
            })
          }
        })
      } else if (e.srcElement.className == 'poker-center poker-item') {
        console.log('YouChoose-center!')
        // 选择卡牌后让卡牌抖动-透明度降低-消失 --- 后续大卡牌出现切入点为水晶球旋转动画处
        TweenMax.to(sprite.img102, 2, {
          ease: Elastic.easeOut.config(1, 0.1),
          x: 365,
          onStart: () => {
            TweenMax.to(sprite.img102, 1, {
              alpha: 0,
            })
          }
        })
      } else if (e.srcElement.className == 'poker-right poker-item') {
        console.log('YouChoose-right!')
        // 选择卡牌后让卡牌抖动-透明度降低-消失 --- 后续大卡牌出现切入点为水晶球旋转动画处
        TweenMax.to(sprite.img101, 2, {
          ease: Elastic.easeOut.config(1, 0.1),
          x: 540,
          onStart: () => {
            TweenMax.to(sprite.img101, 1, {
              alpha: 0,
            })
          }
        })
      }
    })
  }

  //2s之后遮罩再关闭，精灵再出现
  setTimeout(() => {
    // 遮罩关闭
    console.log('遮罩关闭')
    shade.style.display = 'none';

    //占卜页面相关精灵开始进入
    console.log("占卜页面相关精灵开始进入")
    app.stage.addChild(sprite.img100, sprite.img99, sprite.img5, sprite.img103, sprite.img102, sprite.img101, sprite.img98, sprite.img96, sprite.img97, )

    sprite.img97.anchor.set(0.5);
    sprite.img97.alpha = 0;
    sprite.img97.position.set(355, 720);
    sprite.img100.anchor.set(0.5);
    sprite.img100.position.set(375, 280);
    sprite.img99.anchor.set(0.5);
    sprite.img99.position.set(375, 400);
    sprite.img101.anchor.set(0.5);
    sprite.img101.alpha = 0;
    sprite.img101.scale.set(0.9);
    sprite.img101.rotation = 0.5;
    sprite.img101.position.set(745, 780);
    sprite.img102.anchor.set(0.5);
    sprite.img102.alpha = 0;
    sprite.img102.scale.set(0.9);
    sprite.img102.position.set(355, 650);
    sprite.img103.anchor.set(0.5);
    sprite.img103.alpha = 0;
    sprite.img103.scale.set(0.9);
    sprite.img103.position.set(5, 780);
    sprite.img103.rotation = -0.5;
    sprite.img98.anchor.set(0.5);
    sprite.img98.position.set(380, 1550);
    sprite.img98.scale.set(0.9);
    sprite.img98.alpha = 0;
    sprite.img96.anchor.set(0.5);
    sprite.img96.scale.set(0.9);
    sprite.img96.position.set(378, 1208);
    sprite.img96.alpha = 0;


    //深夜占卜 文字 星星
    TweenMax.fromTo([sprite.img100, sprite.img99, sprite.img5], 2, {
      alpha: 0,
    }, {
      alpha: 1,
    })

    //占卜人物先出来，此时卡牌还未出现
    TweenMax.to(sprite.img98, 2, {
      y: 1150,
      alpha: 1,
      onComplete: () => {
        //人物出现完毕之后 让卡牌点击层DIV出现 避免出现太早
        poker.classList.add('poker');
        // ------------此时卡牌出现-----------------
        //左边卡牌 左边弹出
        TweenMax.staggerTo([sprite.img103], 2, {
          ease: Elastic.easeOut.config(1, 0.3),
          x: 185,
          alpha: 1,
          rotation: 0,
          onStart: () => {
            //让卡牌上下动 形成呼吸的效果
            TweenMax.to(sprite.img103, 1.5, {
              y: 810,
              repeat: -1,
              yoyo: true,
              ease: Linear.easeNone,
              delay: 0.7
            });
          }
        })
        // 中间卡牌从下往上
        TweenMax.fromTo([sprite.img102], 0.5, {
          alpha: 0,
          y: 900
        }, {
          alpha: 1,
          y: 650,
          onComplete: () => {
            //让卡牌上下动 形成呼吸的效果
            TweenMax.to(sprite.img102, 1.5, {
              y: 690,
              repeat: -1,
              yoyo: true,
              ease: Linear.easeNone,
              delay: 0.5,
            });
          }
        })
        //右边卡牌
        TweenMax.staggerTo([sprite.img101], 2, {
          ease: Elastic.easeOut.config(1, 0.3),
          x: 530,
          alpha: 1,
          rotation: 0,
          onStart: () => {
            //让卡牌上下动 形成呼吸的效果
            TweenMax.to(sprite.img101, 1.5, {
              y: 810,
              repeat: -1,
              yoyo: true,
              ease: Linear.easeNone,
              delay: 0
            });
          }
        })
      }
    })
  }, 1000)
}

//占卜牌点击反馈 --水晶球开始转动 --卡牌放大 翻页显示效果
function choosePokerCar() {
  console.log("已进入卡牌点击反馈函数");
  //如果用户选择卡牌，先让水晶球透明度变为1
  TweenMax.to(sprite.img96, 2, {
    alpha: 1,
  })
  //开始循环转动水晶球。
  TweenMax.to(sprite.img96, 3, {
    repeat: -1,
    yoyo: false,
    ease: Linear.easeNone,
    delay: 0,
    rotation: 360,
    onStart: () => {
      console.log("此时水晶球开始转动");
      // 大卡牌以及背景发光效果 从小到大旋转出现 旋转完毕后1S 卡牌自动翻转过来
      TweenMax.to(['.container'], 4, {
        alpha: 1,
        rotation: 5760,
        onStart: () => {
          TweenMax.to([sprite.img97], 3.8, {
            alpha: 1,
            onComplete: () => {
              console.log('卡牌旋转完毕,准备翻转.');
              card.classList.add('flipped');
              // 翻转完毕,准备调用函数隐藏或清理精灵,信息条出现
              setTimeout(() => {
                messageArise();
              }, 2000)
            }
          })
        }
      })
      setTimeout(() => {
        //转动后的2-3s将水晶球逐渐停止并降低透明度
        TweenMax.to(sprite.img96, 2, {
          alpha: 0,
          rotation: 0
        })
      }, 2500)
    }
  });
}


function messageArise() {
  console.log('messageArise-进入信息条逐条出现阶段,每出现一条,上面每一条透明度减少10%');
  TweenMax.to(spriteArr, 2, {
    alpha: 0,
  })
  // 先让DIV卡牌加过渡属性,缩小一半,再定位到聊天框位置 层次加1 防止出现在信息条的下面.
  cardBox.style.transition = '1s';
  cardBox.style.transform = 'scale(0.47)';
  cardBox.style.left = '-0.6%';
  cardBox.style.top = '9.8%';
  cardBox.style.zIndex = 1;
  // 

  message.style.display = 'block';

  // 信息条一条条弹出
  TweenMax.staggerTo(messageBox, 1, {
    ease: Elastic.easeOut.config(1, 0.1),
    x: 0,
    alpha: 1,
    //0.7秒出现一条信息
  }, 0.7);
  // 7s之后把信息条左边拉 准备转场
  setTimeout(() => {
    // 信息条拉到左边
    TweenMax.staggerTo([messageBox], 1, {
      x: -800
    });
    // 卡牌透明度快速消失
    TweenMax.staggerTo('.container', 0.1, {
      alpha: 0,
      onComplete: () => {
        // 测试结束，跳转结果页
        testResult();
      }
    });
  }, 7000)
}

// 测试结果函数
function testResult() {
  console.log('所有页面精灵已删除，测试结果层DIV出现。');
  app.stage.removeChildren();
  testResultBox.style.display = 'block';
  TweenMax.staggerTo('.testResult', 1, {
    alpha: 1,
    onComplete: () => {
      // 让用户可见层显示
      shareContentBox.style.display = 'block';
      html2canvas2image();
      console.log('用户保存透明层已出现，可长按保存')
    }
  });
}
