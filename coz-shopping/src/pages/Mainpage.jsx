import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../productSlice';
import Product from '../components/Item';
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
`

function Mainpage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const loading = useSelector((state) => state.products.loading);

    useEffect(() => {
        dispatch(fetchProducts(4));
    }, [dispatch]);

    return (
        <>
            <section>
                <h2>상품 리스트</h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Ul>
                        {products.map((product) => (
                            <Product {...product} />
                        ))}
                    </Ul>
                )}
            </section>
            <section>
                <h2>북마크 리스트</h2>
            </section>
        </>
    );
}

export default Mainpage;