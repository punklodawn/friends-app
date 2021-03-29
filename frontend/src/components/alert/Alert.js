import {connect} from "react-redux";

const Alert = ({message}) => {
    const {type, text ,display, title} = message;
    return (
        <div className={`alert alert-${type} alert-dismissible fade show d-${display}`} role="alert">
            <strong>{title}</strong> {text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(Alert)