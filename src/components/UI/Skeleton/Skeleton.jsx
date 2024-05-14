import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={350}
        height={650}
        viewBox="0 0 350 650"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="463" rx="10" ry="10" width="350" height="55" />
        <rect x="39" y="463" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="540" rx="10" ry="10" width="95" height="30" />
        <rect x="0" y="2" rx="0" ry="0" width="350" height="440" />
        <rect x="242" y="530" rx="30" ry="30" width="100" height="45" />
    </ContentLoader>
)

export default Skeleton

