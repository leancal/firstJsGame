class Enemy {
    constructor(){
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
    }
    update(deltaTime){
        //movement
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if(this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }
    draw(context){
        context.drawImage(this.image);
    }
}

class FlyingEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 60;
        this.height = 44;
        this.x = 200;
        this.y = 200;
        this.speedX = 2;
        this.maxFrame = 5;
        this.image = document.getElementById('enemy_fly');
    }
    update(){
        this.x -= this.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < 3) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += this.game.deltaTime;
        }
    }
    draw(context){
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

class GroundEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.speed = 5;
        this.image = document.getElementById('groundEnemy');
    }
    update(){
        this.x -= this.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < 3) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += this.game.deltaTime;
        }
    }
    draw(context){
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

class ClimbingEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.width;
        this.y = 0;
        this.speed = 5;
        this.image = document.getElementById('climbingEnemy');
    }
    update(){
        this.x -= this.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < 3) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += this.game.deltaTime;
        }
    }
    draw(context){
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}