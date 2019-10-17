//————————————————————————————————————————————
// * 移动端适配方案
//————————————————————————————————————————————
var clienHeight = document.documentElement.clientHeight || document.body.clientHeight;
var viewWidth = 750;
var viewHeight = 1440;
var viewBl = viewHeight / viewWidth;
var b1 = viewWidth / viewHeight;
var b2 = window.screen.width / clienHeight;
var w1 = viewWidth / window.screen.width;
var h1 = w1 * clienHeight;
var n1 = h1 / clienHeight;
if (b1 >= b2) {
  viewWidth = (viewHeight / clienHeight) * window.screen.width
}
if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
  var version = parseFloat(RegExp.$1);
  if (version > 2.3) {
    var phoneScale = parseInt(window.screen.width) / viewWidth;
    document.write('<meta name="viewport" content="width=' + viewWidth + ", minimum-scale = " + phoneScale + ", maximum-scale = " + phoneScale + ', target-densitydpi=device-dpi">')
  } else {
    document.write('<meta name="viewport" content="width=' + viewWidth + ', target-densitydpi=device-dpi">')
  }
} else {
  document.write('<meta name="viewport" content="width=' + viewWidth + ', user-scalable=no, target-densitydpi=device-dpi">')
};
console.log('viewWidth=', viewWidth / 750)





//————————————————————————————————————————————
// * 全局动画速度
//————————————————————————————————————————————
TweenMax.globalTimeScale(1.25);
//————————————————————————————————————————————
// * 全局定义常用的pixi常量和方法
//————————————————————————————————————————————
const Application = PIXI.Application,
  loader = PIXI.loader,
  Sprite = PIXI.Sprite,
  SpriteFromImg = PIXI.Sprite.fromImage,
  w = 750 || window.screen.width,
  h = 1440 || window.screen.height;
var quesitionBox = document.getElementById('quesitionQ1-box'),
  problem = document.querySelectorAll('.quesitionQ1-item'),
  shade = document.getElementById('shade'),
  lei = document.getElementById('Lei'),
  emoji = document.getElementById('emoji-item'),
  poker = document.querySelector('#poker'),
  pokerItems = document.querySelectorAll('.poker-item'),
  canvas = document.getElementById('canvas-box'),
  loadingText = document.getElementById('loadingText'),
  loadingBackground = document.getElementById('loadingBackground'),
  card = document.getElementById('card'),
  cardBox = document.getElementById('container'),
  message = document.getElementById('message'),
  herder = document.getElementById('herder'),
  music = document.getElementById('music'),
  writings = document.getElementById('writings'),
  testResultBox = document.getElementById('testResult'),
  shareContentBox = document.getElementById('shareContent'),
  skip = document.getElementById('skip'),
  pokerBack = document.getElementById('back'),
  video = document.getElementById('video'),
  body = document.body;
console.log(w, h)


  //————————————————————————————————————————————
  // * Loading页企鹅/星星动效
  //————————————————————————————————————————————
  ! function () {
    //企鹅表情变化
    TweenMax.staggerTo('.penguinHeaderBottom', 1.5, {
      repeat: -1,
      yoyoEase: true,
      alpha: 1
    })
    //企鹅左手摆动
    TweenMax.staggerTo('.penguinArmLeft', 0.1, {
      alpha: 1,
      repeat: -1,
      yoyo: true,
      rotation: 25,
    })
    TweenMax.staggerTo('.penguinArmRight', 0.1, {
      //企鹅右手摆动
      alpha: 1,
      repeat: -1,
      yoyo: true,
      rotation: -25,
    })
    //星光来回闪烁
    TweenMax.staggerTo('.loadingStar', 0.5, {
      alpha: 0.5,
      repeat: -1,
      yoyo: true,
    })
  }()

//————————————————————————————————————————————
// * 精灵图集合 canvas舞台/场景
//————————————————————————————————————————————
const sprite = {
  // loadingBackgorund: SpriteFromImg('../images/loadingBackgorund.png'),
  img0: SpriteFromImg('../images/0.png'),
  img1: SpriteFromImg('../images/1.png'),
  img2: SpriteFromImg('../images/2.png'),
  img3: SpriteFromImg('../images/3.png'),
  img4: SpriteFromImg('../images/4.png'),
  img5: SpriteFromImg('../images/5.png'),
  img6: SpriteFromImg('../images/6.png'),
  img7: SpriteFromImg('../images/7.png'),
  img8: SpriteFromImg('../images/8.png'),
  img9: SpriteFromImg('../images/9.png'),
  img10: SpriteFromImg('../images/10.png'),
  img11: SpriteFromImg('../images/11.png'),
  img12: SpriteFromImg('../images/12.png'),
  img13: SpriteFromImg('../images/13.png'),
  img14: SpriteFromImg('../images/14.png'),
  img15: SpriteFromImg('../images/15.png'),
  img16: SpriteFromImg('../images/16.png'),
  img17: SpriteFromImg('../images/17.png'),
  img18: SpriteFromImg('../images/18.png'),
  img19: SpriteFromImg('../images/19.png'),
  img20: SpriteFromImg('../images/20.png'),
  img21: SpriteFromImg('../images/21.png'),
  img22: SpriteFromImg('../images/22.png'),
  img23: SpriteFromImg('../images/23.png'),
  img24: SpriteFromImg('../images/24.png'),
  img25: SpriteFromImg('../images/25.png'),
  img26: SpriteFromImg('../images/26.png'),
  img27: SpriteFromImg('../images/27.png'),
  img28: SpriteFromImg('../images/28.png'),
  img29: SpriteFromImg('../images/29.png'),
  img30: SpriteFromImg('../images/30.png'),
  img31: SpriteFromImg('../images/31.png'),
  img32: SpriteFromImg('../images/32.png'),
  img33: SpriteFromImg('../images/33.png'),
  img34: SpriteFromImg('../images/34.png'),
  img35: SpriteFromImg('../images/35.png'),
  img36: SpriteFromImg('../images/36.png'),
  img37: SpriteFromImg('../images/37.png'),
  img38: SpriteFromImg('../images/38.png'),
  // 
  img61: SpriteFromImg('../images/61.png'),
  img62: SpriteFromImg('../images/62.png'),
  img63: SpriteFromImg('../images/63.png'),
  img64: SpriteFromImg('../images/64.png'),
  img65: SpriteFromImg('../images/65.png'),
  img66: SpriteFromImg('../images/66.png'),
  img67: SpriteFromImg('../images/67.png'),
  img68: SpriteFromImg('../images/68.png'),
  img69: SpriteFromImg('../images/69.png'),
  img70: SpriteFromImg('../images/70.png'),
  img71: SpriteFromImg('../images/71.png'),
  img72: SpriteFromImg('../images/72.png'),
  img73: SpriteFromImg('../images/73.png'),
  img74: SpriteFromImg('../images/74.png'),
  img75: SpriteFromImg('../images/75.png'),
  img76: SpriteFromImg('../images/76.png'),
  img77: SpriteFromImg('../images/77.png'),
  img78: SpriteFromImg('../images/78.png'),
  img79: SpriteFromImg('../images/79.png'),
  img80: SpriteFromImg('../images/80.png'),
  img81: SpriteFromImg('../images/81.png'),
  img82: SpriteFromImg('../images/82.png'),
  img83: SpriteFromImg('../images/83.png'),
  img84: SpriteFromImg('../images/84.png'),
  img85: SpriteFromImg('../images/85.png'),
  img86: SpriteFromImg('../images/86.png'),
  img87: SpriteFromImg('../images/87.png'),
  img88: SpriteFromImg('../images/88.png'),
  img89: SpriteFromImg('../images/89.png'),
  img90: SpriteFromImg('../images/90.png'),
  img91: SpriteFromImg('../images/91.png'),
  img92: SpriteFromImg('../images/92.png'),
  img93: SpriteFromImg('../images/93.png'),
  img94: SpriteFromImg('../images/94.png'),
  img95: SpriteFromImg('../images/95.png'),
  img96: SpriteFromImg('../images/96.png'),
  img97: SpriteFromImg('../images/97.png'),
  img98: SpriteFromImg('../images/98.png'),
  img99: SpriteFromImg('../images/99.png'),
  img100: SpriteFromImg('../images/100.png'),
  img101: SpriteFromImg('../images/101.png'),
  img102: SpriteFromImg('../images/102.png'),
  img103: SpriteFromImg('../images/103.png'),
  img104: SpriteFromImg('../images/104.png'),
  img105: SpriteFromImg('../images/105.png'),
  img106: SpriteFromImg('../images/106.png'),
  img107: SpriteFromImg('../images/107.png'),
  img108: SpriteFromImg('../images/108.png'),
  img109: SpriteFromImg('../images/109.png'),
  img110: SpriteFromImg('../images/110.png'),
  img111: SpriteFromImg('../images/111.png'),
  img112: SpriteFromImg('../images/112.png'),
  img113: SpriteFromImg('../images/113.png'),
  img114: SpriteFromImg('../images/114.png'),
  img115: SpriteFromImg('../images/115.png'),
  img116: SpriteFromImg('../images/116.png'),
  img117: SpriteFromImg('../images/117.png'),
  img118: SpriteFromImg('../images/118.png'),
  img119: SpriteFromImg('../images/119.png'),
  img120: SpriteFromImg('../images/120.png'),
  img121: SpriteFromImg('../images/121.png'),
  img122: SpriteFromImg('../images/122.png'),
  img124: SpriteFromImg('../images/124.png'),
}
const app = new PIXI.Application({
  width: w, // default: 800
  height: h, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1 // default: 1
});

//————————————————————————————————————————————
// * 数据
//————————————————————————————————————————————
console.log('Q1', Q1);
console.log('Q2', Q2);
console.log('Q3', Q3);
console.log('Q4', Q4);
//————————————————————————————————————————————
// * 记录三道题用户选择的答案
// * 把每道选择后的题对应数据存入对应数组
// * 提供结果页选择对应答案渲染
//————————————————————————————————————————————
var targetArr = {
  Q1Arr: [],
  Q2Arr: [],
  Q3Arr: [],
};
for (var l = 0; l < 4; l++) {
  problem[l].addEventListener('click', (e) => {
    for (var x = 0; x < 4; x++) {
      if (e.target.innerHTML === Q1.opations[x][0].front.title) {
        targetArr.Q1Arr.push(Q1.opations[x][0]);
      } else if (e.target.innerHTML === Q1.opations[x][1].front.title) {
        targetArr.Q1Arr.push(Q1.opations[x][1]);
      } else if (e.target.innerHTML === Q2.opations[x][0].front.title) {
        targetArr.Q2Arr.push(Q2.opations[x][0]);
      } else if (e.target.innerHTML === Q2.opations[x][1].front.title) {
        targetArr.Q2Arr.push(Q2.opations[x][1]);
      } else if (e.target.innerHTML === Q2.opations[x][2].front.title) {
        targetArr.Q2Arr.push(Q2.opations[x][2]);
      } else if (e.target.innerHTML === Q2.opations[x][3].front.title) {
        targetArr.Q2Arr.push(Q2.opations[x][3]);
      } else if (e.target.innerHTML === Q3.opations[x][0].front.title) {
        targetArr.Q3Arr.push(Q3.opations[x][0]);
      } else if (e.target.innerHTML === Q3.opations[x][1].front.title) {
        targetArr.Q3Arr.push(Q3.opations[x][1]);
      }
    }
    console.log('targetArr', targetArr);
  })
}
//————————————————————————————————————————————
// * 渲染结果页数据函数,传入一个对象
//————————————————————————————————————————————
function RenderData(opations) {
  console.log('opations', opations)
  //————————————————————————————————————————————
  // * 头衔IMG - 认证章 - 百分比 - 段落内容
  //————————————————————————————————————————————
  $('#testResult .testResultTitle,#shareContent .shareContentTitle').attr('src', `/images/title/${opations.id}.png`);
  $('#testResult .testResultBadge,#shareContent .shareContentBadge').html(opations.badge)
  $('#testResult .testResultPercentage,#shareContent .shareContentPercentage').html(opations.probability)
  $('#testResult .testResultText,#shareContent .shareContentText').html(opations.content)
  //————————————————————————————————————————————
  // * 判断badge内容改变对应徽章IMGURL
  //————————————————————————————————————————————
  if (opations.badge === "当场顿悟生活美满章") {
    $('.testResultMedal,.shareContentMedal').attr('src', `/images/end/badge_1.png`)
  } else if (opations.badge === "身体健康吃喝不胖章") {
    $('.testResultMedal,.shareContentMedal').attr('src', `/images/end/badge_2.png`)
  } else if (opations.badge === "水逆退散护身符") {
    $('.testResultMedal,.shareContentMedal').attr('src', `/images/end/badge_3.png`)
  } else if (opations.badge === "运气爆棚认证章") {
    $('.testResultMedal,.shareContentMedal').attr('src', `/images/end/badge_4.png`)
  } else if (opations.badge === "桃花旺盛不再头秃符") {
    $('.testResultMedal,.shareContentMedal').attr('src', `/images/end/badge_5.png`)
  } else if (opations.badge === "喜和爱好运常来符") {
    $('.testResultMedal,.shareContentMedal').attr('src', `/images/end/badge_6.png`)
  }
  //————————————————————————————————————————————
  // * 随机六位数编码
  //————————————————————————————————————————————
  var Num = "";
  for (var i = 0; i < 6; i++) {
    Num += Math.floor(Math.random() * 10);
  }
  $('.testResultSpan,.shareContentSpan').html(`VOL.LI.2019 测试报告编码： NO.${Num}`);
}
//————————————————————————————————————————————
// * 随机塔罗牌，确定答案，渲染数据。
// * 随机确定一张牌,改变imageURL。
// * 然后再去判断这张牌对应需要渲染的数据.
//————————————————————————————————————————————
function pokerRandom(arr) {
  var index = Math.floor((Math.random() * arr.length));
  return arr[index];
}
var ChooseFour = pokerRandom(pokerRandom(Q4));
// 一开始就随机确定好一张塔罗牌。
console.log('ChooseFour', ChooseFour);
// 判断塔罗牌答案
function answerJudge(price) {
  // 塔罗牌所有结果根据1-2-3分好组,特殊牌除外.
  const optionsArr = {
    Q1Arr: [Q4[0][0].title, Q4[1][0].title, Q4[2][0].title],
    Q2Arr: [Q4[0][1].title, Q4[1][1].title, Q4[2][1].title],
    Q3Arr: [Q4[0][2].title, Q4[1][2].title, Q4[2][2].title],
  };
  // 改变卡牌背面的路径
  pokerBack.style.background = `url('../images/${ChooseFour.imgUrl}.png') no-repeat`;
  // 改变测试完毕信息条弹出的内容
  $('.messageItem4 p').html(ChooseFour.text1);
  $('.messageItem5 p').html(ChooseFour.text2);
  $('.messageItem6 p').html(ChooseFour.text3);
  $('.messageItem7 p').html(ChooseFour.text4);
  // price参数为传进来的随机title卡牌，用includes方法去检测这张随机卡存在Q1Arr-Q3Arr中的哪组。
  // 且进一步判断该卡牌是否为反面卡，如不是则为正面卡。
  // 除了正反两面状态外，还有三张特殊牌特殊处理。
  // 根据对应的条件判断，对结果生成页做相应渲染。
  if (optionsArr.Q1Arr.includes(price)) {
    if (price === Q4[2][0].title) {
      // Q1渲染答案-反面
      RenderData(targetArr.Q1Arr[0].verso)
    } else {
      // Q1渲染答案-正面
      RenderData(targetArr.Q1Arr[0].front)
    }
  } else if (optionsArr.Q2Arr.includes(price)) {
    if (price === Q4[2][1].title) {
      // Q2渲染答案-反面
      RenderData(targetArr.Q2Arr[0].verso)
    } else {
      // Q2渲染答案-正面
      RenderData(targetArr.Q2Arr[0].front)
    }
  } else if (optionsArr.Q3Arr.includes(price)) {
    if (price === Q4[2][2].title) {
      // Q3渲染答案-反面
      RenderData(targetArr.Q3Arr[0].verso)
    } else {
      // Q3渲染答案-正面
      RenderData(targetArr.Q3Arr[0].front)
    }
  } else {
    //——————————————————————————————————————————————————————————
    // * 三张特殊牌 - 太阳- 星星- 恶魔（反面）根据自身Q4来渲染答案
    //——————————————————————————————————————————————————————————
    if (price === Q4[0][3].title) {
      RenderData(pokerRandom(Q4[0][3].special))
    } else if (price === Q4[1][3].title) {
      RenderData(pokerRandom(Q4[1][3].special))
    } else if (price === Q4[2][3].title) {
      RenderData(pokerRandom(Q4[2][3].special))
    }
  }
}

//————————————————————————————————————————————
// * 随机分组函数 后面三道题渲染题目用
//————————————————————————————————————————————
// 
function optionsRandom(arr) {
  var index = Math.floor((Math.random() * arr.length));
  return arr[index].front.title
}
//————————————————————————————————————————————
// * Loading加载
//————————————————————————————————————————————

var imgs1 = new Image(),
  imgs2 = new Image(),
  imgs3 = new Image(),
  imgs4 = new Image(),
  imgs5 = new Image();
imgs1.src = "../images/loadingBackgorund.png";
imgs2.src = "../images/116.png";
imgs3.src = "../images/118.png";
imgs4.src = "../images/120.png";
imgs5.src = "../images/loadingCenter.png";
var myinterval = null;
myfun01()
myinterval = setInterval(myfun01, 1)

function myfun01() {
  if (imgs1.complete && imgs2.complete && imgs3.complete && imgs4.complete && imgs5.complete) {
    clearInterval(myinterval);
    console.log('Loading元素预加载');
    // 背景图加载完毕-显示loading
    loadingBackground.style.opacity = 1;
    //开始加载
    for (var i = 0; i < 124; i++) {
      loader.add('img' + i + '', '../images/' + i + '.png')
    }
    loader.on("progress", function (target, resource) {
      var a = Math.floor(target.progress);
      loadingText.innerHTML = `正在${a}%奋力`;
    });
    //加载完成
    loader.once('complete', function (target, resource) {
      console.log('加载完毕,将舞台视图添加到canvasBox容器!');
      canvas.appendChild(app.view);
      //动画起点函数
      cutSceneNext1();
    });
    loader.load(); // 开始加载资源

  }
}





//————————————————————————————————————————————
// * Html2Canvas2Image 
//————————————————————————————————————————————
function html2canvas2image() {
  var shareContent = shareContentBox;
  var width = shareContent.offsetWidth;
  var height = shareContent.offsetHeight;
  var canvas = document.createElement("canvas");
  console.log(canvas)
  var scale = 2;
  canvas.width = width * scale;
  canvas.height = height * scale;
  var content = canvas.getContext("2d");
  content.scale(scale, scale);
  var rect = shareContent.getBoundingClientRect(); //获取元素相对于视察的偏移量
  content.translate(-rect.left, -rect.top); //设置context位置，值为相对于视窗的偏移量负值，让图片复位
  var opts = {
    canvas: canvas,
    logging: false,
    width: width,
    height: height,
    useCORS: true,
  };
  html2canvas(shareContent, opts).then(function (canvas) {
    var context = canvas.getContext('2d');
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
    document.getElementById('canvas-box').appendChild(img);
    $(img).css({
      "width": canvas.width / 2 + "px",
      "height": canvas.height / 2 + "px",
      "z-index": 99,
      "position": "absolute",
      "left": "50%",
      "top": "50%",
      "transform": "translate(-50%,-50%)",
      "opacity": 0,
    })
  });
}

//————————————————————————————————————————————
// * 全局可控精灵函数
//————————————————————————————————————————————
// 需求为中心点=0.5 / X,Y轴=375,720的精灵函数
function positionSet(spriteS, x, y) {
  for (var j = 0; j < spriteS.length; j++) {
    spriteS[j].position.set(x, y);
    spriteS[j].anchor.set(0.5);
  }
}
// 需求为透明度预设为0的精灵
function alphaSet(spriteS) {
  for (var j = 0; j < spriteS.length; j++) {
    spriteS[j].alpha = 0;
  }
}
// 需求为scale缩放为0.9的精灵。  --- 暂未使用 ---
function scaleSet(spriteS) {
  for (var j = 0; j < spriteS.length; j++) {
    spriteS[j].scale.set(0.9);
  }
}



//————————————————————————————————————————————
// * Music状态样式控制
//————————————————————————————————————————————

music.addEventListener('click', () => {
  if (music.className.indexOf('music1') >= 0) {
    music.className = 'music2';
  } else {
    music.className = 'music1';
  }
})
//————————————————————————————————————————————
// * Video 未完善
//————————————————————————————————————————————
// IOS微信自动播放
// document.addEventListener("WeixinJSBridgeReady", function () {
//   document.getElementById('video').play();
// }, false);
// 点击'div块'播放 
// document.getElementById('play').onclick = function () {
//   document.getElementById('video').play();
//   console.log('click Play right!')
// }
// 开始播放后企鹅消失
video.onplay = () => {
  // document.getElementById('posterQ').style.visibility = 'hidden';
  document.getElementById('posterQ').style.opacity = 0;
}