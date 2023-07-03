class Text{
    constructor(){
        this.canvas=document.createElement('canvas');
        //this.canvas.style.position='absolute';
        //this.canvas.style.left='0';
        //this.canvas.style.top='0';
        //document.body.appendChild(this.canvas);

        this.ctx=this.canvas.getContext('2d');
    }
    width(){
        return this.canvas.width;
    }
    height(){
        return this.canvas.height;
    }
    setText(str, density, stageWidth, stageHeight){ //큰 글자 구조 
        this.canvas.width=stageWidth;
        this.canvas.height=stageHeight;

        const myText=str;
        const fontWidth=700;
        const fontSize=600;
        const fontName='Hind';

        this.ctx.clearRect(0,0,stageWidth,stageHeight);
        this.ctx.font=`${fontWidth} ${fontSize}px ${fontName}`;
        this.ctx.fillStyle=`rgba(0,0,0,0.3)`;
        this.ctx.textBaseline='middle';
        const fontPos=this.ctx.measureText(myText);
        this.ctx.fillText(
            myText,
            (stageWidth - fontPos.width)/2,
            fontPos.actualBoundingBoxAscent+
            fontPos.actualBoundingBoxDescent+
            ((stageHeight-fontSize)/2)
        );

        return this.dotPos(density, stageWidth, stageHeight);
    }

    dotPos(density, stageWidth, stageHeight){
        const imageData=this.ctx.getImageData(
            0,0,
            stageWidth, stageHeight
        ).data;

        const particles=[];
        let i=0;
        let width=0;
        let pixel;

        for(let height=0; height<stageHeight; height+=density){
            ++i;
            const slide=((i%2)==0);
            width=0;
            if(slide==1){
                width+=6;
            }

            for(width; width<stageWidth; width+=density){
                pixel=imageData[((width+(height*stageWidth))*4)-1];
                if(pixel!=0 &&
                    width>0 &&
                    width<stageWidth &&
                    height>0 &&
                    height<stageHeight){
                        particles.push({
                            x:width,
                            y:height,
                        });
                    }
            }
        }

        return particles; //각 입자의 위치 반환
    }
}

var canvas = document.querySelector('canvas');
console.log(canvas.width);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var starArray=[];
const visit = Array.from(Array(2000), () => Array(2000).fill(null));
//별 달 조금씩 움직이는 ㅛ과 ㄱㅊㅎ
function stars(){
    this.x= Math.round(Math.random() * canvas.width);
    this.y=Math.round(Math.random() * canvas.height);
    this.size=1;
    this.color='white';
    this.opacity=Math.random();
    this.draw=function(){
        if(this.size>=1)this.size-=Math.random() * 0.3;
        this.color='white';
        ctx.fillStyle=this.color;
        ctx.shadowColor=this.color;
        ctx.globalAlpha=this.opacity;
        ctx.shadowBlur=Math.random()*5;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
        ctx.fill();
    }
    this.update=function(s){
        if(this.size<=3)this.size+=Math.random() * 0.3;
        this.color=s;
        ctx.fillStyle=this.color;
        ctx.shadowColor=this.color;
        ctx.shadowBlur=50;
        ctx.globalAlpha=1;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
        ctx.fill();
    }
}
for(var i=0;i<2500;i++){
    starArray.push(new stars());
    starArray[i].draw();
}
//위치 어떻게 정할지 고민해보기
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i=0;i<2500;i++){
        if(visit[starArray[i].x][starArray[i].y]==1){
            starArray[i].update('yellow');
        }
        else{
            starArray[i].draw();
        }
    }
}



function go(x)
{
    var text=new Text();
    var str=x;
    var pos=text.setText(str,1,canvas.width, canvas.height);
    for(let i=0; i<pos.length;i++){
        visit[pos[i].x][pos[i].y]=1;
    }
    animate();
}
function back()
{
    for(let i=0; i<2000;i++){
        for(let j=0; j<2000; j++)
        {
            visit[i][j]=0;
        }
    }
    animate();
}