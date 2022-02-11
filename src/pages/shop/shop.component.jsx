import React from 'react';

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collect/collection-preview.component.jsx';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collection: SHOP_DATA
        };
    }

    render() {
        const collections = this.state.collection;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;