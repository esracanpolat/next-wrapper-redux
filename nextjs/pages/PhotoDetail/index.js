import { useSelector } from "react-redux";

const index = () => {
    const { detailData } = useSelector(state => state);
    console.log("data detail", detailData && JSON.parse(detailData && detailData));
    return (<>
        <div className="bg-black h-16 flex justify-center items-center">
            <p style={{ color: "white", fontSize: 40, fontFamily: "inherit" }}>Fotograf Detayı</p>
        </div>
        <div className="flex justify-center" style={{ padding: 50, height: "80%" }}>
            <img src={detailData && JSON.parse(detailData && detailData).url} style={{ height: 400, width: 400 }} />
        </div>
    </>);
}

export default index;
