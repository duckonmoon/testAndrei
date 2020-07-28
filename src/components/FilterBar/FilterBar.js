import React from "react";
import {getFilters, getProductsFilters} from "../../redux/selectors";
import {bindActionCreators} from "redux";
import {fetchFilters, applyFilter, clearFilters} from "../../redux/actions";
import connect from "react-redux/es/connect/connect";

import FilterButton from "./FilterButton/FilterButton"
import Button from "react-bootstrap/Button";

class FilterBar extends React.Component {

    componentDidMount() {
        const {fetchFiltersA} = this.props;
        fetchFiltersA();
    }

    getSelectedOption(getProductsFilters, filter) {
        for (let i of getProductsFilters) {
            if (i.name === filter[0]) {
                return i.value;
            }
        }
        return null;
    }

    render() {
        const {applyFilterA, clearFilterS, productsFilterS} = this.props;
        const filters = Object.entries(this.props.filters).map((filter) => <FilterButton
            onSelect={(name, value) => applyFilterA(name, value)} filter={filter} selectedOption={this.getSelectedOption(productsFilterS,filter)} key={filter[0]}/>);
        return (
            <div>
                <div style={{marginBottom: "40px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {filters}
                </div>
                <div>
                    <Button variant="danger" onClick={clearFilterS} style={{
                        marginTop: "-35px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>Clear</Button>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => ({
    filters: getFilters(state),
    productsFilterS: getProductsFilters(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFiltersA: fetchFilters,

    applyFilterA: applyFilter,
    clearFilterS: clearFilters
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);