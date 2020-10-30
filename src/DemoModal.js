import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
                <AwesomeButton className="modal-button" onPress={this.toggle} size="medium"> Demo </AwesomeButton>
                <Modal className="demo-modal" size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <img src={this.props.gif} />
                    </ModalBody>
                    <ModalFooter>
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href={this.props.source}
                        >
                            Source Code
                        </AwesomeButton>
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href={this.props.video}
                        >
                            Full Video
                        </AwesomeButton>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}