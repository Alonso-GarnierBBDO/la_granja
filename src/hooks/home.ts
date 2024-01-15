type ClickEvent = {
    offsetX : number,
    offsetY: number
}


const homeConfig = (canva : HTMLCanvasElement) => {
    const ctx : CanvasRenderingContext2D | null = canva.getContext('2d');    
    init(ctx, canva)
}

const init = (ctx : CanvasRenderingContext2D | null, canva : HTMLCanvasElement ) => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    canva.width = width
    canva.height = height

    if(ctx){
        draw(ctx, width, height, canva)
    }

}

const draw = (ctx : CanvasRenderingContext2D, width : number, height : number, canva : HTMLCanvasElement) => {


    // Background Home
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height)

    // Draw the button
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.roundRect(width / 2 - 65, height / 2 - 25, 130, 50, [10, 10, 10, 10]);
    ctx.fill();
    ctx.stroke();

    // Draw text
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.roundRect(5, 5, 50, 50, 5);
    ctx.stroke();
    ctx.font = '20px arial';
    ctx.fillText('Start game', width / 2 - 1, height / 2 + 5, 100)

    // Start Game Click

    canva.addEventListener( 'click',  ( e : ClickEvent ) =>  playGame(e, width, height) , true)

}

function playGame(event : ClickEvent, width : number, height : number){

    const positionX : number = event.offsetX;
    const positionY : number = event.offsetY;
    const buttonPositionLeft = width / 2 - 65;
    const buttonPositionRight = width / 2 + 65;
    const buttonPositionTop = height / 2 - 25;
    const buttonPositionButton = height / 2 + 25;

    if(positionX >= buttonPositionLeft && positionX <= buttonPositionRight && positionY >= buttonPositionTop && positionY <= buttonPositionButton){
        alert("Open Game")
    }

}


export default homeConfig;