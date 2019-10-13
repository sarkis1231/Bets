import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Countries from './Countries';
import { fetchData } from './../actions';
class HomePage extends PureComponent {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const countries = this.props.countries;

        return (
            <div >
                {Object.keys(countries).length > 0 ? <Countries countries={countries} /> : 'Loading...'}
            </div>
        )
    }

}


const mapStateToProps = ({ countries }) => ({ countries })

export default connect(mapStateToProps, { fetchData })(HomePage);