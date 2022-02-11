import React from "react";

import CollectionItem from '../collection-item/collection-item.component.jsx';

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
        <h1 className="title">{title}</h1>
        <div className="preview" />
        <div className="collection-preview">
        {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
  );
};

export default CollectionPreview;
