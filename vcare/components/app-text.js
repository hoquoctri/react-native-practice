import {connect} from 'react-redux';
import I18n from '../i18n/i18n';

class AppText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i18n: I18n
        };
    }

    setMainLocaleLanguage = language => {
        let i18n = this.state.i18n;
        i18n.locale = language;
        this.setState({i18n});
    }

    componentWillMount() {
        const {language} = nextProps;
        if (language) this.setMainLocaleLanguage(language);
    }

    render() {
        const {i18nKey, style} =  this.props;
        const {i18n} = this.state;

        return (
            <Text style={style}>
                {i18nKey ? i18n.t(i18nKey) : this.props.children}
            </Text>
        );
    }
}

const mapStateProps = state => {
    return {
        language : state.languageReducer.language
    };
}

export default connect(mapStateToProps, null)(AppText);