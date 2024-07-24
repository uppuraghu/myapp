import PropTypes from 'prop-types';
import "./button.css"; // Remove this if not used

const ButtonComponentt = ({ text, bgColor, onPress,  height }) => {
    return (
        <button
            onClick={onPress}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
           
        >
             {text}
        </button>
    );
};

ButtonComponentt.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    onPress: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string
};

ButtonComponentt.defaultProps = {
    text: '',
    bgColor: 'green',
    onPress: () => {},
    width: '100px',
    height: '50px'
};

export default ButtonComponentt;
