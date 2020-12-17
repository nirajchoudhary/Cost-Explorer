import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
// import * as AuthAction from '../../actions/AuthAction';
import {ToastContainer, toast} from 'react-toastify';
// import {getCurrentLocation} from '../../utils/TokenManager';

class App extends Component {
    componentDidMount = () => {
        // this.authenticate();
    };

    // authenticate = async () => {
    //     await this.props.authenticate();
    //     if (this.props.auth.isAuthenticated) {
    //         await this.props.setLocationList();
    //         let currentLocation = parseInt(getCurrentLocation());
    //         await this.props.setChangedLocation(currentLocation);
    //     }
    // };

    render() {
        // if (!this.props.auth.isAuthenticated) {
        //     return (<Redirect to="/login"/>);
        // }
        return (
            <>
                {this.props.children}
                <ToastContainer width={400} 
                    position={toast.POSITION.TOP_CENTER} 
                    autoClose={2000}
                />
            </>
        );
    }
}

App.propTypes = {
    children: PropTypes.array.isRequired
};

// const mapStateToProps = (state) => {
//     return {
//         auth: state.AuthReducer
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(AuthAction, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
