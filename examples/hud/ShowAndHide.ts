/// <reference path="../../src/Kiwi.ts" />

class ShowAndHide extends Kiwi.State {

    constructor() {
        super('ShowAndHide');        
    }
    
    public score: Kiwi.HUD.BasicScore;
    public girl: Kiwi.GameObjects.Sprite;

    init() {
        this.score = new Kiwi.HUD.BasicScore(20, 20);

        this.score.container.style.color = 'pink';
        this.score.container.style.width = '400px';
        this.score.container.style.height = '20px';
        
        this.score.counter.increment(200);

        this.game.huds.defaultHUD().addWidget(this.score);
        this.game.huds.hideHUD();
    }

    preload() {
        this.addImage('cat-girl', 'assets/sprites/planetcute/Character Cat Girl.png', false);
    }

    create() {
        this.girl = new Kiwi.GameObjects.Sprite('cat-girl', this.cache, 200, 200);
        this.addChild(this.girl);

        this.girl.input.inputEntered.add(this.show, this);
        this.girl.input.inputLeft.add(this.hide, this);
    }

    show() {
        this.game.huds.showHUD();
    }

    hide() {
        this.game.huds.hideHUD();
    }
    
}