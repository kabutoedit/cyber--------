import React, { useState } from 'react';
import styles from './style.module.scss';
import '../../app/index.css';
import ButtonWidget from '../buttonWidget/ButtonWidget';
export default function DiscountProductsWidget() {
    const [fillColors, setFillColors] = useState({});
    const products = [
        {
            id: 1,
            img: 'src/widgets/discountProductsWidget/img/iphone14pro.png',
            title: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
            price: '$1437',
        },
        {
            id: 2,
            img: 'src/widgets/discountProductsWidget/img/airPodsMax.png',
            title: 'AirPods Max Silver Starlight Aluminium',
            price: '$549',
        },
        {
            id: 3,
            img: 'src/widgets/discountProductsWidget/img/appleWatch.png',
            title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ',
            price: '$399',
        },
        {
            id: 4,
            img: 'src/widgets/discountProductsWidget/img/iphone14proSilver.png',
            title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
            price: '$1499',
        },
    ];
    const changeColor = id => {
        setFillColors(prevState => ({
            ...prevState,
            [id]: {
                fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
                stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
            },
        }));
    };
    return (React.createElement("section", { className: styles.discountProducts },
        React.createElement("div", { className: 'container' },
            React.createElement("h2", { className: styles.discountProductsTitle }, "Discounts up to -50%"),
            React.createElement("div", { className: styles.products }, products.map(product => (React.createElement("div", { className: styles.product, key: product.id },
                React.createElement("h6", { className: styles.heart },
                    React.createElement("svg", { width: '32', height: '32', viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg', onClick: () => changeColor(product.id), style: {
                            fill: fillColors[product.id]?.fill || '#f6f6f6',
                            stroke: fillColors[product.id]?.stroke || '#A8A8A8',
                        } },
                        React.createElement("path", { d: 'M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z', strokeOpacity: '0.77', strokeWidth: '1.4' }))),
                React.createElement("div", { className: styles.img },
                    React.createElement("img", { src: product.img, alt: 'productImage' })),
                React.createElement("div", { className: styles.description },
                    React.createElement("p", { className: styles.title }, product.title),
                    React.createElement("h2", { className: styles.price }, product.price)),
                React.createElement(ButtonWidget, null))))))));
}