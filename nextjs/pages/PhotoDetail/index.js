import { useSelector } from "react-redux";

const index = () => {
    const { detailData } = useSelector(state => state);
    console.log("data detail", detailData && JSON.parse(detailData && detailData));
    return (
        <div className="flex justify-center" style={{ height: "100%" }}>
            <img src={detailData && JSON.parse(detailData && detailData).url} style={{ height: 400, width: 400 }} />
        </div>
    );
}

export default index;
