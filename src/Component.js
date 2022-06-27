import PropTypes from 'prop-types';

function Component ({name, age}) {
    return `In 5 years ${name} will be ${age + 5}`
}

Component.propTypes ={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
}

export default Component;