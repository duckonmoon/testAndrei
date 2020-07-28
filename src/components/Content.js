import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import LaptopCard from './LaptopCard/LaptopCard'
import RecommendationCard from './RecommendationCard/RecommendationCard'
import FilterBar from './FilterBar/FilterBar'
import {fetchProducts, likeProduct, rateProduct, fetchRecommendations} from '../redux/actions';
import {
    getProductsError,
    getProducts,
    getProductsPending,
    getProductsFilters,
    getRecommendations
} from '../redux/selectors';
import {setUserCookie} from "../util/identity";

class Content extends React.Component {

    filtersMap = {
        "processors": "processor",
        "diagonals": "diagonal",
        "monitorTypes": "monitorType",
        "storageTypes": "storageType",
        "oss": "os",
        "videoCardTypes": "videoCardTypes",
        "videoCards": "videoCardName",
        "rams": "primaryStorage",
        "capacityStorage": "capacityStorage"
    };

    componentDidMount() {
        const {fetchProductsA, fetchRecommendationsA} = this.props;
        setUserCookie();
        fetchProductsA();
        fetchRecommendationsA();
    }

    productFilter(p, filters) {
        for (const filter of filters) {
            if (p[this.filtersMap[filter.name]] !== filter.value) {
                return false;
            }
        }
        return true;
    }

    render() {
        const recommendationsList = this.props.recommendations.length ? this.props.recommendations.map(p =>
            <div key={p.name}>
                <RecommendationCard product={p}/>
            </div>) : [];

        const recommendationHeader = this.props.recommendations.length ? (
            <div style={{width: "100%", textAlign: "center", marginTop: "30px"}}>
                <h2>Recommendations</h2>
            </div>
        ) : [];

        const {likeProducts, rateProducts} = this.props;
        if (!!this.props.error && this.props.error !== "") {
            return (
                <div>
                    ERROR ERROR ERROR
                </div>
            )
        } else if (this.props.pending) {
            return (
                <div>
                    Loading
                </div>
            )
        }

        const productList = this.props.products.filter((p) => this.productFilter(p, this.props.productFilters)).map(p =>
            <div key={p.name}>
                <LaptopCard product={p} onLike={likeProducts} onRating={rateProducts}/>
            </div>);
        return (
            <div style={{marginBottom: "40px", marginTop: "-20px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {recommendationHeader}
                {recommendationsList}

                <div style={{width: "100%", textAlign: "center", marginTop: "30px"}}>
                    <h2>Filters</h2>
                </div>
                <FilterBar/>

                <div style={{width: "100%", textAlign: "center", marginTop: "30px"}}>
                    <h2>Laptops</h2>
                </div>

                {productList}
            </div>)
    }
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state),
    productFilters: getProductsFilters(state),
    recommendations: getRecommendations(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProductsA: fetchProducts,
    fetchRecommendationsA: fetchRecommendations,
    likeProducts: likeProduct,
    rateProducts: rateProduct
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);