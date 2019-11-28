import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class AddCategotyModal extends React.Component{
    constructor(props) {
        super(props);
        this.id = 'modal';
        this.div = document.createElement('div');
        this.div.id = this.id;

        document.body.insertAdjacentElement(
            'beforeend',
            this.div,
        )
    }

    componentWillUnmount() {
        this.div.parentNode.removeChild(this.div);
    }

    render() {
        const {showMoadal, children} = this.props;
        return showMoadal
            ? ReactDOM.createPortal(
                children,
                document.getElementById(this.id)
            )
            : null;
    }
}

const mapStateToProps = state => {
    return{
        showMoadal: state.admin.modals.addNoteModalShow
    }
}

export default connect(mapStateToProps)(AddCategotyModal);