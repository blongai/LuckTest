function RenderingStars() {
  console.log('starsRendering~~~~!!!!')
  var CubicBezier = (function () {
    function CubicBezier(p1x, p1y, p2x, p2y) {
      if (p1x === void 0) {
        p1x = 0;
      }
      if (p1y === void 0) {
        p1y = 0;
      }
      if (p2x === void 0) {
        p2x = 1;
      }
      if (p2y === void 0) {
        p2y = 1;
      }
      this.p1x = p1x;
      this.p1y = p1y;
      this.p2x = p2x;
      this.p2y = p2y;
      this.cx = 3.0 * this.p1x;
      this.cy = 3.0 * this.p1y;
      this.bx = 3.0 * (this.p2x - this.p1x) - this.cx;
      this.by = 3.0 * (this.p2y - this.p1y) - this.cy;
      this.ax = 1.0 - this.cx - this.bx;
      this.ay = 1.0 - this.cy - this.by;
      this.ease = this.ease.bind(this);
    }
    CubicBezier.create = function (name, p1x, p1y, p2x, p2y) {
      if (p1x === void 0) {
        p1x = 0;
      }
      if (p1y === void 0) {
        p1y = 0;
      }
      if (p2x === void 0) {
        p2x = 1;
      }
      if (p2y === void 0) {
        p2y = 1;
      }
      var easing = new CubicBezier(p1x, p1y, p2x, p2y);
      if (typeof name === "string")
        CubicBezier.easings[name] = easing;
      return easing.ease;
    };
    CubicBezier.config = function (p1x, p1y, p2x, p2y) {
      if (p1x === void 0) {
        p1x = 0;
      }
      if (p1y === void 0) {
        p1y = 0;
      }
      if (p2x === void 0) {
        p2x = 1;
      }
      if (p2y === void 0) {
        p2y = 1;
      }
      return new CubicBezier(p1x, p1y, p2x, p2y).ease;
    };
    CubicBezier.get = function (name) {
      return CubicBezier.easings[name].ease;
    };
    CubicBezier.prototype.getEpsilon = function (duration) {
      if (duration === void 0) {
        duration = 400;
      }
      return 1 / (200 * duration);
    };
    CubicBezier.prototype.ease = function (time, start, change, duration) {
      return this.solve(time, this.getEpsilon(duration));
    };
    CubicBezier.prototype.solve = function (x, epsilon) {
      return this.sampleCurveY(this.solveCurveX(x, epsilon));
    };
    CubicBezier.prototype.sampleCurveX = function (t) {
      return ((this.ax * t + this.bx) * t + this.cx) * t;
    };
    CubicBezier.prototype.sampleCurveY = function (t) {
      return ((this.ay * t + this.by) * t + this.cy) * t;
    };
    CubicBezier.prototype.sampleDerivX = function (t) {
      return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
    };
    CubicBezier.prototype.solveCurveX = function (x, epsilon) {
      var t0;
      var t1;
      var t2;
      var x2;
      var d2;
      for (var i = 0, t2 = x; i < 8; i++) {
        x2 = this.sampleCurveX(t2) - x;
        if (Math.abs(x2) < epsilon)
          return t2;
        d2 = this.sampleDerivX(t2);
        if (Math.abs(d2) < epsilon)
          break;
        t2 = t2 - x2 / d2;
      }
      t0 = 0.0;
      t1 = 1.0;
      t2 = x;
      if (t2 < t0)
        return t0;
      if (t2 > t1)
        return t1;
      while (t0 < t1) {
        x2 = this.sampleCurveX(t2);
        if (Math.abs(x2 - x) < epsilon)
          return t2;
        if (x > x2)
          t0 = t2;
        else
          t1 = t2;
        t2 = (t1 - t0) * 0.5 + t0;
      }
      return t2;
    };
    CubicBezier.easings = {};
    return CubicBezier;
  })();

  /**/
  function Stars(callback) {
    this.renderer = null;
    this.stage = new PIXI.Container();
    this.stars = [];
    this.starGraphic = null;
    this.starSizeDistribution = CubicBezier.config(0.64, 0, 1, 0.14);

    this.starSettings = {
      numParticles: 400,
      alphaMin: 0.1,
      alphaMax: .7,
      fadeSpeedMax: 0.01,
      fadeSpeedMin: 0.005
    };

    this.stageSettings = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.init = function () {
      this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
        transparent: true
      });
      document.body.appendChild(this.renderer.view);
      this.prepareStars();
      this.animate();
    }.bind(this);

    this.prepareStars = function () {
      for (var i = 0; i < this.starSettings.numParticles; i++) {
        this.newStar();
      }
    }.bind(this);

    this.newStar = function () {
      var settings = this.starSettings;
      var texture = PIXI.Texture.fromCanvas(this.getStarGraphic());
      var star = new PIXI.Sprite(texture);
      var scale = 0.3 + (this.starSizeDistribution(Math.random()) * 0.7);
      this.stage.addChild(star);
      star.anchor.x = 0.5;
      star.anchor.y = 0.5;
      star.scale.x = scale;
      star.scale.y = scale;
      star.alpha = Math.random();
      star.fadeSpeed = settings.fadeSpeedMin + (settings.fadeSpeedMax * Math.random());
      star.radSpeed = star.fadeSpeed;
      star.rad = 180 * Math.random();
      star.pX = Math.random();
      star.pY = Math.random();
      star.position.x = this.stageSettings.width * star.pX;
      star.position.y = this.stageSettings.height * star.pY;
      if (star.alpha < settings.alphaMin) star.fadeSpeed = Math.abs(star.fadeSpeed);
      if (star.alpha >= settings.alphaMax) star.fadeSpeed = -Math.abs(star.fadeSpeed);
      this.stars.push(star);
      return star;
    }.bind(this);

    this.getStarGraphic = function () {
      var starCanvas;
      if (!this.starGraphic) {
        starCanvas = document.createElement('canvas');
        starCanvas.setAttribute("width", 20);
        starCanvas.setAttribute("height", 20);
        starCTX = starCanvas.getContext("2d");
        starCTX.beginPath();
        starCTX.arc(10, 10, 3, 0, 2 * Math.PI, true);
        starCTX.fillStyle = '#FFFFFF';
        starCTX.fill();
        this.starGraphic = starCanvas;
      } else {
        starCanvas = this.starGraphic;
      }
      return starCanvas;
    }.bind(this);

    this.animate = function () {
      requestAnimationFrame(this.animate);

      for (var s in this.stars) {
        var star = this.stars[s];

        this.pos(star);
        // this.pan(star, 0, 0.2);
        this.sineFade(star);

      }
      this.renderer.render(this.stage);
    }.bind(this);

    this.sineFade = function (particle) {
      //console.log(particle.alpha); 
      particle.rad += particle.radSpeed * 3;
      var fade = (Math.sin(particle.rad) + 1) / 2;
      var alpha = this.starSettings.alphaMin + (this.starSettings.alphaMax * fade);
      if (alpha > 1) alpha = 1;
      particle.alpha = alpha;
    }.bind(this);

    this.pos = function (particle) {
      particle.x = this.stageSettings.width * particle.pX;
      particle.y = this.stageSettings.height * particle.pY;
    }.bind(this);

    this.pan = function (particle, speedX, speedY) {
      particle.x += speedX;
      particle.y += speedY;
      if (particle.y < 0) {
        particle.y = this.stageSettings.height + particle.y;
      } else if (particle.y > this.stageSettings.height) {
        particle.y = 0 - particle.y;
      }
      if (particle.x < 0) {
        particle.x = this.stageSettings.width + particle.x;
      } else if (particle.x > this.stageSettings.width) {
        particle.x = 0 - particle.x;
      }
      particle.pX = particle.x / this.stageSettings.width;
      particle.pY = particle.y / this.stageSettings.height;
      //star.y -= 10;
      //if(!star.orgScale) star.orgScale = star.scale.y;
      //star.scale.y = star.orgScale * 2;
      //star.scale.x = star.orgScale - 0.4;
    }.bind(this);

    this.reset = function () {
      this.stars = [];
      this.stage.removeChildren()
      this.renderer.view.parentNode.removeChild(this.renderer.view);
      this.init();
    }

    this.renderFullScreen = function () {
      this.renderer.view.setAttribute("width", window.innerWidth);
      this.stageSettings.width = window.innerWidth;

      this.renderer.view.setAttribute("height", window.innerHeight);
      this.stageSettings.height = window.innerHeight;
      this.renderer.resize(window.innerWidth, window.innerHeight);

      setTimeout(function () {
        this.renderer.view.setAttribute("height", window.innerHeight);
        this.stageSettings.height = window.innerHeight;
        this.renderer.resize(window.innerWidth, window.innerHeight);
      }.bind(this), 0);

    }.bind(this);

    this.init();
    if (callback) callback();
  }

  var stars = new Stars();
  window.onresize = stars.renderFullScreen;

}