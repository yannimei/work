import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class AllWorks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            one: "one work-inactive",
            two: "two work-inactive",
        }
    }

    componentDidMount() {
        const selected = this.props.selected;
        switch (selected) {
            case 'one':
                this.setState({ one: "one work-active" });
                break;
            case 'two':
                this.setState({ two: "two work-active" });
                break;
        };
    }
 



    render() {

        return (
            <section className="allworks-container">
                <div className="body">
                    <div className="work-container">
                        <div className="work-selection"><Link to="/cakevr" className={this.state.one}>Cake VR</Link></div>
                        <div className="work-selection"><Link to="/ultimaker" className={this.state.two}>Ultimaker CuraFlow</Link></div>
                    </div>
                </div>
            </section>
        );
    }
}


export default AllWorks;