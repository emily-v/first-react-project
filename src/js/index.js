//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import {Home} from './component/home.jsx';

//render your react application
ReactDOM.render(
    <div>
        <Navbar />
        <Counter 
            hundredThousands={0}
            tenThousands={0}
            thousands={0}
            hundreds={0}
            tens={0}
            zero={0}
        />
        <PricingHeader />
        <div className="container card-deck-container">
            <div className="card-deck">
                <Card
                    title="Free"
                    price="0"
                    users={10}
                    storage={2}
                    textButton="Sign up for free"
                    other={["Email support","Help center access"]}
                    buttonStyle="-outline"
                />
                <Card 
                    title="Pro"
                    price="15"
                    users={20}
                    storage={10}
                    textButton="Get started"
                    other={["Priority email support","Help center access"]}
                />
                <Card 
                    title="Enterprise"
                    price="29"
                    users={30}
                    storage={15}
                    textButton="Contact us"
                    other={["Phone and email support","Help center access"]}
                />
            </div>
        </div>
        <Footer />
    </div>
    ,
    document.querySelector('#app')
);

//simplest way to create a component is to create a function. if function is defined in a global scope, it is a component
function Navbar(props){
    return (<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">Features</a>
            <a className="p-2 text-dark" href="#">Enterprise</a>
            <a className="p-2 text-dark" href="#">Support</a>
            <a className="p-2 text-dark" href="#">Pricing</a>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>);
}

function Counter(props){
    return <div className="container">
        <div className="row bg-dark text-white d-flex justify-content-around pt-3 pb-3">
            <h2 className="d-inline col-1">{'\uf017'}</h2>
            <h2 className="d-inline col-1">{props.hundredThousands}</h2>
            <h2 className="d-inline col-1">{props.tenThousands}</h2>
            <h2 className="d-inline col-1">{props.thousands}</h2>
            <h2 className="d-inline col-1">{props.hundreds}</h2>
            <h2 className="d-inline col-1">{props.tens}</h2>
            <h2 className="d-inline col-1">{props.zero}</h2>
        </div>
    </div>;
}

Counter.propTypes = {
    hundredThousands: PropTypes.number,
    tenThousands: PropTypes.number,
    thousands: PropTypes.number,
    hundreds: PropTypes.number,
    tens: PropTypes.number,
    zero: PropTypes.number
};

function PricingHeader(){
    return <div>
        <div className="pricing-header jumbotron jumbotron-fluid bg-white mx-auto pb-1">
            <div className="container text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It&apos;s built with default Bootstrap components and utilities with little customization.</p>
            </div>
        </div>
    </div>;
}

function Card(props){
    const others = [];
    props.other.forEach(function(element,index){
    others.push(<li key={index}>{element}</li>);
    });
       
    return <div className="card mb-4 shadow-sm">
        <div className="card-header">
            <h4 className="text-center">{props.title}</h4>
        </div>
        <div className="card-body">
            <h1 className="card-title">&#36;{props.price} <small className="text-muted">&#47; mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
                <li>{props.users} users included</li>
                <li>{props.storage} GB of storage</li>
                {others}
            </ul>
            <button type="button" className={"btn btn-lg btn-block btn"+(props.buttonStyle || "")+"-primary"}>{props.textButton}</button> {/*add curly braces to "talk javscript"*/}
        </div>
    </div>;
}

//below are the variables for each of the Cards
Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    users: PropTypes.number,
    storage: PropTypes.number,
    other: PropTypes.array,
    textButton: PropTypes.string,
    buttonStyle: PropTypes.string
};

function Footer(props){
    return (<footer className="pt-4 my-md-5 pt-md-5 border-top mx-auto">
        <div className="row">
            <div className="col-12 col-md">
                <img className="mb-2" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Cool stuff</a></li>
                    <li><a className="text-muted" href="#">Random feature</a></li>
                    <li><a className="text-muted" href="#">Team feature</a></li>
                    <li><a className="text-muted" href="#">Stuff for developers</a></li>
                    <li><a className="text-muted" href="#">Another one</a></li>
                    <li><a className="text-muted" href="#">Last time</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Resource</a></li>
                    <li><a className="text-muted" href="#">Resource name</a></li>
                    <li><a className="text-muted" href="#">Another resource</a></li>
                    <li><a className="text-muted" href="#">Final resource</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Team</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
        </div>
    </footer>);
    }