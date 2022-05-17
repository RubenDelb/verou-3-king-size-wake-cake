import './Square.scss';

const Square = () => {
    return (
        <div class="scene">
            <div class="box ">
                <div class="box__face box__face--front">front</div>
                <div class="box__face box__face--back">back</div>
                <div class="box__face box__face--right">right</div>
                <div class="box__face box__face--left">left</div>
                <div class="box__face box__face--top">top</div>
                <div class="box__face box__face--bottom">bottom</div>
            </div>
        </div>
    )
}

export default Square