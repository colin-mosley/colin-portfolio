import React from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { AwesomeButton } from 'react-awesome-button';


export default class DemoModal extends React.Component {

    state = {
        modal: false,
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }


    render() {
        return (
            <div className="modal-container">
                <AwesomeButton onPress={this.toggle} size="medium"> Demo </AwesomeButton>
                <Modal className="demo-modal" size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <img src={this.props.gif} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}