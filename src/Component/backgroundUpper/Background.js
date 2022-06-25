import UpperLayer from "../upperLayer/UpperLayer";
import './Background.css'



function Background(props) {
    if (!props.show) {
        return null;
    }
    if (props.show) {

        return (<div >
            <section className="orangeLayer">
                <h2 className="heading">IRIS</h2>
                <div className='descOuter'>
                    <p className='desc'>I am Iris, a Virtual Assistant
                        How may I help you?</p>
                </div>
            </section>
            <section className="bottomLayer">

            </section>
            <div className="upperlayer">

                <UpperLayer />
            </div>
        </div>);
    }
}

export default Background;