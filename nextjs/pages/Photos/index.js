import produce from 'immer';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagition from '../../components/Pagition';
import { detailData, fetchPosts, loadUsers } from '../../components/store/action';
import { wrapper } from '../../components/store/store';
const index = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { allList } = useSelector(state => state);
    function showDetail(photoDetail) {
        dispatch(detailData(photoDetail));
        router.push("/PhotoDetail")
    }
    return (
        <div className="grid-rows-none">
            <div className="bg-black h-16 flex justify-center items-center">
                <p style={{ color: "white", fontSize: 40, fontFamily: "inherit" }}>Fotograflar</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-rows-3 grid-flow-col gap-4" style={{ margin: 50 }}>
                    {JSON.parse(allList) && JSON.parse(allList).map((x) => (<a onClick={() => showDetail(x)}><img src={x.thumbnailUrl} style={{ height: "auto", width: "auto", marginLeft: 10 }} /></a>))}
                </div>
            </div>
        </div>
    );
}

export default index;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res }) => {
            await store.dispatch(fetchPosts(req));
        });

