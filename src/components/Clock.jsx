import React, {Component} from 'react'
import './clock.css'


class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {
            time : new Date()
        };
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            this.setState({
                time : new Date()
        })
        }, 1000);
    }


    componentWillMount(){
        clearInterval(this.timeId)
    }

    render() {
        return (
            <>
                {/* <div className="clock">

                    <div className='hour_hand' 
                    style={{transform:`rotateZ(${this.state.time.getHours() *30}deg)`}}></div>


                    <div className='min_hand' 
                    style={{transform:`rotateZ(${this.state.time.getMinutes() *6}deg)`}}></div>

                
                    <div className='sec_hand' 
                    style={{transform:`rotateZ(${this.state.time.getSeconds() *6}deg)`}}></div>


                    <span className='twelve'>12</span>
                    <span className='one'>1</span>
                    <span className='two'>2</span>
                    <span className='three'>3</span>
                    <span className='four'>4</span>
                    <span className='five'>5</span>
                    <span className='six'>6</span>
                    <span className='seven'>7</span>
                    <span className='eight'>8</span>
                    <span className='nine'>9</span>
                    <span className='ten'>10</span>
                    <span className='eleven'>11</span>

                </div> */}



                <div class="w-72 h-72 rounded-full bg-white relative flex items-center justify-center shadow-lg text-center text-gray-600">
    <div class='absolute w-2 h-2 bg-gray-400 border-2 border-white rounded-full' style='top:50%; left:50%; transform:translate(-50%, -50%);'></div>
    <div class='absolute hour_hand w-1/6 h-1/2 bg-gray-800' style={{transform: `rotateZ(${this.state.time.getHours() * 30}deg)`}}></div>
    <div class='absolute min_hand w-1/4 h-4/5 bg-gray-600' style={{transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`}}></div>
    <div class='absolute sec_hand w-1/12 h-full bg-red-500' style={{transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`}}></div>
    <span class='absolute twelve font-bold' style='top:10px; left:46%;'>12</span>
    <span class='absolute one font-bold' style='top:10%; right:26%;'>1</span>
    <span class='absolute two font-bold' style='top:25%; right:10%;'>2</span>
    <span class='absolute three font-bold' style='right:10px; top:46%;'>3</span>
    <span class='absolute four font-bold' style='right:30px; top:67%;'>4</span>
    <span class='absolute five font-bold' style='right:78px; top:80%;'>5</span>
    <span class='absolute six font-bold' style='bottom:10px; left:50%;'>6</span>
    <span class='absolute seven font-bold' style='left:80px; top:82%;'>7</span>
    <span class='absolute eight font-bold' style='left:30px; top:67%;'>8</span>
    <span class='absolute nine font-bold' style='left:30px; top:46%;'>9</span>
    <span class='absolute ten font-bold' style='top:25%; left:10%;'>10</span>
    <span class='absolute eleven font-bold' style='top:10%; left:26%;'>11</span>
</div>

            </>
        )
    }
}

export default Clock