class GlitchEffect {
    constructor() {
        this.glitchBoxes = [];
    }

    createGlitch() {
        // 每次按键创建3-5个故障块
        let numNewBoxes = floor(random(3, 6));
        
        for(let i = 0; i < numNewBoxes; i++) {
            // 限制最大数量为30个
            if (this.glitchBoxes.length < 30) {
                this.glitchBoxes.push(new GlitchBox());
            }
        }
    }

    update() {
        // 更新和显示所有故障块
        for (let i = this.glitchBoxes.length - 1; i >= 0; i--) {
            this.glitchBoxes[i].update();
            this.glitchBoxes[i].display();
            
            // 如果生命周期结束，删除该故障块
            if (this.glitchBoxes[i].isDead()) {
                this.glitchBoxes.splice(i, 1);
            }
        }
    }
}

class GlitchBox {
    constructor() {
        // 随机位置
        this.x = random(width);
        this.y = random(height);
        // 随机大小
        this.w = random(20, 100);
        this.h = random(5, 20);
        // RGB偏移量
        this.offsetR = random(-10, 10);
        this.offsetG = random(-10, 10);
        // 透明度和生命周期
        this.alpha = 255;
        this.lifespan = 255;
    }

    // 更新状态
    update() {
        this.lifespan -= 10;
        this.alpha = this.lifespan;
    }

    // 显示故障效果
    display() {
        noStroke();
        
        // 使用更协调的颜色替代纯色通道
        // 青色通道 (替代红色)
        fill(0, 180, 200, this.alpha); // Cyan/Teal
        rect(this.x + this.offsetR, this.y, this.w, this.h);
        
        // 品红色通道 (替代绿色)
        fill(255, 0, 150, this.alpha); // Magenta/Pink
        rect(this.x + this.offsetG, this.y, this.w, this.h);
        
        // 深蓝色通道 (替代蓝色)
        fill(60, 100, 200, this.alpha); // Deep Blue
        rect(this.x, this.y, this.w, this.h);
        
        // 稍微降低白色叠加层透明度
        fill(255, 255, 255, this.alpha * 0.7); // White overlay with lower alpha
        rect(this.x, this.y, this.w, this.h);
    }

    // 判断是否消失
    isDead() {
        return this.lifespan <= 0;
    }
} 